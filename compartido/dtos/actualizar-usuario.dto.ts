import { IsString, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ActualizarUsuarioDto {
  @ApiProperty({ 
    required: false,
    example: 'Juan Pérez',
    description: 'Nombre completo del usuario'
  })
  @IsString({ message: 'El nombre debe ser texto' })
  @IsOptional()
  nombre?: string;

  @ApiProperty({ 
    required: false,
    example: 'uploads/usuarios/abc-123-def.jpg',
    description: 'URL de la imagen del usuario'
  })
  @IsString({ message: 'La imagen debe ser texto' })
  @IsOptional()
  imagenUrl?: string;
}