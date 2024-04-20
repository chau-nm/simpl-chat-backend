import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as entities from 'src/entity';
import { UserService } from './user.service';

@Module({
  imports: [TypeOrmModule.forFeature(Object.values(entities))],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
