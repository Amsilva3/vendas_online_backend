import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    allowedHeaders: ['content-type', 'Access-Control-Allow-Origin'],
    origin: 'http://localhost:8080/user',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    preflightContinue: true,
    optionsSuccessStatus: 204,
  });
  await app.listen(8080);
}
bootstrap();
