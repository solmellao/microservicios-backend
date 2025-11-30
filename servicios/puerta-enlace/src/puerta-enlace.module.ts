import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ModuloAcceso } from './acceso/acceso.module';
import { ControladorProductos } from './controladores/productos.controller';
import { ControladorCarrito } from './controladores/carrito.controller';
import { ControladorPedidos } from './controladores/pedidos.controller';
import { ModuloUsuarios } from './controladores/usuario.module';


@Module({
  imports: [
    // Configuración global de variables de entorno
    ConfigModule.forRoot({ isGlobal: true }),
    
    // Módulo de autenticación y JWT
    ModuloAcceso,

    // Módulo de usuarios (perfil, registro, etc)
    ModuloUsuarios,  // ← AGREGAR ESTA LÍNEA

    // Clientes TCP para comunicarse con los microservicios
    ClientsModule.register([
      { 
        name: 'SERVICIO_AUTENTICACION',
        transport: Transport.TCP,
        options: { 
          host: process.env.HOST_AUTENTICACION || '127.0.0.1',
          port: parseInt(process.env.PUERTO_AUTENTICACION || '5001', 10)
        }
      },
      { 
        name: 'SERVICIO_CATALOGO',
        transport: Transport.TCP,
        options: { 
          host: process.env.HOST_CATALOGO || '127.0.0.1',
          port: parseInt(process.env.PUERTO_CATALOGO || '5002', 10)
        }
      },
      { 
        name: 'SERVICIO_PEDIDOS',
        transport: Transport.TCP,
        options: { 
          host: process.env.HOST_PEDIDOS || '127.0.0.1',
          port: parseInt(process.env.PUERTO_PEDIDOS || '5003', 10)
        }
      },
    ]),
  ],

  
  controllers: [
    ControladorProductos,
    ControladorCarrito,
    ControladorPedidos,
  ],
})
export class ModuloPuertaEnlace {}