import { Controller, Get } from '@nestjs/common';

@Controller('')
export class AppController {
  @Get()
  hello(): any {
    return {
      message: 'hello guess',
    };
  }
}
