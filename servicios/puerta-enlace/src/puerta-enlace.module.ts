import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { MulterModule } from '@nestjs/platform-express'; // ← AGREGAR ESTE IMPORT
import { ModuloAcceso } from './acceso/acceso.module';
import { ControladorProductos } from './controladores/pe.productos.controller';
import { ControladorCarrito } from './controladores/pe.carrito.controller';
import { ControladorPedidos } from './controladores/pe.pedidos.controller';
import { ModuloUsuarios } from './controladores/pe.usuario.module';
import { ControladorUsuario } from './controladores/pe.usuario.controller';

@Module({
  imports: [
    // Configuración global de variables de entorno
    ConfigModule.forRoot({ isGlobal: true }),
    
    // ← AGREGAR ESTE BLOQUE
    // Configuración de Multer para subida de archivos
    MulterModule.register({
      dest: './uploads',
    }),
    
    // Módulo de autenticación y JWT
    ModuloAcceso,

    // Módulo de usuarios (perfil, registro, etc)
    ModuloUsuarios,

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
    ControladorUsuario,
  ],
})
export class ModuloPuertaEnlace {}