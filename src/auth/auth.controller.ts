import { Controller, Post, Body } from '@nestjs/common';
import { AuthDTO } from './dto/auth.dto';
import { AuthService } from './auth.service';
import { HttpResponse } from 'src/common/interfaces/http';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Body() body: AuthDTO): Promise<HttpResponse> {
    const user = await this.authService.login(body);

    return {
      message: 'ok',
      data: user,
    };
  }
}
