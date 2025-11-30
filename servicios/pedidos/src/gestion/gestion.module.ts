import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ControladorPedidos } from './gestion.controller';
import { ServicioPedidos } from './gestion.service';
import { Pedido, EsquemaPedido } from '../esquemas/pedido.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Pedido.name, schema: EsquemaPedido }]),
  ],
  controllers: [ControladorPedidos],
  providers: [ServicioPedidos],
  exports: [ServicioPedidos],
})
export class ModuloGestionPedidos {}