import { Module } from '@nestjs/common';
import { RoleService } from './role.service';
import { RoleController } from './role.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { RoleScema } from './role.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'roles', schema: RoleScema }])],
  exports: [RoleService],
  providers: [RoleService],
  controllers: [RoleController],
})
export class RoleModule {}
