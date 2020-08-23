import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

/** Modules */
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { RoleModule } from './role/role.module';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from './common/guards/roles.guard';

@Module({
  imports: [MongooseModule.forRoot(process.env.MONGO_URI), UserModule, AuthModule, RoleModule],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
})
export class AppModule {}
