import { 
  Controller, 
  Get, 
  Post, 
  Body, 
  Req, 
  UseGuards, 
  Inject, 
  UnauthorizedException 
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { ApiTags, ApiBearerAuth, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { firstValueFrom } from 'rxjs';
import { GuardiaJwt } from '../acceso/jwt.guardia';
import { CrearProductoDto } from '@compartido/dtos';

interface SolicitudAutenticada {
  user: { idUsuario: number; correo: string; rol: string; };
}

@ApiTags('Productos')
@Controller('productos')
export class ControladorProductos {
  constructor(
    @Inject('SERVICIO_CATALOGO') 
    private readonly clienteCatalogo: ClientProxy,
  ) {}

  @Get()
  @ApiOperation({ summary: 'Obtener todos los productos del catálogo' })
  @ApiResponse({ status: 200, description: 'Lista de productos retornada exitosamente' })
  async obtenerTodos() {
    return firstValueFrom(
      this.clienteCatalogo.send({ cmd: 'obtener_todos_productos' }, {})
    );
  }

  @ApiBearerAuth()
  @UseGuards(GuardiaJwt)
  @Post()
  @ApiOperation({ summary: 'Crear un nuevo producto (Solo ADMIN)' })
  @ApiResponse({ status: 201, description: 'Producto creado exitosamente' })
  @ApiResponse({ status: 401, description: 'No autorizado - Token inválido' })
  @ApiResponse({ status: 403, description: 'Prohibido - Requiere rol ADMIN' })
  async crear(
    @Body() crearProductoDto: CrearProductoDto,
    @Req() solicitud: SolicitudAutenticada
  ) {
    // Solo administradores pueden crear productos
    if (solicitud.user.rol !== 'ADMIN') {
      throw new UnauthorizedException(
        'Acceso denegado. Se requiere rol de Administrador.'
      );
    }
    
    return firstValueFrom(
      this.clienteCatalogo.send({ cmd: 'crear_producto' }, crearProductoDto)
    );
  }
}
