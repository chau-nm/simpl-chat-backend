import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async login(username: string, password: string) {
    try {
      const user = await this.userService.findOneByUserName(username);
      if (user?.password !== password) {
        throw new UnauthorizedException();
      }
      return user.id;
    } catch (error) {
      return null;
    }
  }
}
