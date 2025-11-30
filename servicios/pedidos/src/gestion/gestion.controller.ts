import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { ServicioPedidos } from './gestion.service';

@Controller()
export class ControladorPedidos {
  constructor(private readonly servicioPedidos: ServicioPedidos) {}

  /**
   * Crear un nuevo pedido
   */
  @MessagePattern({ cmd: 'crear_pedido' })
  async crearPedido(datos: any) {
    console.log('📋 Recibiendo solicitud de crear pedido:', datos);
    
    try {
      const pedido = await this.servicioPedidos.crearPedido(datos);
      console.log('✅ Pedido creado exitosamente:', pedido);
      return pedido;
    } catch (error) {
      console.error('❌ Error al crear pedido:', error);
      throw error;
    }
  }

  /**
   * Obtener todos los pedidos (usado por el Gateway)
   */
  @MessagePattern({ cmd: 'obtener-pedidos' })
  async obtenerPedidos() {
    console.log('📋 Obteniendo todos los pedidos');
    return this.servicioPedidos.obtenerTodos();
  }

  /**
   * Obtener un pedido por ID
   */
  @MessagePattern({ cmd: 'obtener-pedido-por-id' })
  async obtenerPedidoPorId(datos: { id: string }) {
    console.log('📋 Obteniendo pedido por ID:', datos.id);
    return this.servicioPedidos.obtenerPorId(datos.id);
  }

  /**
   * Obtener pedidos de un usuario específico
   */
  @MessagePattern({ cmd: 'obtener-pedidos-usuario' })
  async obtenerPedidosUsuario(datos: { idUsuario: number }) {
    console.log('📋 Obteniendo pedidos del usuario:', datos.idUsuario);
    return this.servicioPedidos.obtenerPorUsuario(datos.idUsuario);
  }

  /**
   * Actualizar estado de un pedido
   */
  @MessagePattern({ cmd: 'actualizar-estado-pedido' })
  async actualizarEstado(datos: { id: string; estado: string }) {
    console.log('📋 Actualizando estado del pedido:', datos);
    return this.servicioPedidos.actualizarEstado(datos.id, datos.estado);
  }
}