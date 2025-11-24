import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, LessThan, DataSource } from 'typeorm';
import { Reserva } from '../entidades/reserva.entidad';
import { Producto } from '../entidades/producto.entidad';

/**
 * Servicio para tareas programadas
 * Limpia reservas expiradas cada 6 horas
 */
@Injectable()
export class ServicioTareas {
  private readonly registrador = new Logger(ServicioTareas.name);

  constructor(
    @InjectRepository(Reserva) 
    private repoReservas: Repository<Reserva>,
    @InjectRepository(Producto) 
    private repoProductos: Repository<Producto>,
    private fuenteDatos: DataSource,
  ) {}

  /**
   * Tarea que se ejecuta cada 6 horas
   * Limpia reservas que tienen más de 3 días
   */
  @Cron(CronExpression.EVERY_6_HOURS)
  async limpiarReservasExpiradas() {
    this.registrador.log('🧹 Buscando reservas expiradas...');

    // Calcular fecha límite (3 días atrás)
    const haceTresDias = new Date();
    haceTresDias.setDate(haceTresDias.getDate() - 3);

    // Buscar reservas expiradas
    const reservasExpiradas = await this.repoReservas.find({
      where: { 
        fechaCreacion: LessThan(haceTresDias) 
      }
    });

    if (reservasExpiradas.length === 0) {
      this.registrador.log('✅ No hay reservas expiradas');
      return;
    }

    this.registrador.warn(
      `🔄 Liberando ${reservasExpiradas.length} reservas expiradas`
    );

    // Procesar todas las reservas en una transacción
    await this.fuenteDatos.transaction(async gestor => {
      for (const reserva of reservasExpiradas) {
        const { idProducto, cantidad } = reserva;

        // Disminuir inventario reservado
        await gestor.decrement(
          Producto, 
          { id: idProducto }, 
          'inventarioReservado', 
          cantidad
        );
        
        // Devolver al inventario físico
        await gestor.increment(
          Producto, 
          { id: idProducto }, 
          'inventario', 
          cantidad
        );

        // Eliminar la reserva
        await gestor.delete(Reserva, reserva.id);
      }
    });
    
    this.registrador.log('✅ Limpieza completada');
  }
}
