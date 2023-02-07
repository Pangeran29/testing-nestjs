import { CacheInterceptor, CacheModule, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestingCookieModule } from './testing-cookie/testing-cookie.module';
import { TestingCacheRedisModule } from './testing-cache-redis/testing-cache-redis.module';
import { ConfigModule } from '@nestjs/config';
import * as redisStore from 'cache-manager-redis-store';
import { APP_INTERCEPTOR } from '@nestjs/core';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    CacheModule.register({
      /** Register Cache one */
      isGlobal: true
    }),
    TestingCookieModule, 
    TestingCacheRedisModule
  ],
  controllers: [AppController],
  providers: [
    AppService,
    /** Caching for every get request */
    {
      provide: APP_INTERCEPTOR,
      useClass: CacheInterceptor
    }
  ],
})
export class AppModule {}
