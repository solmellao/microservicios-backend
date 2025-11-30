import {
  Injectable,
  NotFoundException,
  BadRequestException,
  Logger,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository, In, } from 'typeorm';
import { Producto } from './producto.entidad';
import { Reserva } from './reserva.entidad';
import { CrearProductoDto, ReservarProductoDto } from '@compartido/dtos';
import { ProcesarCompraDto } from '@compartido/dtos';

@Injectable()
export class ServicioProductos {
  private readonly logger = new Logger(ServicioProductos.name);

  constructor(
    @InjectRepository(Producto)
    private readonly repositorioProductos: Repository<Producto>,
    @InjectRepository(Reserva)
    private readonly repositorioReservas: Repository<Reserva>,
    private readonly dataSource: DataSource,
  ) {}

  /**
   * Obtener todos los productos
   */
  async obtenerTodos(): Promise<Producto[]> {
    return this.repositorioProductos.find({
      order: { fechaCreacion: 'DESC' },
    });
  }

  /**
   * Obtener un producto por ID
   */
  async obtenerPorId(id: number): Promise<Producto> {
    const producto = await this.repositorioProductos.findOne({
      where: { id },
    });

    if (!producto) {
      throw new NotFoundException(`Producto con ID ${id} no encontrado`);
    }

    return producto;
  }

  /**
   * Obtener múltiples productos por IDs
   */
  async obtenerProductosPorIds(ids: number[]): Promise<Producto[]> {
    if (!ids || ids.length === 0) {
      return [];
    }

    return this.repositorioProductos.find({
      where: { id: In(ids) },
    });
  }

  /**
   * Crear un nuevo producto
   */
  async crear(dto: CrearProductoDto): Promise<Producto> {
    const producto = this.repositorioProductos.create({
      nombre: dto.nombre,
      precio: dto.precio,
      inventario: dto.inventario,
      inventarioReservado: 0,
    });

    return this.repositorioProductos.save(producto);
  }

  /**
   * Reservar productos (para el carrito)
   * Esta operación es temporal hasta que se confirme la compra
   */
  async reservarProductos(dto: ReservarProductoDto): Promise<Reserva> {
    const { idProducto, cantidad, idUsuario } = dto;

    return this.dataSource.transaction(async (manager) => {
      // Bloquear el producto para evitar condiciones de carrera
      const producto = await manager.findOne(Producto, {
        where: { id: idProducto },
        lock: { mode: 'pessimistic_write' },
      });

      if (!producto) {
        throw new NotFoundException(`Producto con ID ${idProducto} no encontrado`);
      }

      // Verificar stock disponible
      const stockDisponible = producto.inventario - producto.inventarioReservado;

      if (stockDisponible < cantidad) {
        throw new BadRequestException(
          `Stock insuficiente. Disponible: ${stockDisponible}, solicitado: ${cantidad}`,
        );
      }

      // Incrementar inventario reservado
      producto.inventarioReservado += cantidad;
      await manager.save(Producto, producto);

      // Crear registro de reserva
      const reserva = manager.create(Reserva, {
        idProducto,
        idUsuario,
        cantidad,
      });

      return manager.save(Reserva, reserva);
    });
  }

  /**
   * Crear reserva (alias de reservarProductos para compatibilidad)
   */
  async crearReserva(dto: ReservarProductoDto): Promise<Reserva> {
    return this.reservarProductos(dto);
  }

  /**
   * Procesar compra - Confirma las reservas y reduce el inventario
   */
  async procesarCompra(dto: ProcesarCompraDto): Promise<void> {
    const { articulos } = dto;

    this.logger.log(`Procesando compra de ${articulos.length} artículos`);

    return this.dataSource.transaction(async (manager) => {
      for (const articulo of articulos) {
        // Obtener producto con lock
        const producto = await manager.findOne(Producto, {
          where: { id: articulo.idProducto },
          lock: { mode: 'pessimistic_write' },
        });

        if (!producto) {
          throw new NotFoundException(
            `Producto con ID ${articulo.idProducto} no encontrado`,
          );
        }

        // Verificar que hay suficiente inventario reservado
        if (producto.inventarioReservado < articulo.cantidad) {
          throw new BadRequestException(
            `Inventario reservado insuficiente para producto ${producto.nombre}`,
          );
        }

        // Reducir tanto el inventario como el reservado
        producto.inventario -= articulo.cantidad;
        producto.inventarioReservado -= articulo.cantidad;

        if (producto.inventario < 0) {
          throw new BadRequestException(
            `Error de inventario para producto ${producto.nombre}`,
          );
        }

        await manager.save(Producto, producto);

        this.logger.log(
          `Producto ${producto.nombre}: inventario actualizado a ${producto.inventario}`,
        );
      }
    });
  }

