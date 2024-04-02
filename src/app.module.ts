import { Module } from '@nestjs/common';
import { AppConfigModule, DatabaseConfigModule } from './config';
import { HelloModule } from './modules/hello';

@Module({
  imports: [AppConfigModule, DatabaseConfigModule, HelloModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
