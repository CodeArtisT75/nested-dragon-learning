import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Role } from './role.schema';
import { RoleInterface } from './interface/role.interface';

@Injectable()
export class RoleService {
  constructor(@InjectModel('roles') private RoleModel: Model<Role>) {}

  async findAll(): Promise<Role[]> {
    return await this.RoleModel.find();
  }

  async find(id: string): Promise<Role> {
    return await this.RoleModel.findById(id);
  }

  async create(role: RoleInterface): Promise<Role> {
    return await this.RoleModel.create(role);
  }

  async delete(id: string): Promise<Role> {
    return await this.RoleModel.findByIdAndDelete(id);
  }

  async update(id: string, role: RoleInterface): Promise<Role> {
    return await this.RoleModel.findByIdAndUpdate(id, role, { new: true });
  }
}
