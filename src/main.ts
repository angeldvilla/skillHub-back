import { NestFactory } from '@nestjs/core';
import { config } from 'dotenv';
import { AppModule } from './app.module';

config({ path: './.env' });

const { PORT } = process.env;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  if (!PORT) throw new Error('PORT is not defined');

  await app.listen(PORT);
}
bootstrap();
