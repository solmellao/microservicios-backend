import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ControladorAcceso } from './acceso.controller';
import { ServicioAcceso } from './acceso.service';
import { EstrategiaJwt } from './jwt.estrategia';

@Module({
  imports: [
    ConfigModule,
    PassportModule,
    
    // Configuración de JWT
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configuracion: ConfigService) => ({
        secret: configuracion.get<string>('SECRETO_JWT'),
        signOptions: { expiresIn: '60m' }, // Token válido por 60 minutos
      }),
      inject: [ConfigService],
    }),

    // Cliente para comunicarse con el servicio de autenticación
    ClientsModule.register([
      {
        name: 'SERVICIO_AUTENTICACION',
        transport: Transport.TCP,
        options: { 
          host: process.env.HOST_AUTENTICACION || '127.0.0.1',
          port: parseInt(process.env.PUERTO_AUTENTICACION || '5001', 10)
        },
      },
    ]),
  ],
  controllers: [ControladorAcceso],
  providers: [ServicioAcceso, EstrategiaJwt],
  exports: [ServicioAcceso, JwtModule, PassportModule],
})
export class ModuloAcceso {}
