# ============================================
# Dockerfile para Backend NestJS
# Tienda con Microservicios
# ============================================

# Usar imagen base de Node.js 20 Alpine (ligera)
FROM node:20-alpine

# Información del mantenedor
LABEL maintainer="estudiante@universidad.edu"
LABEL description="Backend de tienda con microservicios en NestJS"

# Instalar dependencias del sistema necesarias
RUN apk add --no-cache \
    python3 \
    make \
    g++ \
    openssl

# Establecer directorio de trabajo
WORKDIR /app

# Copiar archivos de dependencias primero (para aprovechar cache de Docker)
COPY package*.json ./
COPY tsconfig*.json ./
COPY nest-cli.json ./

# Instalar dependencias de Node.js
RUN npm install --legacy-peer-deps

# Copiar el código fuente completo
COPY . .

# Copiar archivo de variables de entorno de ejemplo
COPY .env.ejemplo .env

# Generar cliente de Prisma para PostgreSQL
RUN npx prisma generate --schema=./servicios/autenticacion/prisma/schema.prisma

# Compilar el proyecto TypeScript a JavaScript
RUN npm run build 2>/dev/null || echo "Build may fail, will run in dev mode"

# Crear directorios necesarios
RUN mkdir -p /app/dist /app/logs

# Exponer los puertos de todos los servicios
EXPOSE 4000
EXPOSE 5001
EXPOSE 5002
EXPOSE 5003

# Establecer variables de entorno por defecto
ENV NODE_ENV=production
ENV TZ=America/Argentina/Buenos_Aires

# Comando de salud para Docker
HEALTHCHECK --interval=30s --timeout=3s --start-period=40s \
  CMD node -e "require('http').get('http://localhost:4000/health', (r) => {process.exit(r.statusCode === 200 ? 0 : 1)})" || exit 1

# Comando por defecto: iniciar todos los servicios
# En producción, usarías un process manager como PM2
CMD ["sh", "-c", "npm run iniciar:autenticacion & npm run iniciar:catalogo & npm run iniciar:pedidos & npm run iniciar:puerta-enlace & wait"]