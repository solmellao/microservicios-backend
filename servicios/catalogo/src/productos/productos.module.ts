import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ControladorProductos } from './productos.controller';
import { ServicioProductos } from './productos.service';
import { ServicioTareas } from './tareas.service';
import { Producto } from './producto.entidad';
import { Reserva } from './reserva.entidad';

@Module({
  imports: [
    TypeOrmModule.forFeature([Producto, Reserva])
  ],
  controllers: [ControladorProductos],
  providers: [ServicioProductos, ServicioTareas],
})
export class ModuloProductos {}