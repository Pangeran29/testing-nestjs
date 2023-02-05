import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestingCookieModule } from './testing-cookie/testing-cookie.module';

@Module({
  imports: [TestingCookieModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
