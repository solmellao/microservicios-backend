import {Controller,Get,Post,Body,
  UseGuards,
  Inject,
  HttpException,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { GuardiaJwt } from '../acceso/jwt.guardia';
import { catchError } from 'rxjs';
import { CrearProductoDto } from '@compartido/dtos';
import { RpcResponse } from '@compartido/interfaces/rpc-response.interface';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('Productos')
@Controller('productos')
export class ControladorProductos {
  constructor(
    @Inject('SERVICIO_CATALOGO') private readonly clienteCatalogo: ClientProxy,
  ) {}

  /**
   * Obtener todos los productos
   */
  @Get()
  async obtenerTodos() {
    return this.clienteCatalogo
      .send({ cmd: 'obtener_todos_productos' }, {})
      .pipe(
        catchError((rpcError: RpcResponse) => {
          const { statusCode = 500, error } = rpcError;
          throw new HttpException(error ?? rpcError, statusCode);
        }),
      );
  }

  /**
   * Crear un nuevo producto (ADMIN)
   */
  @Post()
  @UseGuards(GuardiaJwt)
  @ApiBearerAuth('JWT-auth')
  async crear(@Body() dto: CrearProductoDto) {
    return this.clienteCatalogo
      .send({ cmd: 'crear_producto' }, dto)
      .pipe(
        catchError((rpcError: RpcResponse) => {
          const { statusCode = 500, error } = rpcError;
          throw new HttpException(error ?? rpcError, statusCode);
        }),
      );
  }
}