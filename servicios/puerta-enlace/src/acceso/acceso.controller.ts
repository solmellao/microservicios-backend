import { 
  Controller, 
  Post, 
  Body, 
  HttpCode, 
  HttpStatus 
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ServicioAcceso } from './acceso.service';
import { IniciarSesionDto } from '@compartido/dtos';

@ApiTags('Autenticación')
@Controller('acceso')
export class ControladorAcceso {
  constructor(private readonly servicioAcceso: ServicioAcceso) {}

  @Post('iniciar-sesion')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Iniciar sesión en el sistema' })
  @ApiResponse({ 
    status: 200, 
    description: 'Inicio de sesión exitoso. Retorna token JWT.'
  })
  @ApiResponse({ 
    status: 401, 
    description: 'Credenciales inválidas.'
  })
  async iniciarSesion(@Body() datos: IniciarSesionDto) {
    // Validar usuario con el microservicio
    const usuario = await this.servicioAcceso.validarUsuario(datos);
    
    // Generar token JWT
    return this.servicioAcceso.generarToken(usuario);
  }
}
