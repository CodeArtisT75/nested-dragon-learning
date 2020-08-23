import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UserDTO } from './dto/user.dto';
import { HttpResponse } from '../common/interfaces/http';
import { AuthGuard } from '@nestjs/passport';

@Controller('user')
@UseGuards(AuthGuard('jwt'))
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  async findAll(): Promise<HttpResponse> {
    const users = await this.userService.findAll();

    return {
      message: 'OK',
      data: users,
    };
  }

  @Get(':id')
  async find(@Param('id') id: string): Promise<HttpResponse> {
    const user = await this.userService.find(id);

    return {
      message: 'OK',
      data: user,
    };
  }

  @Post()
  async create(@Body() userData: UserDTO): Promise<HttpResponse> {
    const user = await this.userService.create(userData);

    return {
      message: 'OK',
      data: user,
    };
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<HttpResponse> {
    const user = await this.userService.delete(id);

    return {
      message: 'OK',
      data: user,
    };
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() userData: UserDTO,
  ): Promise<HttpResponse> {
    const user = await this.userService.update(id, userData);

    return {
      message: 'OK',
      data: user,
    };
  }
}
