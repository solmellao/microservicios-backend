import { 
  Injectable, 
  NotFoundException, 
  BadRequestException, 
  InternalServerErrorException 
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository, In, UpdateResult } from 'typeorm';
import { Producto } from '../entidades/producto.entidad';
import { Reserva } from '../entidades/reserva.entidad';
import { CrearProductoDto, ReservarProductoDto } from '@compartido/dtos';
import { ProcesarCompraDto } from '@compartido/dtos';

@Injectable()
export class ServicioProductos {
  constructor(
    @InjectRepository(Producto)
    private repositorioProductos: Repository<Producto>,
    @InjectRepository(Reserva)
    private repositorioReservas: Repository<Reserva>,
    private fuenteDatos: DataSource,
  ) {}
  
  /**
   * Crear un nuevo producto
   */
  async crear(dto: CrearProductoDto): Promise<Producto> {
    const nuevoProducto = this.repositorioProductos.create({
      nombre: dto.nombre,
      precio: dto.precio,
      inventario: dto.inventario,
    });
    return this.repositorioProductos.save(nuevoProducto);
  }

  /**
   * Obtener todos los productos
   */
  async obtenerTodos(): Promise<Producto[]> {
    return this.repositorioProductos.find();
  }
  
  /**
   * Obtener productos por lista de IDs
   */
  async obtenerProductosPorIds(ids: number[]): Promise<Producto[]> {
    return this.repositorioProductos.findBy({ 
      id: In(ids) 
    });
  }

  /**
   * Crear una reserva de stock
   * Se ejecuta cuando un usuario añade un producto al carrito
   */
  async crearReserva(dto: ReservarProductoDto): Promise<Reserva> {
    const ejecutorConsultas = this.fuenteDatos.createQueryRunner();
    await ejecutorConsultas.connect();
    await ejecutorConsultas.startTransaction();

    try {
      const { idProducto, idUsuario, cantidad } = dto;
      
      const producto = await ejecutorConsultas.manager.findOne(Producto, { 
        where: { id: idProducto } 
      });

      if (!producto) {
        throw new NotFoundException(
          `Producto con ID ${idProducto} no encontrado`
        );
      }

      // Verificar stock disponible
      const stockDisponible = producto.inventario - producto.inventarioReservado;
      
      if (stockDisponible < cantidad) {
        throw new BadRequestException(
          `Stock insuficiente. Disponible: ${stockDisponible}, Solicitado: ${cantidad}`
        );
      }

      // Crear la reserva
      const nuevaReserva = ejecutorConsultas.manager.create(Reserva, {
        idProducto,
        idUsuario,
        cantidad,
      });
      await ejecutorConsultas.manager.save(nuevaReserva);
      
      // Incrementar el inventario reservado
      await ejecutorConsultas.manager.increment(
        Producto, 
        { id: idProducto }, 
        'inventarioReservado', 
        cantidad
      );
      
      await ejecutorConsultas.commitTransaction();
      return nuevaReserva;

    } catch (error) {
      await ejecutorConsultas.rollbackTransaction();
      
      if (error instanceof NotFoundException || error instanceof BadRequestException) {
        throw error;
      }
      
      throw new InternalServerErrorException(
        `Error al crear reserva: ${error.message}`
      );
    } finally {
      await ejecutorConsultas.release();
    }
  }

  /**
   * Cancelar una reserva y liberar el stock
   */
  async cancelarReserva(idReserva: number): Promise<void> {
    const reserva = await this.repositorioReservas.findOne({ 
      where: { id: idReserva }
    });

    if (!reserva) {
      return; // Si no existe, simplemente terminar
    }

    const { idProducto, cantidad } = reserva;

    await this.fuenteDatos.transaction(async gestor => {
      // Disminuir el inventario reservado
      await gestor.decrement(
        Producto, 
        { id: idProducto }, 
        'inventarioReservado', 
        cantidad
      );
      
      // Eliminar la reserva
      await gestor.delete(Reserva, idReserva);
    });
  }

  /**
   * Confirmar la compra: restar del inventario real
   * Se ejecuta después de crear el pedido exitosamente
   */
  async confirmarCompra(
    articulos: ProcesarCompraDto['articulos']
  ): Promise<UpdateResult[]> {
    return this.fuenteDatos.transaction(async gestor => {
      const resultados: UpdateResult[] = [];
      
      for (const articulo of articulos) {
        // Actualización atómica: resta de inventario físico y reservado
        const resultado = await gestor.update(
          Producto, 
          { id: articulo.idProducto }, 
          {
            inventario: () => `inventario - ${articulo.cantidad}`,
            inventarioReservado: () => `inventarioReservado - ${articulo.cantidad}`,
          }
        );
        
        resultados.push(resultado);
      }
      
      return resultados;
    });
  }
}
