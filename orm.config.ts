import { registerAs } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Reservation } from 'src/reservations/entities/reservation.entity';
import dotenv from "dotenv/config";

export default registerAs(
    'orm.config',
    (): TypeOrmModuleOptions => ({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'test1',
        password: 'test1',
        database: 'hotel-reservations',
        entities: [Reservation],
        synchronize: true,
    })
);