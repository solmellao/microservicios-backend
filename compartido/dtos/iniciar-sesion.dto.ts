import { IsEmail, IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

/**
 * DTO para iniciar sesión en el sistema
 */
export class IniciarSesionDto {
  @ApiProperty({
    example: 'usuario@tienda.com',
    description: 'Correo electrónico del usuario'
  })
  @IsEmail({}, { message: 'El correo debe ser válido' })
  correo: string;

  @ApiProperty({
    example: '123456',
    description: 'Contraseña del usuario'
  })
  @IsString({ message: 'La contraseña debe ser texto' })
  @IsNotEmpty({ message: 'La contraseña es obligatoria' })
  clave: string;
}
