import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { Logger } from '@nestjs/common';
import { ModuloCatalogo } from './catalogo.module';

const registrador = new Logger('ServicioCatalogo');

async function iniciar() {
  const puerto = parseInt(process.env.PUERTO_CATALOGO ?? '5002', 10);
  
  const aplicacion = await NestFactory.createMicroservice<MicroserviceOptions>(
    ModuloCatalogo,
    {
      transport: Transport.TCP,
      options: {
        host: '0.0.0.0',
        port: puerto,
      },
    },
  );
  
  await aplicacion.listen();
  registrador.log(`📦 Servicio de Catálogo escuchando en puerto ${puerto} (TCP)`);
}

iniciar();
