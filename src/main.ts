import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import dotenv from "dotenv/config";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api/v1');
  app.enableCors();

  const port = process.env.APP_PORT || 3000;
  await app.listen(port, `${process.env.APP_HOST}`);
}
bootstrap();
