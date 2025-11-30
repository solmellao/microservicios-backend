import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, LessThan, DataSource } from 'typeorm';
import { Reserva } from './reserva.entidad';
import { Producto } from './producto.entidad';

/**
 * Servicio para tareas programadas
 * Limpia reservas expiradas cada hora
 */
@Injectable()
export class ServicioTareas {
  private readonly logger = new Logger(ServicioTareas.name);

  // Tiempo de expiración de reservas en minutos
  private readonly TIEMPO_EXPIRACION_MINUTOS = 30;

  constructor(
    @InjectRepository(Reserva)
    private readonly repositorioReservas: Repository<Reserva>,
    @InjectRepository(Producto)
    private readonly repositorioProductos: Repository<Producto>,
    private readonly dataSource: DataSource,
  ) {}

  /**
   * Tarea programada que se ejecuta cada hora
   * Limpia las reservas que tienen más de 30 minutos de antigüedad
   */
  @Cron(CronExpression.EVERY_HOUR)
  async limpiarReservasExpiradas() {
    this.logger.log('Iniciando limpieza de reservas expiradas...');

    try {
      const fechaExpiracion = new Date();
      fechaExpiracion.setMinutes(
        fechaExpiracion.getMinutes() - this.TIEMPO_EXPIRACION_MINUTOS,
      );

      // Buscar reservas expiradas
      const reservasExpiradas = await this.repositorioReservas.find({
        where: {
          fechaCreacion: LessThan(fechaExpiracion),
        },
      });

      if (reservasExpiradas.length === 0) {
        this.logger.log('No hay reservas expiradas para limpiar');
        return;
      }

      this.logger.log(
        `Encontradas ${reservasExpiradas.length} reservas expiradas`,
      );

      // Liberar inventario y eliminar reservas en una transacción
      await this.dataSource.transaction(async (manager) => {
        for (const reserva of reservasExpiradas) {
          // Obtener producto con lock para evitar condiciones de carrera
          const producto = await manager.findOne(Producto, {
            where: { id: reserva.idProducto },
            lock: { mode: 'pessimistic_write' },
          });

          if (producto) {
            // Liberar el inventario reservado
            producto.inventarioReservado -= reserva.cantidad;

            // Asegurarse de que no sea negativo
            if (producto.inventarioReservado < 0) {
              this.logger.warn(
                `Inventario reservado negativo detectado para producto ${producto.id}. Ajustando a 0.`,
              );
              producto.inventarioReservado = 0;
            }

            await manager.save(Producto, producto);

            this.logger.debug(
              `Liberado inventario para producto ${producto.nombre}: ${reserva.cantidad} unidades`,
            );
          }

          // Eliminar la reserva
          await manager.remove(Reserva, reserva);
        }
      });

      this.logger.log(
        `Limpieza completada: ${reservasExpiradas.length} reservas eliminadas`,
      );
    } catch (error) {
      this.logger.error('Error al limpiar reservas expiradas:', error);
      throw error;
    }
  }

  /**
   * Método manual para limpiar reservas (útil para testing)
   */
  async limpiarReservasManual(): Promise<number> {
    this.logger.log('Ejecutando limpieza manual de reservas...');

    const fechaExpiracion = new Date();
    fechaExpiracion.setMinutes(
      fechaExpiracion.getMinutes() - this.TIEMPO_EXPIRACION_MINUTOS,
    );

    const reservasExpiradas = await this.repositorioReservas.find({
      where: {
        fechaCreacion: LessThan(fechaExpiracion),
      },
    });

    if (reservasExpiradas.length === 0) {
      return 0;
    }

    await this.dataSource.transaction(async (manager) => {
      for (const reserva of reservasExpiradas) {
        const producto = await manager.findOne(Producto, {
          where: { id: reserva.idProducto },
          lock: { mode: 'pessimistic_write' },
        });

        if (producto) {
          producto.inventarioReservado -= reserva.cantidad;
          if (producto.inventarioReservado < 0) {
            producto.inventarioReservado = 0;
          }
          await manager.save(Producto, producto);
        }

        await manager.remove(Reserva, reserva);
      }
    });

    return reservasExpiradas.length;
  }

  /**
   * Obtener estadísticas de reservas
   */
  async obtenerEstadisticasReservas() {
    const totalReservas = await this.repositorioReservas.count();
    
    const fechaExpiracion = new Date();
    fechaExpiracion.setMinutes(
      fechaExpiracion.getMinutes() - this.TIEMPO_EXPIRACION_MINUTOS,
    );

    const reservasExpiradas = await this.repositorioReservas.count({
      where: {
        fechaCreacion: LessThan(fechaExpiracion),
      },
    });

    return {
      totalReservas,
      reservasActivas: totalReservas - reservasExpiradas,
      reservasExpiradas,
      tiempoExpiracionMinutos: this.TIEMPO_EXPIRACION_MINUTOS,
    };
  }
}