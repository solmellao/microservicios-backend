import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Pedido } from '../esquemas/pedido.schema';

@Injectable()
export class ServicioPedidos {
  constructor(
    @InjectModel(Pedido.name) private readonly modeloPedido: Model<Pedido>,
  ) {}

  /**
   * Crear un nuevo pedido
   */
  async crearPedido(datos: any) {
    const nuevoPedido = new this.modeloPedido({
      idUsuario: datos.idUsuario,
      articulos: datos.articulos,
      montoTotal: datos.montoTotal || this.calcularTotal(datos.articulos),
      estado: 'PENDIENTE',
      fechaCreacion: new Date(),
    });

    return nuevoPedido.save();
  }

  /**
   * Obtener todos los pedidos
   */
  async obtenerTodos() {
    return this.modeloPedido.find().sort({ fechaCreacion: -1 }).exec();
  }

  /**
   * Obtener un pedido por ID
   */
  async obtenerPorId(id: string) {
    return this.modeloPedido.findById(id).exec();
  }

  /**
   * Obtener pedidos de un usuario
   */
  async obtenerPorUsuario(idUsuario: number) {
    return this.modeloPedido
      .find({ idUsuario })
      .sort({ fechaCreacion: -1 })
      .exec();
  }

  /**
   * Actualizar estado de un pedido
   */
  async actualizarEstado(id: string, estado: string) {
    return this.modeloPedido
      .findByIdAndUpdate(id, { estado }, { new: true })
      .exec();
  }

  /**
   * Calcular total del pedido
   */
  private calcularTotal(articulos: any[]): number {
    return articulos.reduce((total, item) => {
      const precio = item.precio || item.precioAlMomentoCompra || 0;
      const cantidad = item.cantidad || 0;
      return total + precio * cantidad;
    }, 0);
  }
}