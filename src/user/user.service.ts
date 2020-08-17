import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UserInteface } from './interface/user.interface';
import { User } from './user.schema';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(@InjectModel('users') private UserModel: Model<User>) {}

  async findAll(): Promise<User[]> {
    return await this.UserModel.find({}, ['id', 'name', 'username']);
  }

  async find(id: string): Promise<User> {
    return await this.UserModel.findById(id);
  }

  async create(user: UserInteface): Promise<User> {
    user.password = await bcrypt.hash(user.password, 10);
    return await this.UserModel.create(user);
  }

  async delete(id: string): Promise<User> {
    return await this.UserModel.findByIdAndDelete(id);
  }

  async update(id: string, user: UserInteface): Promise<User> {
    return await this.UserModel.findByIdAndUpdate(id, user, { new: true });
  }

  async findByUserName(username: string): Promise<User> {
    return await this.UserModel.findOne({ username });
  }
}
