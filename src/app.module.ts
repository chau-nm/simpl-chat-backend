import { Module } from '@nestjs/common';
import { HelloModule } from './modules/hello';

@Module({
  imports: [HelloModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
