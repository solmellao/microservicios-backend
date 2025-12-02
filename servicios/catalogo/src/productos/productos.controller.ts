import { Controller } from '@nestjs/common';
import { MessagePattern, RpcException } from '@nestjs/microservices';
import { ServicioProductos } from './productos.service';
import { CrearProductoDto, ReservarProductoDto, ActualizarProductoDto } from '@compartido/dtos';
import { ProcesarCompraDto } from '@compartido/dtos';
import { RpcResponse } from '@compartido/interfaces/rpc-response.interface';

@Controller()
export class ControladorProductos {
  constructor(
    private readonly servicioProductos: ServicioProductos
  ) {}

  /**
   * Crear un nuevo producto
   */
  @MessagePattern({ cmd: 'crear_producto' })
  async crear(dto: CrearProductoDto) {
    try {
      return await this.servicioProductos.crear(dto);
    } catch (error) {
      const rpcError: RpcResponse = {
        statusCode: error.status || 500,
        error: error.message || 'Error al crear producto',
      };
      throw new RpcException(rpcError);
    }
  }

  /**
   * Obtener todos los productos
   */
  @MessagePattern({ cmd: 'obtener_todos_productos' })
  async obtenerTodos() {
    try {
      return await this.servicioProductos.obtenerTodos();
    } catch (error) {
      const rpcError: RpcResponse = {
        statusCode: 500,
        error: error.message || 'Error al obtener productos',
      };
      throw new RpcException(rpcError);
    }
  }

  /**
   * Obtener un producto por ID
   * NUEVO ENDPOINT
   */
  @MessagePattern({ cmd: 'obtener_producto_por_id' })
  async obtenerPorId(id: number) {
    try {
      return await this.servicioProductos.obtenerPorId(id);
    } catch (error) {
      const rpcError: RpcResponse = {
        statusCode: 404,
        error: error.message || 'Producto no encontrado',
      };
      throw new RpcException(rpcError);
    }
  }

  /**
   * Obtener productos por lista de IDs
   */
  @MessagePattern({ cmd: 'obtener_productos_por_ids' })
  async obtenerPorIds(ids: number[]) {
    try {
      return await this.servicioProductos.obtenerProductosPorIds(ids);
    } catch (error) {
      const rpcError: RpcResponse = {
        statusCode: 500,
        error: error.message || 'Error al obtener productos',
      };
      throw new RpcException(rpcError);
    }
  }
  
  /**
   * Actualizar un producto
   * NUEVO ENDPOINT
   */
  @MessagePattern({ cmd: 'actualizar_producto' })
  async actualizar(datos: { id: number; dto: ActualizarProductoDto }) {
    try {
      return await this.servicioProductos.actualizar(datos.id, datos.dto);
    } catch (error) {
      const rpcError: RpcResponse = {
        statusCode: error.status || 500,
        error: error.message || 'Error al actualizar producto',
      };
      throw new RpcException(rpcError);
    }
  }

  /**
   * Crear una reserva de stock (cuando se añade al carrito)
   */
  @MessagePattern({ cmd: 'crear_reserva' })
  async crearReserva(dto: ReservarProductoDto) {
    try {
      return await this.servicioProductos.crearReserva(dto);
    } catch (error) {
      const rpcError: RpcResponse = {
        statusCode: error.status || 500,
        error: error.message || 'Error al crear reserva',
      };
      throw new RpcException(rpcError);
    }
  }

  /**
   * Confirmar la compra (restar del inventario real)
   */
  @MessagePattern({ cmd: 'confirmar_compra' })
  async confirmarCompra(dto: ProcesarCompraDto) {
    try {
      return await this.servicioProductos.confirmarCompra(dto.articulos);
    } catch (error) {
      const rpcError: RpcResponse = {
        statusCode: error.status || 500,
        error: error.message || 'Error al confirmar compra',
      };
      throw new RpcException(rpcError);
    }
  }

  /**
   * Cancelar una reserva específica
   */
  @MessagePattern({ cmd: 'cancelar_reserva' })
  async cancelarReserva(idReserva: number) {
    try {
      return await this.servicioProductos.cancelarReserva(idReserva);
    } catch (error) {
      const rpcError: RpcResponse = {
        statusCode: error.status || 500,
        error: error.message || 'Error al cancelar reserva',
      };
      throw new RpcException(rpcError);
    }
  }
}