import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Status } from '../status.enum';

@Entity()
export class CheckIn {
    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column()
    room: number;
    
    @Column({
        type: 'enum',
        enum: Status,
        default: Status.AVAILABLE,
    })
    status: Status;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
