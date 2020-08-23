import { Controller, Get, Param, Post, Body, Put, Delete, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { RoleDTO } from './dto/role.dto';
import { RoleService } from './role.service';
import { HttpResponse } from 'src/common/interfaces/http';

@Controller('role')
@UseGuards(AuthGuard('jwt'))
export class RoleController {
  constructor(private roleService: RoleService) {}

  @Get()
  async findAll(): Promise<HttpResponse> {
    return {
      message: 'ok',
      data: await this.roleService.findAll(),
    };
  }

  @Get(':id')
  async find(@Param('id') id: string): Promise<HttpResponse> {
    return {
      message: 'ok',
      data: await this.roleService.find(id),
    };
  }

  @Post()
  async create(@Body() roleDTO: RoleDTO): Promise<HttpResponse> {
    return {
      message: 'ok',
      data: await this.roleService.create(roleDTO),
    };
  }

  @Put(':id')
  async update(@Body() roleDTO: RoleDTO, @Param('id') id: string): Promise<HttpResponse> {
    return {
      message: 'ok',
      data: await this.roleService.update(id, roleDTO),
    };
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<HttpResponse> {
    return {
      message: 'ok',
      data: await this.roleService.delete(id),
    };
  }
}
