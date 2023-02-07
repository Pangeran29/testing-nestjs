import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());

  /**
   * Cors configuration
   * This let you pass throgh the cookie to fe
   */
  app.enableCors({
    origin: true,
    methods: 'GET, PUT, POST, DELETE',
    credentials: true
  });

  /** 
   * Register cookie parser as middleware 
   * provice a secret if want cookie as signed cookie 
   * 
   */
  app.use(cookieParser('secret'));

  

  await app.listen(3000);
}
bootstrap();
