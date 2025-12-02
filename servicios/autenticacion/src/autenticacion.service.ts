import {
  Injectable,
  ConflictException,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ServicioPrisma } from './prisma.service'; // ← CAMBIADO
import { IniciarSesionDto, ActualizarUsuarioDto } from '@compartido/dtos';
import * as bcrypt from 'bcrypt';

@Injectable()
export class ServicioAutenticacion {
  constructor(
    private prisma: ServicioPrisma, // ← CAMBIADO
    private jwtService: JwtService,
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

    // Retornar usuario sin la clave hash
    const { claveHash, ...resultado } = usuario;
    return resultado;
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
      imagenUrl: usuario.imagenUrl,
      fechaCreacion: usuario.fechaCreacion,
      fechaActualizacion: usuario.fechaActualizacion,
    };

    return this.jwtService.sign(payload);
  }

  /**
   * Crear un nuevo usuario
   */
  async crearUsuario(dto: any) {
    // Verificar si el correo ya existe
    const usuarioExistente = await this.prisma.usuario.findUnique({
      where: { correo: dto.correo },
    });

    if (usuarioExistente) {
      throw new ConflictException('El correo ya está registrado');
    }

    // Hashear la contraseña
    const claveHash = await bcrypt.hash(dto.clave, 10);

    // Crear el usuario
    const usuario = await this.prisma.usuario.create({
      data: {
        correo: dto.correo,
        nombre: dto.nombre,
        claveHash,
        rol: dto.rol || 'USUARIO',
        imagenUrl: dto.imagenUrl || null,
      },
      select: {
        id: true,
        correo: true,
        nombre: true,
        rol: true,
        imagenUrl: true,
        fechaCreacion: true,
        fechaActualizacion: true,
      },
    });

    return usuario;
  }

  /**
   * Obtener usuario por ID
   */
  async obtenerUsuarioPorId(id: number) {
    const usuario = await this.prisma.usuario.findUnique({
      where: { id },
      select: {
        id: true,
        correo: true,
        nombre: true,
        rol: true,
        imagenUrl: true,
        fechaCreacion: true,
        fechaActualizacion: true,
      },
    });

    if (!usuario) {
      throw new NotFoundException('Usuario no encontrado');
    }

    return usuario;
  }

  /**
   * Obtener usuarios por lista de IDs
   */
  async obtenerUsuariosPorIds(ids: number[]) {
    if (!ids || ids.length === 0) {
      return [];
    }

    return this.prisma.usuario.findMany({
      where: {
        id: { in: ids },
      },
      select: {
        id: true,
        correo: true,
        nombre: true,
        rol: true,
        imagenUrl: true,
        fechaCreacion: true,
        fechaActualizacion: true,
      },
    });
  }

  /**
   * Actualizar usuario
   */
  async actualizarUsuario(id: number, datos: ActualizarUsuarioDto) {
    // Verificar que el usuario existe
    await this.obtenerUsuarioPorId(id);

    const actualizado = await this.prisma.usuario.update({
      where: { id },
      data: {
        nombre: datos.nombre !== undefined ? datos.nombre : undefined,
        imagenUrl: datos.imagenUrl !== undefined ? datos.imagenUrl : undefined,
      },
      select: {
        id: true,
        correo: true,
        nombre: true,
        rol: true,
        imagenUrl: true,
        fechaCreacion: true,
        fechaActualizacion: true,
      },
    });

    return actualizado;
  }

  /**
   * Verificar contraseña actual
   */
  async verificarClave(id: number, clave: string) {
    const usuario = await this.prisma.usuario.findUnique({
      where: { id },
    });

    if (!usuario) {
      throw new NotFoundException('Usuario no encontrado');
    }

    const esValida = await bcrypt.compare(clave, usuario.claveHash);

    if (!esValida) {
      throw new UnauthorizedException('Contraseña actual incorrecta');
    }

    return true;
  }

  /**
   * Cambiar contraseña
   */
  async cambiarClave(id: number, claveNueva: string) {
    const hash = await bcrypt.hash(claveNueva, 10);

    await this.prisma.usuario.update({
      where: { id },
      data: {
        claveHash: hash,
      },
    });

    return { mensaje: 'Contraseña actualizada correctamente' };
  }
}