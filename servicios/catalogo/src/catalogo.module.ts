import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ScheduleModule } from '@nestjs/schedule';
import { ModuloProductos } from './productos/productos.module';
import { Producto } from './productos/producto.entidad';
import { Reserva } from './productos/reserva.entidad';

@Module({
  imports: [
    // Configuración de variables de entorno
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),

    // Configuración de TypeORM con MySQL
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configuracion: ConfigService) => ({
        type: 'mysql',
        host: configuracion.get('BD_HOST', 'localhost'),
        port: configuracion.get<number>('BD_PUERTO', 3306),
        username: configuracion.get('BD_USUARIO', 'root'),
        password: configuracion.get('BD_CLAVE', ''),
        database: configuracion.get('BD_NOMBRE', 'productos_bd'),
        entities: [Producto, Reserva],
        synchronize: configuracion.get('BD_SINCRONIZAR', 'true') === 'true',
        logging: true,
      }),
    }),

    // Módulo de tareas programadas (para limpiar reservas)
    ScheduleModule.forRoot(),

    // Módulo de productos
    ModuloProductos,
  ],
})
export class ModuloCatalogo {}