import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class EstrategiaJwt extends PassportStrategy(Strategy) {
  constructor(configuracion: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configuracion.get('SECRETO_JWT') || 'mi-super-secreto-jwt-2024',
    });
  }

  async validate(payload: any) {
    return {
      id: payload.sub,
      correo: payload.correo,
      nombre: payload.nombre,
      rol: payload.rol,
    };
  }
}