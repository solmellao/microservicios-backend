import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { Reserva } from './reserva.entidad';

@Entity('productos')
export class Producto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  nombre: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  precio: number;

  @Column({ type: 'int', default: 0 })
  inventario: number;

  @Column({ type: 'int', default: 0, name: 'inventarioReservado' })
  inventarioReservado: number;

  // ⭐ IMPORTANTE: Cambiar el tipo a "string | null" para permitir valores nulos
  @Column({ type: 'varchar', length: 500, nullable: true })
  imagenUrl: string | null;

  @CreateDateColumn({ name: 'fechaCreacion' })
  fechaCreacion: Date;

  @UpdateDateColumn({ name: 'fechaActualizacion' })
  fechaActualizacion: Date;

  @OneToMany(() => Reserva, (reserva) => reserva.producto)
  reservas: Reserva[];
}