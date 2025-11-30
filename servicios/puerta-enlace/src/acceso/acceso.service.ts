import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';
import { IniciarSesionDto, RegistrarUsuarioDto } from '@compartido/dtos';

@Injectable()
export class ServicioAcceso {
  constructor(
    @Inject('SERVICIO_AUTENTICACION')
    private readonly clienteAutenticacion: ClientProxy,
  ) {}

  /**
   * Iniciar sesión
   */
  async iniciarSesion(dto: IniciarSesionDto) {
    try {
      const resultado = await firstValueFrom(
        this.clienteAutenticacion.send(
          { cmd: 'iniciar-sesion' },
          { correo: dto.correo, clave: dto.clave }
        )
      );

      return resultado;
    } catch (error) {
      console.error('Error en iniciar sesión:', error);
      throw error;
    }
  }

  /**
   * Registrar un nuevo usuario
   */
  async registrarUsuario(dto: RegistrarUsuarioDto) {
    try {
      const usuario = await firstValueFrom(
        this.clienteAutenticacion.send(
          { cmd: 'registrar-usuario' },
          {
            nombre: dto.nombre,
            correo: dto.correo,
            clave: dto.clave,
          }
        )
      );

      return usuario;
    } catch (error) {
      console.error('Error en registro de usuario:', error);
      throw error;
    }
  }
}