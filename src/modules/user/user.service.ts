import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userResponsitory: Repository<User>,
  ) {}

  findOneByUserName(username: string): Promise<User | undefined> {
    return this.userResponsitory.findOne({
      where: {
        username,
      },
    });
  }
}
