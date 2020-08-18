import { Injectable } from '@nestjs/common';
import { AuthDTO } from './dto/auth.dto';
import { User } from 'src/user/user.schema';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async login(userData: AuthDTO): Promise<User> {
    let user = await this.userService.findByUserName(userData.username);

    if (user) {
      if (bcrypt.compareSync(userData.password, user.password)) {
        user = user.toJSON();
        delete user.password;
        delete user.token;
      } else {
        user = null;
      }
    }

    return user;
  }

  async token(user: any): Promise<any> {
    const payload = { id: user._id, username: user.username };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
