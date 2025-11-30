import { Injectable, Inject, UnauthorizedException } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class ServicioUsuarios {
  constructor(
    @Inject('SERVICIO_AUTENTICACION')
    private readonly clienteAutenticacion: ClientProxy,
  ) {}

  async obtenerPorId(id: number) {
    try {
      const usuario = await firstValueFrom(
        this.clienteAutenticacion.send(
          { cmd: 'obtener-usuario-por-id' },
          { id }
        )
      );

      // No devolver la contraseña
      const { clave, ...usuarioSinClave } = usuario;
      return usuarioSinClave;
    } catch (error) {
      console.error('Error al obtener usuario:', error);
      throw error;
    }
  }

  async actualizarPerfil(id: number, datos: any) {
    try {
      const usuario = await firstValueFrom(
        this.clienteAutenticacion.send(
          { cmd: 'actualizar-usuario' },
          { id, datos }
        )
      );

      const { clave, ...usuarioSinClave } = usuario;
      return usuarioSinClave;
    } catch (error) {
      console.error('Error al actualizar perfil:', error);
      throw error;
    }
  }

  async cambiarClave(id: number, claveActual: string, claveNueva: string) {
    try {
      // Primero verificar la contraseña actual
      const resultado = await firstValueFrom(
        this.clienteAutenticacion.send(
          { cmd: 'verificar-clave' },
          { id, clave: claveActual }
        )
      );

      if (!resultado.valida) {
        throw new UnauthorizedException('Contraseña actual incorrecta');
      }

      // Actualizar la contraseña
      await firstValueFrom(
        this.clienteAutenticacion.send(
          { cmd: 'cambiar-clave' },
          { id, claveNueva }
        )
      );

      return { mensaje: 'Contraseña actualizada' };
    } catch (error) {
      console.error('Error al cambiar contraseña:', error);
      throw error;
    }
  }
}