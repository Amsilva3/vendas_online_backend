import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const whitelist = [
  'http://localhost:5173',
  'http://localhost:8080',
  'http://localhost:5000',
  'http://127.0.0.1:5173',
  'http://127.0.0.1:8080',
  'http://127.0.0.1:5000',
];

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    allowedHeaders: '*',
    origin: whitelist,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    preflightContinue: false,
    optionsSuccessStatus: 204,
  });
  await app.listen(8080);
}
bootstrap();
