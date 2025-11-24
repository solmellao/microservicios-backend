import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { Logger } from '@nestjs/common';
import { ModuloPedidos } from './pedidos.module';

const registrador = new Logger('ServicioPedidos');

async function iniciar() {
  const puerto = parseInt(process.env.PUERTO_PEDIDOS ?? '5003', 10);
  
  const aplicacion = await NestFactory.createMicroservice<MicroserviceOptions>(
    ModuloPedidos,
    {
      transport: Transport.TCP,
      options: {
        host: '0.0.0.0',
        port: puerto,
      },
    },
  );
  
  await aplicacion.listen();
  registrador.log(`🧾 Servicio de Pedidos escuchando en puerto ${puerto} (TCP)`);
}

iniciar();
