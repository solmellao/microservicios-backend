import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ControladorGestionPedidos } from './gestion.controller';
import { ServicioGestionPedidos } from './gestion.service';
import { Pedido, EsquemaPedido } from '../esquemas/pedido.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Pedido.name, schema: EsquemaPedido }
    ]),
  ],
  controllers: [ControladorGestionPedidos],
  providers: [ServicioGestionPedidos],
  exports: [ServicioGestionPedidos],
})
export class ModuloGestionPedidos {}
