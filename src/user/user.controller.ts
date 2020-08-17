import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UserDTO } from './dto/user.dto';
import { User } from './user.schema';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get(':id')
  find(@Param('id') id: string): Promise<User> {
    return this.userService.find(id);
  }

  @Post()
  create(@Body() userData: UserDTO): Promise<User> {
    return this.userService.create(userData);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<User> {
    return this.userService.delete(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() userData: UserDTO): Promise<User> {
    return this.userService.update(id, userData);
  }
}
