import { 
  Controller, 
  Get, 
  UseGuards, 
  Req, 
  Inject, 
  UnauthorizedException 
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { ApiBearerAuth, ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { firstValueFrom } from 'rxjs';
import { GuardiaJwt } from '../acceso/jwt.guardia';

interface SolicitudAutenticada {
  user: {
    idUsuario: number;
    correo: string;
    rol: 'ADMIN' | 'USUARIO' | string;
  };
}

@ApiTags('Pedidos')
@Controller('pedidos')
export class ControladorPedidos {
  constructor(
    @Inject('SERVICIO_PEDIDOS') 
    private readonly clientePedidos: ClientProxy,
    @Inject('SERVICIO_AUTENTICACION') 
    private readonly clienteAutenticacion: ClientProxy,
  ) {}

  @ApiBearerAuth()
  @UseGuards(GuardiaJwt)
  @Get()
  @ApiOperation({ summary: 'Obtener todos los pedidos (Solo ADMIN)' })
  @ApiResponse({ status: 200, description: 'Lista de pedidos con información de usuarios' })
  @ApiResponse({ status: 401, description: 'No autorizado' })
  @ApiResponse({ status: 403, description: 'Prohibido - Requiere rol ADMIN' })
  async obtenerTodosPedidos(@Req() solicitud: SolicitudAutenticada) {
    // Solo administradores pueden ver todos los pedidos
    if (solicitud.user.rol !== 'ADMIN') {
      throw new UnauthorizedException(
        'Acceso denegado. Se requiere rol de Administrador.'
      );
    }

    // Obtener todos los pedidos
    const pedidos = await firstValueFrom(
      this.clientePedidos.send({ cmd: 'obtener_todos_pedidos' }, {})
    );

    // Recolectar IDs únicos de usuarios
    const idsUsuarios = [...new Set(pedidos.map((p: any) => p.idUsuario))];

    // Obtener información de usuarios en una sola llamada
    const mapaUsuarios: Record<number, any> = await firstValueFrom(
      this.clienteAutenticacion.send({ cmd: 'obtener_usuarios_por_ids' }, idsUsuarios)
    );

    // Enriquecer pedidos con datos de usuarios
    return pedidos.map((pedido: any) => {
      const usuario = mapaUsuarios[pedido.idUsuario];
      
      return {
        ...pedido,
        usuario: usuario || {
          nombre: 'Desconocido',
          correo: 'N/A',
          rol: 'N/A'
        }
      };
    });
  }
}
