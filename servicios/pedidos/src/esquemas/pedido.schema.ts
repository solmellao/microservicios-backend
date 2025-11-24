import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

/**
 * Esquema de un artículo dentro del pedido
 */
@Schema({ _id: false })
export class ArticuloPedido {
  @Prop({ required: true })
  idProducto: number;

  @Prop({ required: true })
  nombreProducto: string;

  @Prop({ required: true })
  cantidad: number;

  @Prop({ required: true })
  precioAlMomentoCompra: number;
}

const EsquemaArticuloPedido = SchemaFactory.createForClass(ArticuloPedido);

/**
 * Esquema principal del Pedido
 */
@Schema({ 
  collection: 'pedidos',
  timestamps: { createdAt: 'fechaCreacion', updatedAt: 'fechaActualizacion' }
})
export class Pedido extends Document {
  @Prop({ required: true })
  idUsuario: string;

  @Prop({ required: true })
  montoTotal: number;

  @Prop({ type: [EsquemaArticuloPedido], required: true })
  articulos: ArticuloPedido[];
}

export const EsquemaPedido = SchemaFactory.createForClass(Pedido);
