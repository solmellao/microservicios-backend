import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ScheduleModule } from '@nestjs/schedule';
import { ControladorProductos } from './productos.controller';
import { ServicioProductos } from './productos.service';
import { ServicioTareas } from './tareas.service';
import { Producto } from '../entidades/producto.entidad';
import { Reserva } from '../entidades/reserva.entidad';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    TypeOrmModule.forFeature([Producto, Reserva]),
  ],
  controllers: [ControladorProductos],
  providers: [ServicioProductos, ServicioTareas],
  exports: [ServicioProductos],
})
export class ModuloProductos {}
