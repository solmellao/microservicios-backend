import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class ServicioPrisma extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  constructor() {
    // Configuración de Prisma con URL directa
    super({
      datasources: {
        db: {
          url: process.env.URL_BD_POSTGRES,
        },
      },
    });
  }

  async onModuleInit() {
    await this.$connect();
    console.log('✅ Prisma conectado a PostgreSQL (Autenticación)');
  }

  async onModuleDestroy() {
    await this.$disconnect();
    console.log('❌ Prisma desconectado de PostgreSQL (Autenticación)');
  }
}