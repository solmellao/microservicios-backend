import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ServicioAcceso } from './acceso.service';
import { IniciarSesionDto, RegistrarUsuarioDto } from '@compartido/dtos';

@ApiTags('🔐 Autenticación')
@Controller('acceso')
export class ControladorAcceso {
  constructor(private readonly servicioAcceso: ServicioAcceso) {}

  @Post('iniciar-sesion')
  @ApiOperation({ 
    summary: 'Iniciar sesión en el sistema',
    description: 'Autentica un usuario con correo y contraseña, devuelve un token JWT'
  })
  @ApiResponse({ 
    status: 200, 
    description: 'Login exitoso',
    schema: {
      example: {
        token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
        usuario: {
          id: 1,
          correo: 'admin@tienda.com',
          nombre: 'Administrador',
          rol: 'ADMIN'
        }
      }
    }
  })
  @ApiResponse({ status: 401, description: 'Credenciales incorrectas' })
  async iniciarSesion(@Body() dto: IniciarSesionDto) {
    const resultado = await this.servicioAcceso.iniciarSesion(dto);
    
    return {
      token: resultado.tokenAcceso,
      usuario: resultado.usuario,
    };
  }

  @Post('registrarse')
  @ApiOperation({ 
    summary: 'Registrar un nuevo usuario',
    description: 'Crea una cuenta nueva de usuario en el sistema'
  })
  @ApiResponse({ 
    status: 201, 
    description: 'Usuario creado exitosamente',
    schema: {
      example: {
        mensaje: 'Usuario registrado exitosamente',
        usuario: {
          id: 3,
          correo: 'nuevo@tienda.com',
          nombre: 'Nuevo Usuario',
          rol: 'USUARIO'
        }
      }
    }
  })
  @ApiResponse({ status: 409, description: 'El correo ya está registrado' })
  async registrarse(@Body() dto: RegistrarUsuarioDto) {
    const usuario = await this.servicioAcceso.registrarUsuario(dto);
    
    return {
      mensaje: 'Usuario registrado exitosamente',
      usuario: {
        id: usuario.id,
        correo: usuario.correo,
        nombre: usuario.nombre,
        rol: usuario.rol,
      },
    };
  }
}