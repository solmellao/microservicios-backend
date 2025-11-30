import { Controller, Get, Put, Body, UseGuards, Request } from '@nestjs/common';
import { ApiBearerAuth, ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { GuardiaJwt } from '../acceso/jwt.guardia';
import { ServicioUsuarios } from './usuarios.service';

@ApiTags('👤 Usuarios')
@ApiBearerAuth('JWT-auth')
@UseGuards(GuardiaJwt)
@Controller('usuarios')
export class ControladorUsuarios {
  constructor(private readonly servicioUsuarios: ServicioUsuarios) {}

  @Get('perfil')
  @ApiOperation({ summary: 'Obtener perfil del usuario autenticado' })
  @ApiResponse({ status: 200, description: 'Perfil del usuario' })
  async obtenerPerfil(@Request() req) {
    const usuario = req.user;
    return this.servicioUsuarios.obtenerPorId(usuario.id);
  }

  @Put('perfil')
  @ApiOperation({ summary: 'Actualizar perfil del usuario' })
  @ApiResponse({ status: 200, description: 'Perfil actualizado' })
  async actualizarPerfil(@Request() req, @Body() datos: any) {
    const usuario = req.user;
    return this.servicioUsuarios.actualizarPerfil(usuario.id, datos);
  }

  @Put('cambiar-clave')
  @ApiOperation({ summary: 'Cambiar contraseña del usuario' })
  @ApiResponse({ status: 200, description: 'Contraseña actualizada' })
  @ApiResponse({ status: 401, description: 'Contraseña actual incorrecta' })
  async cambiarClave(@Request() req, @Body() datos: { claveActual: string; claveNueva: string }) {
    const usuario = req.user;
    await this.servicioUsuarios.cambiarClave(usuario.id, datos.claveActual, datos.claveNueva);
    
    return {
      mensaje: 'Contraseña actualizada exitosamente',
    };
  }
}