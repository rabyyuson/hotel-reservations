import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CheckInController } from './check-in/check-in.controller';
import { CheckInService } from './check-in/check-in.service';
import { SeedService } from 'seed.service';
import { CheckIn } from './check-in/entities/check-in.entity';
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
    TypeOrmModule.forFeature([CheckIn]),],
  controllers: [AppController, CheckInController],
  providers: [AppService, SeedService, CheckInService],
})
export class AppModule {}
