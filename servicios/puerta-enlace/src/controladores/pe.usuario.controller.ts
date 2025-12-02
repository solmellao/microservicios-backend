import {
  Controller,
  Get,
  Put,
  Body,
  UseGuards,
  Request,
  UseInterceptors,
  UploadedFile,
  HttpException,
  Inject,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ClientProxy } from '@nestjs/microservices';
import { GuardiaJwt } from '../acceso/jwt.guardia';
import { catchError } from 'rxjs';
import { saveImagesToStorage, removeFile } from '@compartido/helpers/image-storage.helper';
import { RpcResponse } from '@compartido/interfaces/rpc-response.interface';
import * as path from 'path';
import { firstValueFrom } from 'rxjs';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('Usuario')
@Controller('usuario')
export class ControladorUsuario {
  constructor(
    @Inject('SERVICIO_AUTENTICACION')
    private readonly clienteAutenticacion: ClientProxy,
  ) {}

  /**
   * Obtener perfil del usuario autenticado
   */
  @Get('perfil')
  @UseGuards(GuardiaJwt)
  @ApiBearerAuth('JWT-auth')
  async obtenerPerfil(@Request() req) {
    return this.clienteAutenticacion
      .send({ cmd: 'obtener_usuario_por_id' }, req.user.id)
      .pipe(
        catchError((rpcError: RpcResponse) => {
          const { statusCode = 500, error } = rpcError;
          throw new HttpException(error ?? rpcError, statusCode);
        }),
      );
  }

  /**
   * Actualizar perfil del usuario con imagen
   */
  @Put('perfil')
  @UseGuards(GuardiaJwt)
  @ApiBearerAuth('JWT-auth')
  @UseInterceptors(FileInterceptor('imagen', saveImagesToStorage('usuarios')))
  async actualizarPerfil(
    @Request() req,
    @Body() dto: any,
    @UploadedFile() file: Express.Multer.File,
  ) {
    try {
      // Si se subió imagen, agregar ruta al DTO
      if (file) {
        // Obtener usuario actual para eliminar imagen vieja
        const usuarioActual = await firstValueFrom(
          this.clienteAutenticacion.send({ cmd: 'obtener_usuario_por_id' }, req.user.id)
        );

        if (usuarioActual.imagenUrl && !usuarioActual.imagenUrl.startsWith('http')) {
          const oldImagePath = path.join(process.cwd(), usuarioActual.imagenUrl);
          removeFile(oldImagePath);
        }

        dto.imagenUrl = `uploads/usuarios/${file.filename}`;
      }

      return this.clienteAutenticacion
        .send({ cmd: 'actualizar_usuario' }, { id: req.user.id, dto })
        .pipe(
          catchError((rpcError: RpcResponse) => {
            if (file) {
              const fullPath = path.join(process.cwd(), 'uploads', 'usuarios', file.filename);
              removeFile(fullPath);
            }
            const { statusCode = 500, error } = rpcError;
            throw new HttpException(error ?? rpcError, statusCode);
          }),
        );
    } catch (error) {
      if (file) {
        const fullPath = path.join(process.cwd(), 'uploads', 'usuarios', file.filename);
        removeFile(fullPath);
      }
      throw error;
    }
  }

  /**
   * Cambiar contraseña del usuario
   */
  @Put('cambiar-clave')
  @UseGuards(GuardiaJwt)
  @ApiBearerAuth('JWT-auth')
  async cambiarClave(@Request() req, @Body() dto: any) {
    return this.clienteAutenticacion
      .send({ cmd: 'cambiar_clave' }, {
        id: req.user.id,
        claveActual: dto.claveActual,
        claveNueva: dto.claveNueva,
      })
      .pipe(
        catchError((rpcError: RpcResponse) => {
          const { statusCode = 500, error } = rpcError;
          throw new HttpException(error ?? rpcError, statusCode);
        }),
      );
  }
}