import { Injectable, Inject, UnauthorizedException } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { JwtService } from '@nestjs/jwt';
import { firstValueFrom } from 'rxjs';
import { IniciarSesionDto } from '@compartido/dtos';

@Injectable()
export class ServicioAcceso {
  constructor(
    @Inject('SERVICIO_AUTENTICACION') 
    private clienteAutenticacion: ClientProxy,
    private servicioJwt: JwtService,
  ) {}

  /**
   * Valida las credenciales del usuario con el microservicio
   */
  async validarUsuario(datos: IniciarSesionDto): Promise<any> {
    const usuario = await firstValueFrom(
      this.clienteAutenticacion.send({ cmd: 'validar_usuario' }, datos),
    ).catch((error) => {
      console.error('Error al contactar servicio de autenticación:', error);
      throw new UnauthorizedException(
        'Error al validar credenciales. Intenta nuevamente.'
      );
    });

    if (!usuario) {
      throw new UnauthorizedException('Correo o contraseña incorrectos');
    }
    
    return usuario;
  }

  /**
   * Genera un token JWT para el usuario autenticado
   */
  async generarToken(usuario: any) {
    const cargaUtil = { 
      sub: usuario.id,
      correo: usuario.correo,
      rol: usuario.rol
    };
    
    return {
      tokenAcceso: this.servicioJwt.sign(cargaUtil),
      usuario: {
        id: usuario.id,
        correo: usuario.correo,
        nombre: usuario.nombre,
        rol: usuario.rol
      }
    };
  }
}
