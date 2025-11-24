import { 
  Controller, 
  Post, 
  Body, 
  Req, 
  UseGuards, 
  Inject, 
  BadRequestException 
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { ApiTags, ApiBearerAuth, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { firstValueFrom } from 'rxjs';
import { GuardiaJwt } from '../acceso/jwt.guardia';
import { ReservarProductoDto } from '@compartido/dtos';

interface SolicitudAutenticada {
  user: { idUsuario: number; correo: string; rol: string; };
}

@ApiTags('Carrito')
@Controller('carrito')
@ApiBearerAuth()
@UseGuards(GuardiaJwt)
export class ControladorCarrito {
  constructor(
    @Inject('SERVICIO_CATALOGO') 
    private readonly clienteCatalogo: ClientProxy,
    @Inject('SERVICIO_PEDIDOS') 
    private readonly clientePedidos: ClientProxy,
  ) {}

  @Post('agregar')
  @ApiOperation({ summary: 'Agregar producto al carrito' })
  @ApiResponse({ status: 200, description: 'Producto agregado al carrito' })
  @ApiResponse({ status: 400, description: 'Stock insuficiente' })
  @ApiResponse({ status: 401, description: 'No autenticado' })
  async agregarAlCarrito(
    @Body() body: { idProducto: number; cantidad: number },
    @Req() solicitud: SolicitudAutenticada
  ) {
    const { idUsuario } = solicitud.user;
    
    // Crear DTO de reserva
    const dtoReserva: ReservarProductoDto = {
      idProducto: body.idProducto,
      idUsuario: idUsuario,
      cantidad: body.cantidad,
    };
    
    try {
      // Intentar reservar el stock en el catálogo
      const reserva = await firstValueFrom(
        this.clienteCatalogo.send({ cmd: 'crear_reserva' }, dtoReserva)
      );
      
      return {
        exito: true,
        mensaje: 'Producto agregado al carrito',
        reserva
      };

    } catch (error) {
      if (error.message.includes('Stock insuficiente')) {
        throw new BadRequestException(error.message);
      }
      throw error;
    }
  }

  @Post('finalizar-compra')
  @ApiOperation({ summary: 'Finalizar compra y crear pedido' })
  @ApiResponse({ status: 200, description: 'Compra completada exitosamente' })
  @ApiResponse({ status: 400, description: 'Error al procesar la compra' })
  async finalizarCompra(
    @Body() body: { articulos: Array<{ idProducto: number; cantidad: number; precio: number; nombreProducto: string }> },
    @Req() solicitud: SolicitudAutenticada
  ) {
    const { idUsuario } = solicitud.user;

    // Calcular total
    const total = body.articulos.reduce(
      (suma, art) => suma + (art.precio * art.cantidad),
      0
    );

    // Crear pedido
    const datosPedido = {
      idUsuario,
      total,
      articulos: body.articulos,
    };
    
    const nuevoPedido = await firstValueFrom(
      this.clientePedidos.send({ cmd: 'crear_pedido' }, datosPedido)
    );

    // Confirmar compra en el catálogo (restar inventario)
    await firstValueFrom(
      this.clienteCatalogo.send({ cmd: 'confirmar_compra' }, {
        articulos: body.articulos.map(art => ({
          idProducto: art.idProducto,
          cantidad: art.cantidad
        }))
      })
    );

    return {
      mensaje: 'Compra completada exitosamente',
      pedido: nuevoPedido
    };
  }
}
