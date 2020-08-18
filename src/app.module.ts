import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

/** Modules */
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { RoleModule } from './role/role.module';

@Module({
  imports: [MongooseModule.forRoot(process.env.MONGO_URI), UserModule, AuthModule, RoleModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
