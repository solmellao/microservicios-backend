import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { ModuloPuertaEnlace } from './puerta-enlace.module';

async function iniciar() {
  const aplicacion = await NestFactory.create(ModuloPuertaEnlace);

  // Habilitar CORS para el frontend
  aplicacion.enableCors({
    origin: process.env.ORIGEN_CORS || 'http://localhost:5173',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  // Validación automática de DTOs
  aplicacion.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Elimina propiedades no definidas en el DTO
      forbidNonWhitelisted: true, // Lanza error si hay propiedades extras
      transform: true, // Transforma tipos automáticamente
    })
  );

  // Configurar Swagger (Documentación de API)
  const configuracionSwagger = new DocumentBuilder()
    .setTitle('API de Tienda con Microservicios')
    .setDescription('Sistema de comercio electrónico con arquitectura de microservicios')
    .setVersion('1.0')
    .addBearerAuth({
      type: 'http',
      scheme: 'bearer',
      bearerFormat: 'JWT',
      description: 'Ingresa tu token JWT aquí'
    })
    .addTag('Autenticación', 'Endpoints para login y registro')
    .addTag('Productos', 'Gestión del catálogo de productos')
    .addTag('Carrito', 'Operaciones del carrito de compras')
    .addTag('Pedidos', 'Consulta de pedidos realizados')
    .build();
    
  const documento = SwaggerModule.createDocument(aplicacion, configuracionSwagger);
  SwaggerModule.setup('api', aplicacion, documento);

  const puerto = process.env.PUERTO_GATEWAY || 4000;
  await aplicacion.listen(puerto);
  
  console.log(`\n🚀 Puerta de Enlace corriendo en: http://localhost:${puerto}`);
  console.log(`📚 Documentación Swagger: http://localhost:${puerto}/api\n`);
}

iniciar();
