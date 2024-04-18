import { Injectable } from '@nestjs/common';
import { HELLO } from 'src/common/constants';

@Injectable()
export class HelloService {
  getHelloMessage(): string {
    return HELLO;
  }
}
