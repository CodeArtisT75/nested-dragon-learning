import { Controller, Post, UseGuards, Req, HttpCode, Get } from '@nestjs/common';
import { HttpResponse } from 'src/common/interfaces/http';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @Post('login')
  @HttpCode(200)
  async login(@Req() req: Request): Promise<HttpResponse> {
    return {
      message: 'ok',
      data: await this.authService.token(req.user),
    };
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('user')
  async getCurrentUser(@Req() req: Request): Promise<HttpResponse> {
    return {
      message: 'ok',
      data: req.user,
    };
  }
}
