import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Status } from '../status.enum';

@Entity()
export class Reservation {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({ nullable: true })
  name: string;

  @Column()
  room: number;
  
  @Column({
      type: 'enum',
      enum: Status,
      default: Status.AVAILABLE,
  })
  status: Status;

  @Column({ nullable: true })
  confirmation: string;

  @Column({ nullable: true })
  checkInDate: Date;

  @Column({ nullable: true })
  checkOutDate: Date;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
