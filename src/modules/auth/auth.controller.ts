import { Body, Controller, Post, Session } from '@nestjs/common';
import { SignInDto } from 'src/dto';
import { AuthService } from './auth.service';

@Controller('/auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/login')
  async signIn(
    @Body() signInDto: SignInDto,
    @Session() session: Record<string, any>,
  ) {
    const userId = await this.authService.login(
      signInDto.username,
      signInDto.password,
    );
    if (userId !== null) {
      session.userId = userId;
      return {
        loginSuccess: true,
        message: 'Login success',
      };
    }
    return {
      loginSuccess: false,
      message: 'Login fail',
    };
  }
}
