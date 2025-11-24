import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { ServicioGestionPedidos } from './gestion.service';

@Controller()
export class ControladorGestionPedidos {
  constructor(
    private readonly servicioGestion: ServicioGestionPedidos
  ) {}

  /**
   * Obtener todos los pedidos
   */
  @MessagePattern({ cmd: 'obtener_todos_pedidos' })
  obtenerTodos() {
    return this.servicioGestion.obtenerTodos();
  }

  /**
   * Crear un nuevo pedido
   */
  @MessagePattern({ cmd: 'crear_pedido' })
  crear(datos: any) {
    return this.servicioGestion.crear(datos);
  }
}
