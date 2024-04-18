import { Module } from '@nestjs/common';
import { AppConfigModule, DatabaseConfigModule } from './config';
import { HelloModule } from './modules/hello';
import { ChatModule } from './socket/chat';

@Module({
  imports: [AppConfigModule, DatabaseConfigModule, HelloModule, ChatModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
