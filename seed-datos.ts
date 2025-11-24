/**
 * Script para insertar datos de prueba en la base de datos
 * Ejecutar con: npx ts-node seed-datos.ts
 */

import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function principal() {
  console.log('🌱 Insertando datos de prueba...\n');

  // 1. Crear usuarios
  const claveEncriptada = await bcrypt.hash('123456', 10);

  const usuarioAdmin = await prisma.usuario.upsert({
    where: { correo: 'admin@tienda.com' },
    update: {},
    create: {
      correo: 'admin@tienda.com',
      nombre: 'Administrador del Sistema',
      claveHash: claveEncriptada,
      rol: 'ADMIN',
    },
  });

  const usuarioNormal = await prisma.usuario.upsert({
    where: { correo: 'usuario@tienda.com' },
    update: {},
    create: {
      correo: 'usuario@tienda.com',
      nombre: 'Usuario de Prueba',
      claveHash: claveEncriptada,
      rol: 'USUARIO',
    },
  });

  console.log('✅ Usuarios creados:');
  console.log('   - Administrador:', usuarioAdmin.correo);
  console.log('   - Usuario:', usuarioNormal.correo);
  console.log('   - Contraseña para ambos: 123456\n');

  console.log('🎉 Datos de prueba insertados correctamente\n');
  console.log('📝 Puedes iniciar sesión con:');
  console.log('   Correo: admin@tienda.com');
  console.log('   Clave: 123456\n');
}

principal()
  .catch((error) => {
    console.error('❌ Error:', error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
