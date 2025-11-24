import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { ServicioProductos } from './productos.service';
import { CrearProductoDto, ReservarProductoDto } from '@compartido/dtos';
import { ProcesarCompraDto } from '@compartido/dtos';

@Controller()
export class ControladorProductos {
  constructor(
    private readonly servicioProductos: ServicioProductos
  ) {}

  /**
   * Crear un nuevo producto
   */
  @MessagePattern({ cmd: 'crear_producto' })
  crear(dto: CrearProductoDto) {
    return this.servicioProductos.crear(dto);
  }

  /**
   * Obtener todos los productos
   */
  @MessagePattern({ cmd: 'obtener_todos_productos' })
  obtenerTodos() {
    return this.servicioProductos.obtenerTodos();
  }

  /**
   * Obtener productos por lista de IDs
   */
  @MessagePattern({ cmd: 'obtener_productos_por_ids' })
  obtenerPorIds(ids: number[]) {
    return this.servicioProductos.obtenerProductosPorIds(ids);
  }
  
  /**
   * Crear una reserva de stock (cuando se añade al carrito)
   */
  @MessagePattern({ cmd: 'crear_reserva' })
  crearReserva(dto: ReservarProductoDto) {
    return this.servicioProductos.crearReserva(dto);
  }

  /**
   * Confirmar la compra (restar del inventario real)
   */
  @MessagePattern({ cmd: 'confirmar_compra' })
  confirmarCompra(dto: ProcesarCompraDto) {
    return this.servicioProductos.confirmarCompra(dto.articulos);
  }

  /**
   * Cancelar una reserva específica
   */
  @MessagePattern({ cmd: 'cancelar_reserva' })
  cancelarReserva(idReserva: number) {
    return this.servicioProductos.cancelarReserva(idReserva);
  }
}
