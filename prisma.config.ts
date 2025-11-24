import { defineConfig } from 'prisma'

export default defineConfig({
  datasources: {
    db: {
      url: process.env.URL_BD_POSTGRES || 'postgresql://admin:admin@localhost:5432/usuarios_bd'
    }
  }
})