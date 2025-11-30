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
   * NUEVO: Iniciar sesión (usado por el Gateway)
   * Valida credenciales y devuelve token JWT + datos de usuario
   */
  @MessagePattern({ cmd: 'iniciar-sesion' })
  async iniciarSesion(datos: IniciarSesionDto) {
    const usuario = await this.servicioAutenticacion.validarUsuario(datos);
    
    if (!usuario) {
      throw new Error('Credenciales inválidas');
    }

    // Generar token JWT
    const token = await this.servicioAutenticacion.generarToken(usuario);

    return {
      tokenAcceso: token,
      usuario: {
        id: usuario.id,
        correo: usuario.correo,
        nombre: usuario.nombre,
        rol: usuario.rol,
      },
    };
  }

  /**
   * NUEVO: Registrar un nuevo usuario
   */
  @MessagePattern({ cmd: 'registrar-usuario' })
  async registrarUsuario(datos: any) {
    return this.servicioAutenticacion.crearUsuario(datos);
  }

  /**
   * NUEVO: Obtener un usuario por ID (usado para enriquecer pedidos)
   */
  @MessagePattern({ cmd: 'obtener-usuario-por-id' })
  async obtenerUsuarioPorId(datos: { id: number }) {
    return this.servicioAutenticacion.obtenerUsuarioPorId(datos.id);
  }

  /**
   * NUEVO: Actualizar perfil de usuario
   */
  @MessagePattern({ cmd: 'actualizar-usuario' })
  async actualizarUsuario(datos: { id: number; datos: any }) {
    return this.servicioAutenticacion.actualizarUsuario(datos.id, datos.datos);
  }

  /**
   * NUEVO: Verificar contraseña actual
   */
  @MessagePattern({ cmd: 'verificar-clave' })
  async verificarClave(datos: { id: number; clave: string }) {
    return this.servicioAutenticacion.verificarClave(datos.id, datos.clave);
  }

  /**
   * NUEVO: Cambiar contraseña
   */
  @MessagePattern({ cmd: 'cambiar-clave' })
  async cambiarClave(datos: { id: number; claveNueva: string }) {
    return this.servicioAutenticacion.cambiarClave(datos.id, datos.claveNueva);
  }

  /**
   * Handler original - Mantener para compatibilidad
   */
  @MessagePattern({ cmd: 'validar_usuario' })
  async validarUsuario(datos: IniciarSesionDto) {
    return this.servicioAutenticacion.validarUsuario(datos);
  }

  /**
   * Handler original - Mantener para compatibilidad
   */
  @MessagePattern({ cmd: 'obtener_usuarios_por_ids' })
  async obtenerUsuariosPorIds(ids: number[]) {
    return this.servicioAutenticacion.obtenerUsuariosPorIds(ids);
  }

  /**
   * Handler original - Mantener para compatibilidad
   */
  @MessagePattern({ cmd: 'crear_usuario' })
  async crearUsuario(datos: any) {
    return this.servicioAutenticacion.crearUsuario(datos);
  }
}