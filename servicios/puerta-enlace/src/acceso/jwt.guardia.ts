import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

/**
 * Guardia para proteger rutas que requieren autenticación
 * Usa la estrategia JWT configurada
 */
@Injectable()
export class GuardiaJwt extends AuthGuard('jwt') {}
