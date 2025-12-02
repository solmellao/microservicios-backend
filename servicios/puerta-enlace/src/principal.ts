import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ModuloPuertaEnlace } from './puerta-enlace.module';
import { join } from 'path';

async function iniciar() {
  // Crear aplicación con soporte para Express
  const app = await NestFactory.create<NestExpressApplication>(ModuloPuertaEnlace);

  // CORS
  app.enableCors({
    origin: process.env.ORIGEN_CORS || 'http://localhost:5173',
    credentials: true,
  });

  // Servir archivos estáticos desde la carpeta public
  app.useStaticAssets(join(__dirname, '..', 'public'));

  // NUEVO: Servir imágenes subidas (productos y usuarios)
  app.useStaticAssets(join(__dirname, '..', '..', '..', 'uploads'), {
    prefix: '/uploads/',
  });

  // Validación global
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  // Configuración de Swagger
  const config = new DocumentBuilder()
    .setTitle('API de Tienda con Microservicios')
    .setDescription(`
API REST para sistema de comercio electrónico con arquitectura de microservicios.

CREDENCIALES DE PRUEBA:
- Admin: admin@tienda.com / 123456
- Usuario: usuario@tienda.com / 123456

AUTENTICACIÓN:
1. POST /acceso/iniciar-sesion con correo y clave
2. Copiar el token de la respuesta
3. Click en "Authorize" y pegar el token
4. Usar los endpoints protegidos

ARQUITECTURA:
- Servicio de Autenticación: Puerto 5001 (PostgreSQL)
- Servicio de Catálogo: Puerto 5002 (MySQL)  
- Servicio de Pedidos: Puerto 5003 (MongoDB)
- API Gateway: Puerto 4000 (Este servidor)

ENDPOINTS PRINCIPALES:
- POST /acceso/iniciar-sesion - Iniciar sesión
- GET /productos - Listar productos
- POST /productos - Crear producto (Admin)
- POST /carrito/agregar - Agregar al carrito
- POST /carrito/finalizar-compra - Crear pedido
- GET /pedidos - Ver pedidos
    `)
    .setVersion('1.0')
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        description: 'Token JWT (sin "Bearer")',
        in: 'header',
      },
      'JWT-auth',
    )
    .build();

  const document = SwaggerModule.createDocument(app, config);
  
  // Setup Swagger en /api
  SwaggerModule.setup('api', app, document, {
    customSiteTitle: 'API Tienda',
    customCss: '.swagger-ui .topbar { display: none; }',
    swaggerOptions: {
      persistAuthorization: true,
      docExpansion: 'list',
    },
  });

  const puerto = process.env.PUERTO_GATEWAY || 4000;
  await app.listen(puerto);

  console.log(`\n🚀 Gateway corriendo en: http://localhost:${puerto}`);
  console.log(`🎨 Documentación bonita: http://localhost:${puerto}`);
  console.log(`📚 Swagger: http://localhost:${puerto}/api\n`);
}

iniciar();