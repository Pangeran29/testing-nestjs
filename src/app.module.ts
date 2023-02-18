import { CacheInterceptor, CacheModule, MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestingCookieModule } from './testing-cookie/testing-cookie.module';
import { TestingCacheRedisModule } from './testing-cache-redis/testing-cache-redis.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { TestingTypeormModule } from './testing-typeorm/testing-typeorm.module';
import { WinstonLoggerModule } from './winston-logger/winston-logger.module';
import * as redisStore from 'cache-manager-redis-store'
// import * as redisStore from 'cache-manager-ioredis'
import { LoggerService } from './testing-winston/logger.middleware';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    
    CacheModule.registerAsync({
      useFactory: () => {
        return {
          store: redisStore,
          host: 'localhost',
          port: '6379',
        }
      }
    }),

    TestingCookieModule, 
    TestingCacheRedisModule, TestingTypeormModule, WinstonLoggerModule
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
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerService)
      // .exclude({ path: 'paragon-api', method: RequestMethod.GET },)
      .forRoutes('*');
  }
}
