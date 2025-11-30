import * as dotenv from 'dotenv'; dotenv.config(); // Cargar variables de entorno
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { Logger } from '@nestjs/common';
import { ModuloAutenticacion } from './autenticacion.module';

const registrador = new Logger('ServicioAutenticacion');

async function iniciar() {
  const puerto = parseInt(process.env.PUERTO_AUTENTICACION ?? '5001', 10);
  
  const aplicacion = await NestFactory.createMicroservice<MicroserviceOptions>(
    ModuloAutenticacion,
    {
      transport: Transport.TCP,
      options: {
        host: '0.0.0.0',
        port: puerto,
      },
    },
  );
  
  await aplicacion.listen();
  registrador.log(`🔐 Servicio de Autenticación escuchando en puerto ${puerto} (TCP)`);
}

iniciar();
