import { Controller } from '@nestjs/common';
import { MessagePattern, RpcException } from '@nestjs/microservices';
import { ServicioAutenticacion } from './autenticacion.service';
import { IniciarSesionDto, ActualizarUsuarioDto } from '@compartido/dtos';
import { RpcResponse } from '@compartido/interfaces/rpc-response.interface';

@Controller()
export class ControladorAutenticacion {
  constructor(
    private readonly servicioAutenticacion: ServicioAutenticacion
  ) {}

  /**
   * Iniciar sesión (usado por el Gateway)
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
        imagenUrl: usuario.imagenUrl,
      },
    };
  }

  /**
   * Registrar un nuevo usuario
   */
  @MessagePattern({ cmd: 'registrar-usuario' })
  async registrarUsuario(datos: any) {
    try {
      return await this.servicioAutenticacion.crearUsuario(datos);
    } catch (error) {
      const rpcError: RpcResponse = {
        statusCode: error.status || 500,
        error: error.message || 'Error al registrar usuario',
      };
      throw new RpcException(rpcError);
    }
  }

  /**
   * Obtener un usuario por ID
   */
  @MessagePattern({ cmd: 'obtener_usuario_por_id' })
  async obtenerUsuarioPorId(id: number) {
    try {
      return await this.servicioAutenticacion.obtenerUsuarioPorId(id);
    } catch (error) {
      const rpcError: RpcResponse = {
        statusCode: 404,
        error: error.message || 'Usuario no encontrado',
      };
      throw new RpcException(rpcError);
    }
  }

  /**
   * Actualizar usuario
   */
  @MessagePattern({ cmd: 'actualizar_usuario' })
  async actualizarUsuario(datos: { id: number; dto: ActualizarUsuarioDto }) {
    try {
      return await this.servicioAutenticacion.actualizarUsuario(datos.id, datos.dto);
    } catch (error) {
      const rpcError: RpcResponse = {
        statusCode: error.status || 500,
        error: error.message || 'Error al actualizar usuario',
      };
      throw new RpcException(rpcError);
    }
  }

  /**
   * Cambiar contraseña
   */
  @MessagePattern({ cmd: 'cambiar_clave' })
  async cambiarClave(datos: { id: number; claveActual: string; claveNueva: string }) {
    try {
      // Verificar contraseña actual
      await this.servicioAutenticacion.verificarClave(datos.id, datos.claveActual);
      
      // Cambiar a la nueva
      return await this.servicioAutenticacion.cambiarClave(datos.id, datos.claveNueva);
    } catch (error) {
      const rpcError: RpcResponse = {
        statusCode: error.status || 401,
        error: error.message || 'Error al cambiar contraseña',
      };
      throw new RpcException(rpcError);
    }
  }

  /**
   * Handler para compatibilidad - Validar usuario
   */
  @MessagePattern({ cmd: 'validar_usuario' })
  async validarUsuario(datos: IniciarSesionDto) {
    try {
      return await this.servicioAutenticacion.validarUsuario(datos);
    } catch (error) {
      const rpcError: RpcResponse = {
        statusCode: 401,
        error: error.message || 'Credenciales inválidas',
      };
      throw new RpcException(rpcError);
    }
  }

  /**
   * Handler para compatibilidad - Obtener usuarios por IDs
   */
  @MessagePattern({ cmd: 'obtener_usuarios_por_ids' })
  async obtenerUsuariosPorIds(ids: number[]) {
    try {
      return await this.servicioAutenticacion.obtenerUsuariosPorIds(ids);
    } catch (error) {
      const rpcError: RpcResponse = {
        statusCode: 500,
        error: error.message || 'Error al obtener usuarios',
      };
      throw new RpcException(rpcError);
    }
  }

  /**
   * Handler para compatibilidad - Crear usuario
   */
  @MessagePattern({ cmd: 'crear_usuario' })
  async crearUsuario(datos: any) {
    try {
      return await this.servicioAutenticacion.crearUsuario(datos);
    } catch (error) {
      const rpcError: RpcResponse = {
        statusCode: error.status || 500,
        error: error.message || 'Error al crear usuario',
      };
      throw new RpcException(rpcError);
    }
  }
}