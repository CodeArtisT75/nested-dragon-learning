import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UserInteface } from './interface/user.interface';
import { User } from './user.schema';

@Injectable()
export class UserService {
  constructor(@InjectModel('users') private UserModel: Model<User>) {}

  async findAll(): Promise<User[]> {
    return await this.UserModel.find();
  }

  async find(id: string): Promise<User> {
    return await this.UserModel.findById(id);
  }

  async create(user: UserInteface): Promise<User> {
    return await this.UserModel.create(user);
  }

  async delete(id: string): Promise<User> {
    return await this.UserModel.findByIdAndDelete(id);
  }

  async update(id: string, user: UserInteface): Promise<User> {
    return await this.UserModel.findByIdAndUpdate(id, user, { new: true });
  }
}
