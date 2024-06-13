import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const { PORT = 3001 } = process.env;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(PORT);
}

bootstrap();
