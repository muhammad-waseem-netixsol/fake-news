import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Define CORS options
  const corsOptions = {
    origin: ['https://finalhackathonfrontend.vercel.app'], // or specify your frontend URL(s) here
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // or specify the methods you need
    allowedHeaders: ['Content-Type', 'Authorization'], // or specify the headers you need
  };
  // Enable CORS with options
  app.enableCors(corsOptions);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3001);
}
bootstrap();
