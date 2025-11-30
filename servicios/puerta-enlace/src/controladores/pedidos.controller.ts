import { Controller, Get, Post, Body, UseGuards, Request, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { ApiBearerAuth, ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { GuardiaJwt } from '../acceso/jwt.guardia';
import { firstValueFrom } from 'rxjs';

@ApiTags('🧾 Pedidos')
@ApiBearerAuth('JWT-auth')
@UseGuards(GuardiaJwt)
@Controller('pedidos')
export class ControladorPedidos {
  constructor(
    @Inject('SERVICIO_PEDIDOS') private readonly clientePedidos: ClientProxy,
    @Inject('SERVICIO_AUTENTICACION') private readonly clienteAutenticacion: ClientProxy,
  ) {}

  @Get()
  @ApiOperation({ 
    summary: 'Obtener pedidos',
    description: 'Admin ve todos los pedidos, Usuario ve solo los suyos'
  })
  @ApiResponse({ status: 200, description: 'Lista de pedidos' })
  @ApiResponse({ status: 401, description: 'No autorizado' })
  async obtenerPedidos(@Request() req) {
    try {
      const usuario = req.user;
      
      console.log('Usuario solicitando pedidos:', {
        id: usuario.id,
        correo: usuario.correo,
        rol: usuario.rol
      });

      // Obtener todos los pedidos del microservicio
      const pedidos = await firstValueFrom(
        this.clientePedidos.send({ cmd: 'obtener-pedidos' }, {})
      );

      console.log(`Total de pedidos en sistema: ${pedidos.length}`);

      // Si es ADMIN, devolver todos los pedidos con información de usuarios
      if (usuario.rol === 'ADMIN') {
        console.log('Usuario es ADMIN - devolviendo todos los pedidos');
        
        // Enriquecer cada pedido con información del usuario
        const pedidosConUsuarios = await Promise.all(
          pedidos.map(async (pedido) => {
            try {
              const usuarioPedido = await firstValueFrom(
                this.clienteAutenticacion.send(
                  { cmd: 'obtener-usuario-por-id' },
                  { id: pedido.idUsuario }
                )
              );

              return {
                ...pedido,
                usuario: {
                  id: usuarioPedido.id,
                  nombre: usuarioPedido.nombre,
                  correo: usuarioPedido.correo,
                },
              };
            } catch (error) {
              console.error(`Error al obtener usuario ${pedido.idUsuario}:`, error);
              return {
                ...pedido,
                usuario: null,
              };
            }
          })
        );

        return pedidosConUsuarios;
      }

      // Si es USUARIO normal, filtrar solo sus pedidos
      console.log(`Usuario normal (ID: ${usuario.id}) - filtrando sus pedidos`);
      
      const pedidosUsuario = pedidos.filter(
        (pedido) => String(pedido.idUsuario) === String(usuario.id)
      );

      console.log(`Pedidos del usuario ${usuario.id}: ${pedidosUsuario.length}`);

      return pedidosUsuario;
    } catch (error) {
      console.error('Error al obtener pedidos:', error);
      throw error;
    }
  }
}