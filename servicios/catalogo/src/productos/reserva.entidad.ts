import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Producto } from './producto.entidad';

@Entity('reservas')
export class Reserva {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int', name: 'idProducto' })
  idProducto: number;

  @Column({ type: 'int', name: 'idUsuario' })
  idUsuario: number;

  @Column({ type: 'int' })
  cantidad: number;

  @CreateDateColumn({ name: 'fechaCreacion' })
  fechaCreacion: Date;

  @ManyToOne(() => Producto, (producto) => producto.reservas, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'idProducto' })
  producto: Producto;
}