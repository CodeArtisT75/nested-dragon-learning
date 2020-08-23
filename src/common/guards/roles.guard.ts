import { Injectable, CanActivate, ExecutionContext, SetMetadata } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const roles = this.reflector.get<string[]>('roles', context.getClass());
    if (!roles) {
      return true;
    }

    const request = context.switchToHttp().getRequest();
    const user = request.user;

    return this.matchRoles(roles, user.roles);
  }

  matchRoles(roles: Array<any>, userRoles: Array<any>): boolean {
    return roles.some(r => userRoles.some(ur => r === ur));
  }
}

export const Roles = (...roles: string[]): any => SetMetadata('roles', roles);
