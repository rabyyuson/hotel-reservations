import { registerAs } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { CheckIn } from 'src/check-in/entities/check-in.entity';

export default registerAs(
    'orm.config',
    (): TypeOrmModuleOptions => ({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'test1',
        password: 'test1',
        database: 'hotel-reservations',
        entities: [CheckIn],
        synchronize: true,
    })
);