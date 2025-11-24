import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ServicioPrisma } from './prisma.service';
import { IniciarSesionDto } from '@compartido/dtos';
import * as bcrypt from 'bcrypt';

@Injectable()
export class ServicioAutenticacion {
  constructor(private readonly prisma: ServicioPrisma) {}

  /**
   * Valida las credenciales de un usuario
   */
  async validarUsuario(datos: IniciarSesionDto) {
    const { correo, clave } = datos;

    // Buscar usuario por correo
    const usuario = await this.prisma.usuario.findUnique({
      where: { correo },
    });

    if (!usuario) {
      return null;
    }

    // Verificar contraseña
    const claveValida = await bcrypt.compare(clave, usuario.claveHash);
    
    if (!claveValida) {
      return null;
    }

    // Retornar datos del usuario sin la contraseña
    const { claveHash, ...datosUsuario } = usuario;
    return datosUsuario;
  }

  /**
   * Obtiene múltiples usuarios por sus IDs
   * Útil para enriquecer pedidos con datos de usuarios
   */
  async obtenerUsuariosPorIds(ids: number[]) {
    const usuarios = await this.prisma.usuario.findMany({
      where: { id: { in: ids } },
      select: {
        id: true,
        correo: true,
        nombre: true,
        rol: true,
      },
    });

    // Convertir array a objeto indexado por ID para acceso rápido
    return usuarios.reduce((mapa, usuario) => {
      mapa[usuario.id] = usuario;
      return mapa;
    }, {} as Record<number, any>);
  }

  /**
   * Crea un nuevo usuario en el sistema
   */
  async crearUsuario(datos: {
    correo: string;
    nombre: string;
    clave: string;
    rol?: 'ADMIN' | 'USUARIO';
  }) {
    // Encriptar la contraseña
    const claveHash = await bcrypt.hash(datos.clave, 10);

    // Crear usuario en la base de datos
    const usuario = await this.prisma.usuario.create({
      data: {
        correo: datos.correo,
        nombre: datos.nombre,
        claveHash,
        rol: datos.rol || 'USUARIO',
      },
    });

    // Retornar sin la contraseña
    const { claveHash: _, ...usuarioSinClave } = usuario;
    return usuarioSinClave;
  }
}
