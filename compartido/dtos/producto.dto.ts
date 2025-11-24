import { IsString, IsNumber, IsPositive, IsInt, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

/**
 * DTO para crear un nuevo producto
 */
export class CrearProductoDto {
  @ApiProperty({
    example: 'Laptop HP',
    description: 'Nombre del producto'
  })
  @IsString({ message: 'El nombre debe ser texto' })
  nombre: string;

  @ApiProperty({
    example: 599.99,
    description: 'Precio del producto en dólares'
  })
  @IsNumber({}, { message: 'El precio debe ser un número' })
  @IsPositive({ message: 'El precio debe ser positivo' })
  precio: number;

  @ApiProperty({
    example: 50,
    description: 'Cantidad disponible en inventario'
  })
  @IsInt({ message: 'El inventario debe ser un número entero' })
  @Min(0, { message: 'El inventario no puede ser negativo' })
  inventario: number;
}

/**
 * DTO para reservar productos en el carrito
 */
export class ReservarProductoDto {
  @ApiProperty({
    example: 1,
    description: 'ID del producto a reservar'
  })
  @IsInt({ message: 'El ID del producto debe ser un número entero' })
  @IsPositive({ message: 'El ID del producto debe ser positivo' })
  idProducto: number;

  @ApiProperty({
    example: 1,
    description: 'ID del usuario que reserva'
  })
  @IsInt({ message: 'El ID del usuario debe ser un número entero' })
  @IsPositive({ message: 'El ID del usuario debe ser positivo' })
  idUsuario: number;

  @ApiProperty({
    example: 2,
    description: 'Cantidad a reservar'
  })
  @IsInt({ message: 'La cantidad debe ser un número entero' })
  @IsPositive({ message: 'La cantidad debe ser positiva' })
  cantidad: number;
}
