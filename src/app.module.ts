import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CheckInModule } from './check-in/check-in.module';

@Module({
  imports: [CheckInModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
