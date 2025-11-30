import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ControladorAutenticacion } from './autenticacion.controller';
import { ServicioAutenticacion } from './autenticacion.service';
import { ServicioPrisma } from './prisma.service';

@Module({
  imports: [
    // Configurar JwtModule con variables de entorno
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>('SECRETO_JWT') || 'clave-super-secreta-cambiar-en-produccion',
        signOptions: {
          expiresIn: '24h', // Token válido por 24 horas
        },
      }),
    }),
  ],
  controllers: [ControladorAutenticacion],
  providers: [ServicioAutenticacion, ServicioPrisma],
  exports: [ServicioAutenticacion], // Exportar por si otros módulos lo necesitan
})
export class ModuloAutenticacion {}