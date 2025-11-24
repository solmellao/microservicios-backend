import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ControladorAutenticacion } from './autenticacion.controller';
import { ServicioAutenticacion } from './autenticacion.service';
import { ServicioPrisma } from './prisma.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
  ],
  controllers: [ControladorAutenticacion],
  providers: [ServicioAutenticacion, ServicioPrisma],
})
export class ModuloAutenticacion {}
