import { Injectable } from '@nestjs/common';
import { constants } from 'src/common';

@Injectable()
export class HelloService {
  getHelloMessage(): string {
    return constants.HELLO;
  }
}
