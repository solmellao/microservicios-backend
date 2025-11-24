import { 
  Entity, 
  Column, 
  PrimaryGeneratedColumn, 
  CreateDateColumn, 
  ManyToOne 
} from 'typeorm';
import { Producto } from './producto.entidad';

@Entity('reservas_productos')
export class Reserva {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'id_producto' })
  idProducto: number;

  @ManyToOne(() => Producto, producto => producto.reservas)
  producto: Producto;
  
  @Column('int', { name: 'id_usuario' })
  idUsuario: number; // Usuario que hizo la reserva

  @Column('int')
  cantidad: number;

  @CreateDateColumn({ name: 'fecha_creacion' })
  fechaCreacion: Date; // Para saber cuándo expira
}
