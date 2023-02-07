import { CacheInterceptor, CacheModule, Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { TestingCacheRedisController } from './testing-cache-redis.controller';
import { APP_INTERCEPTOR } from '@nestjs/core';


@Module({
  imports: [
    HttpModule
  ],
  controllers: [TestingCacheRedisController],
})
export class TestingCacheRedisModule {}
