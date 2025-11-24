import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { withAccelerate } from '@prisma/extension-accelerate';

@Injectable()
export class ServicioPrisma extends PrismaClient implements OnModuleInit {
  constructor() {
    // Configuración de Prisma 7 con URL directa
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
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }
}