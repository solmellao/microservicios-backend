import { IsArray, ValidateNested, IsInt, IsPositive } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

/**
 * DTO para un artículo de compra individual
 */
export class ArticuloCompraDto {
  @ApiProperty({
    example: 1,
    description: 'ID del producto'
  })
  @IsInt({ message: 'El ID del producto debe ser un número entero' })
  @IsPositive({ message: 'El ID del producto debe ser positivo' })
  idProducto: number;

  @ApiProperty({
    example: 2,
    description: 'Cantidad a comprar'
  })
  @IsInt({ message: 'La cantidad debe ser un número entero' })
  @IsPositive({ message: 'La cantidad debe ser positiva' })
  cantidad: number;
}

/**
 * DTO para procesar una compra con múltiples artículos
 */
export class ProcesarCompraDto {
  @ApiProperty({
    type: [ArticuloCompraDto],
    description: 'Lista de artículos a comprar'
  })
  @IsArray({ message: 'Los artículos deben ser un arreglo' })
  @ValidateNested({ each: true })
  @Type(() => ArticuloCompraDto)
  articulos: ArticuloCompraDto[];
}
