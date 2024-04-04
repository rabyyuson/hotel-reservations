import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SeedService } from 'seed.service';
import { Reservation } from './reservations/entities/reservation.entity';
import { ReservationsController } from './reservations/reservations.controller';
import { ReservationService } from './reservations/reservations.service';
import ormConfig from '../orm.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [ormConfig],
      expandVariables: true,
    }),
    TypeOrmModule.forRootAsync({
      useFactory: ormConfig,
    }),
    TypeOrmModule.forFeature([Reservation]),],
  controllers: [AppController, ReservationsController],
  providers: [AppService, SeedService, ReservationService],
})
export class AppModule {}
