import { Module } from '@nestjs/common';
import { TestingCookieController } from './testing-cookie.controller';

@Module({
  controllers: [TestingCookieController]
})
export class TestingCookieModule {}
