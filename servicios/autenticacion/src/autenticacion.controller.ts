import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { ServicioAutenticacion } from './autenticacion.service';
import { IniciarSesionDto } from '@compartido/dtos';

@Controller()
export class ControladorAutenticacion {
  constructor(
    private readonly servicioAutenticacion: ServicioAutenticacion
  ) {}

  /**
   * Valida las credenciales de un usuario
   * @param datos Correo y contraseña del usuario
   * @returns Usuario si las credenciales son válidas, null si no
   */
  @MessagePattern({ cmd: 'validar_usuario' })
  async validarUsuario(datos: IniciarSesionDto) {
    return this.servicioAutenticacion.validarUsuario(datos);
  }

  /**
   * Obtiene usuarios por sus IDs (para enriquecer pedidos)
   * @param ids Lista de IDs de usuarios
   * @returns Mapa de usuarios indexados por ID
   */
  @MessagePattern({ cmd: 'obtener_usuarios_por_ids' })
  async obtenerUsuariosPorIds(ids: number[]) {
    return this.servicioAutenticacion.obtenerUsuariosPorIds(ids);
  }

  /**
   * Crea un nuevo usuario en el sistema
   * @param datos Datos del usuario a crear
   * @returns Usuario creado
   */
  @MessagePattern({ cmd: 'crear_usuario' })
  async crearUsuario(datos: any) {
    return this.servicioAutenticacion.crearUsuario(datos);
  }
}