  /**
   * Liberar reservas - Cancela las reservas y libera el inventario
   */
  async liberarReservas(idsReservas: number[]): Promise<void> {
    if (!idsReservas || idsReservas.length === 0) {
      return;
    }

    return this.dataSource.transaction(async (manager) => {
      const reservas = await manager.find(Reserva, {
        where: { id: In(idsReservas) },
      });

      for (const reserva of reservas) {
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

        // Eliminar la reserva
        await manager.remove(Reserva, reserva);
      }
    });
  }

  /**
   * Verificar disponibilidad de productos
   */
  async verificarDisponibilidad(
    productos: { idProducto: number; cantidad: number }[],
  ): Promise<{ disponible: boolean; mensaje?: string }> {
    for (const item of productos) {
      const producto = await this.repositorioProductos.findOne({
        where: { id: item.idProducto },
      });

      if (!producto) {
        return {
          disponible: false,
          mensaje: `Producto con ID ${item.idProducto} no encontrado`,
        };
      }

      const stockDisponible = producto.inventario - producto.inventarioReservado;

      if (stockDisponible < item.cantidad) {
        return {
          disponible: false,
          mensaje: `Stock insuficiente para ${producto.nombre}. Disponible: ${stockDisponible}`,
        };
      }
    }

    return { disponible: true };
  }

  /**
   * Actualizar producto
   */
  async actualizar(
    id: number,
    datos: Partial<CrearProductoDto>,
  ): Promise<Producto> {
    const producto = await this.obtenerPorId(id);

    Object.assign(producto, datos);

    return this.repositorioProductos.save(producto);
  }

  /**
   * Eliminar producto
   */
  async eliminar(id: number): Promise<void> {
    const producto = await this.obtenerPorId(id);

    if (producto.inventarioReservado > 0) {
      throw new BadRequestException(
        'No se puede eliminar un producto con inventario reservado',
      );
    }

    await this.repositorioProductos.remove(producto);
  }

  /**
   * Obtener estadísticas de inventario
   */
  async obtenerEstadisticas() {
    const productos = await this.repositorioProductos.find();

    const totalProductos = productos.length;
    const inventarioTotal = productos.reduce((sum, p) => sum + p.inventario, 0);
    const inventarioReservado = productos.reduce(
      (sum, p) => sum + p.inventarioReservado,
      0,
    );
    const valorInventario = productos.reduce(
      (sum, p) => sum + p.precio * p.inventario,
      0,
    );

    return {
      totalProductos,
      inventarioTotal,
      inventarioReservado,
      inventarioDisponible: inventarioTotal - inventarioReservado,
      valorInventario: parseFloat(valorInventario.toFixed(2)),
      productosSinStock: productos.filter((p) => p.inventario === 0).length,
    };
  }

  /**
   * Confirmar compra - Resta inventario directamente (sin verificar reservas)
   * MÉTODO CORREGIDO PARA QUE FUNCIONE LA COMPRA
   */
  async confirmarCompra(articulos: any[]) {
    this.logger.log(`✅ Confirmando compra de ${articulos.length} artículos`);

    return this.dataSource.transaction(async (manager) => {
      for (const articulo of articulos) {
        // Obtener producto con lock
        const producto = await manager.findOne(Producto, {
          where: { id: articulo.idProducto },
          lock: { mode: 'pessimistic_write' },
        });

        if (!producto) {
          throw new NotFoundException(
            `Producto con ID ${articulo.idProducto} no encontrado`,
          );
        }

        // Verificar que hay suficiente inventario
        if (producto.inventario < articulo.cantidad) {
          throw new BadRequestException(
            `Stock insuficiente para ${producto.nombre}. Disponible: ${producto.inventario}`,
          );
        }

        // Reducir solo el inventario (sin tocar inventarioReservado)
        producto.inventario -= articulo.cantidad;

        await manager.save(Producto, producto);

        this.logger.log(
          `✅ Producto ${producto.nombre}: inventario actualizado a ${producto.inventario}`,
        );
      }
    });
  }

  /**
   * Cancelar una reserva específica
   */
  async cancelarReserva(idReserva: number) {
    return this.liberarReservas([idReserva]);
  }
}