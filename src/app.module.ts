import { Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { AppConfigModule, DatabaseConfigModule } from './config';
import { CorsInterceptor } from './cors/cors.interceptor';
import { AuthModule } from './modules/auth';
import { HelloModule } from './modules/hello';
import { UserModule } from './modules/user';
import { ChatModule } from './socket/chat';

@Module({
  imports: [
    AppConfigModule,
    DatabaseConfigModule,
    HelloModule,
    ChatModule,
    UserModule,
    AuthModule,
  ],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: CorsInterceptor,
    },
  ],
})
export class AppModule {}
