import { registerAs } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Reservation } from 'src/reservations/entities/reservation.entity';
import dotenv from "dotenv/config";

export default registerAs(
    'orm.config',
    (): TypeOrmModuleOptions => ({
        type: 'postgres',
        host: process.env.HOST,
        port: Number(process.env.PORT),
        username: process.env.USERNAME,
        password: process.env.PASSWORD,
        database: process.env.DATABASE,
        entities: [Reservation],
        synchronize: true,
    })
);