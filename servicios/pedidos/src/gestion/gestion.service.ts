import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Pedido } from '../esquemas/pedido.schema';

@Injectable()
export class ServicioGestionPedidos {
  constructor(
    @InjectModel(Pedido.name) private modeloPedido: Model<Pedido>
  ) {}

  /**
   * Obtener todos los pedidos
   */
  async obtenerTodos(): Promise<Pedido[]> {
    return this.modeloPedido.find().exec();
  }
  
  /**
   * Crear un nuevo pedido
   */
  async crear(datosPedido: any): Promise<Pedido> {
    const nuevoPedido = new this.modeloPedido({
      idUsuario: String(datosPedido.idUsuario),
      montoTotal: datosPedido.total,
      articulos: datosPedido.articulos.map(art => ({
        idProducto: art.idProducto,
        nombreProducto: art.nombreProducto,
        cantidad: art.cantidad,
        precioAlMomentoCompra: art.precio,
      })),
    });
    
    return nuevoPedido.save();
  }
}
