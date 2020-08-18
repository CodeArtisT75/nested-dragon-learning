import { Controller, Post, UseGuards, Req } from '@nestjs/common';
import { HttpResponse } from 'src/common/interfaces/http';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';

@Controller('auth')
export class AuthController {
  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Req() req: Request): Promise<HttpResponse> {
    return {
      message: 'ok',
      data: req.user,
    };
  }
}
