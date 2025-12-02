import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ControladorUsuario } from './pe.usuario.controller';

@Module({
  imports: [
    // Importar ConfigModule
    ConfigModule,
    
    // Importar JwtModule para que GuardiaJwt funcione
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>('SECRETO_JWT') || 'clave-super-secreta-cambiar-en-produccion',
        signOptions: {
          expiresIn: '24h',
        },
      }),
    }),
    
    // Cliente TCP para comunicarse con el microservicio de autenticación
    ClientsModule.register([
      {
        name: 'SERVICIO_AUTENTICACION',
        transport: Transport.TCP,
        options: {
          host: process.env.HOST_AUTENTICACION || '127.0.0.1',
          port: parseInt(process.env.PUERTO_AUTENTICACION || '5001', 10),
        },
      },
    ]),
  ],
  controllers: [ControladorUsuario],
  providers: [],
})
export class ModuloUsuarios {}