import { Module } from '@nestjs/common';
import { AppConfigModule, DatabaseConfigModule } from './config';
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
})
export class AppModule {}
