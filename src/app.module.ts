import { CacheInterceptor, CacheModule, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestingCookieModule } from './testing-cookie/testing-cookie.module';
import { TestingCacheRedisModule } from './testing-cache-redis/testing-cache-redis.module';
import { ConfigModule } from '@nestjs/config';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { TestingTypeormModule } from './testing-typeorm/testing-typeorm.module';
import * as redisStore from 'cache-manager-redis-store'

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    CacheModule.register({
      /** Register Cache one */
      isGlobal: true,

      /** Using redis to store cached data */
      store: redisStore,
      socket: {
        host: 'localhost',
        port: 6379
      }
    }),
    TestingCookieModule, 
    TestingCacheRedisModule, TestingTypeormModule
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
