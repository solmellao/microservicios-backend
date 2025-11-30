import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class GuardiaJwt implements CanActivate {
  constructor(
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = this.extraerToken(request);

    if (!token) {
      throw new UnauthorizedException('Token no proporcionado');
    }

    try {
      const secret = this.configService.get<string>('SECRETO_JWT') || 'clave-super-secreta-cambiar-en-produccion';
      
      // Decodificar el token
      const payload = this.jwtService.verify(token, { secret });

      // CRÍTICO: Asignar el payload completo al request.user
      request.user = {
        id: payload.id,              // ← ASEGURAR QUE EL ID ESTÉ PRESENTE
        idUsuario: payload.id,       // ← Alias para compatibilidad
        correo: payload.correo,
        nombre: payload.nombre,
        rol: payload.rol,
      };

      console.log('✅ Usuario autenticado:', request.user);

      return true;
    } catch (error) {
      console.error('❌ Error al verificar token:', error.message);
      throw new UnauthorizedException('Token inválido o expirado');
    }
  }

  private extraerToken(request: any): string | null {
    const authHeader = request.headers?.authorization;
    
    if (!authHeader) {
      return null;
    }

    const [type, token] = authHeader.split(' ');

    return type === 'Bearer' ? token : null;
  }
}