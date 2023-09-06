import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: true,
    methods: 'GET, POST, PUT, PATCH, DELETE HEAD, OPTIONS',
    credentials: true,
  });
  await app.listen(8080);
}
bootstrap();
