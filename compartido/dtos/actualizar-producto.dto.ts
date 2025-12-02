import { IsString, IsNumber, IsPositive, IsInt, Min, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ActualizarProductoDto {
  @ApiProperty({ required: false })
  @IsString({ message: 'El nombre debe ser texto' })
  @IsOptional()
  nombre?: string;

  @ApiProperty({ required: false })
  @IsNumber({}, { message: 'El precio debe ser un número' })
  @IsPositive({ message: 'El precio debe ser positivo' })
  @IsOptional()
  precio?: number;

  @ApiProperty({ required: false })
  @IsInt({ message: 'El inventario debe ser un número entero' })
  @Min(0, { message: 'El inventario no puede ser negativo' })
  @IsOptional()
  inventario?: number;

  @ApiProperty({ required: false })
  @IsString({ message: 'La imagen debe ser texto' })
  @IsOptional()
  imagenUrl?: string;
}