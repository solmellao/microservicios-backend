import { Injectable, ConflictException, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ServicioPrisma } from './prisma.service';
import * as bcrypt from 'bcrypt';
import { IniciarSesionDto } from '@compartido/dtos';

@Injectable()
export class ServicioAutenticacion {
  constructor(
    private readonly prisma: ServicioPrisma,
    private readonly jwtService: JwtService,
  ) {}

  /**
   * Validar credenciales de usuario
   */
  async validarUsuario(dto: IniciarSesionDto) {
    const usuario = await this.prisma.usuario.findUnique({
      where: { correo: dto.correo },
    });

    if (!usuario) {
      return null;
    }

    const claveValida = await bcrypt.compare(dto.clave, usuario.claveHash);

    if (!claveValida) {
      return null;
    }

    // No devolver la contraseña
    const { claveHash, ...usuarioSinClave } = usuario;
     console.log(' Payload del token:', usuarioSinClave);

    return usuarioSinClave;
  }

  /**
   * Generar token JWT
   */
  async generarToken(usuario: any) {
    const payload = {
      id: usuario.id,
      correo: usuario.correo,
      nombre: usuario.nombre,
      rol: usuario.rol,
    };

    return this.jwtService.sign(payload);
  }

  /**
   * Crear un nuevo usuario
   */
  async crearUsuario(datos: any) {
    // Verificar si el correo ya existe
    const usuarioExistente = await this.prisma.usuario.findUnique({
      where: { correo: datos.correo },
    });

    if (usuarioExistente) {
      throw new ConflictException('El correo ya está registrado');
    }

    // Encriptar contraseña
    const claveEncriptada = await bcrypt.hash(datos.clave, 10);

    // Crear usuario
    const usuario = await this.prisma.usuario.create({
      data: {
        nombre: datos.nombre,
        correo: datos.correo,
        claveHash: claveEncriptada,
        rol: datos.rol || 'USUARIO', // Por defecto USUARIO
      },
    });

    // No devolver la contraseña
    const { claveHash, ...usuarioSinClave } = usuario;
    return usuarioSinClave;
  }

  /**
   * Obtener usuario por ID
   */
  async obtenerUsuarioPorId(id: number) {
    const usuario = await this.prisma.usuario.findUnique({
      where: { id },
    });

    if (!usuario) {
      throw new NotFoundException(`Usuario con ID ${id} no encontrado`);
    }

    // No devolver la contraseña
    const { claveHash, ...usuarioSinClave } = usuario;
    return usuarioSinClave;
  }

  /**
   * Obtener múltiples usuarios por IDs
   */
  async obtenerUsuariosPorIds(ids: number[]) {
    const usuarios = await this.prisma.usuario.findMany({
      where: {
        id: { in: ids },
      },
    });

    // Crear un mapa de usuarios sin contraseñas
    const mapaUsuarios = {};
    usuarios.forEach((usuario) => {
      const { claveHash, ...usuarioSinClave } = usuario;
      mapaUsuarios[usuario.id] = usuarioSinClave;
    });

    return mapaUsuarios;
  }

  /**
   * Actualizar perfil de usuario
   */
  async actualizarUsuario(id: number, datos: any) {
    const usuario = await this.prisma.usuario.findUnique({
      where: { id },
    });

    if (!usuario) {
      throw new NotFoundException(`Usuario con ID ${id} no encontrado`);
    }

    // Si se está actualizando el correo, verificar que no exista
    if (datos.correo && datos.correo !== usuario.correo) {
      const correoExistente = await this.prisma.usuario.findUnique({
        where: { correo: datos.correo },
      });

      if (correoExistente) {
        throw new ConflictException('El correo ya está en uso');
      }
    }

    // Actualizar usuario (sin permitir cambiar la contraseña aquí)
    const { clave, rol, ...datosActualizables } = datos;

    const usuarioActualizado = await this.prisma.usuario.update({
      where: { id },
      data: datosActualizables,
    });

    // No devolver la contraseña
    const { claveHash: _, ...usuarioSinClave } = usuarioActualizado;
    return usuarioSinClave;
  }

  /**
   * Verificar contraseña actual
   */
  async verificarClave(id: number, clave: string) {
    const usuario = await this.prisma.usuario.findUnique({
      where: { id },
    });

    if (!usuario) {
      throw new NotFoundException(`Usuario con ID ${id} no encontrado`);
    }

    const claveValida = await bcrypt.compare(clave, usuario.claveHash);

    return { valida: claveValida };
  }

  /**
   * Cambiar contraseña
   */
  async cambiarClave(id: number, claveNueva: string) {
    const usuario = await this.prisma.usuario.findUnique({
      where: { id },
    });

    if (!usuario) {
      throw new NotFoundException(`Usuario con ID ${id} no encontrado`);
    }

    // Encriptar nueva contraseña
    const claveEncriptada = await bcrypt.hash(claveNueva, 10);

    // Actualizar contraseña
    await this.prisma.usuario.update({
      where: { id },
      data: { claveHash: claveEncriptada },
    });

    return { mensaje: 'Contraseña actualizada exitosamente' };
  }
}