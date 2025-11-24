import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ModuloGestionPedidos } from './gestion/gestion.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    
    MongooseModule.forRoot(
      process.env.URL_MONGODB || 'mongodb://localhost:27017/pedidos_bd'
    ),
    
    ModuloGestionPedidos,
  ],
})
export class ModuloPedidos {}
