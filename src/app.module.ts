import { CacheInterceptor, CacheModule, MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestingCookieModule } from './testing-cookie/testing-cookie.module';
import { TestingCacheRedisModule } from './testing-cache-redis/testing-cache-redis.module';
import { ConfigModule } from '@nestjs/config';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { TestingTypeormModule } from './testing-typeorm/testing-typeorm.module';
import { LoggerService } from './testing-winston/logger.middleware';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    
    CacheModule.register({  isGlobal: true }),

    TestingCookieModule, 
    TestingCacheRedisModule, 
    TestingTypeormModule
  ],
  controllers: [AppController],
  providers: [
    /** 
     * @description
     * Caching for every get request
     */
    {
      provide: APP_INTERCEPTOR,
      useClass: CacheInterceptor
    },
    AppService,
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
