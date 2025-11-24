import { 
  Entity, 
  Column, 
  PrimaryGeneratedColumn, 
  CreateDateColumn, 
  OneToMany 
} from 'typeorm';
import { Reserva } from './reserva.entidad';

@Entity('productos')
export class Producto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  nombre: string;

  @Column('decimal', { precision: 10, scale: 2 })
  precio: number;

  @Column('int')
  inventario: number; // Stock físico disponible

  @Column('int', { default: 0, name: 'inventario_reservado' })
  inventarioReservado: number; // Stock temporalmente reservado

  @CreateDateColumn({ name: 'fecha_creacion' })
  fechaCreacion: Date;
  
  @OneToMany(() => Reserva, reserva => reserva.producto)
  reservas: Reserva[];
}
