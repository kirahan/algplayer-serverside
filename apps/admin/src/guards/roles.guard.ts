import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Reflector } from '@nestjs/core';
import { User } from '@libs/db/models/user.model';
import { DocumentType} from '@typegoose/typegoose'

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector){}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    console.log('inin roles')
    const roles = this.reflector.getAllAndOverride<string[]>('roles',
    [context.getHandler(),context.getClass()])
    // 当设置的roles在controller级的时候用 getClass 而不是 getHandler
    // const roles = this.reflector.get<string[]>('roles',context.getClass())   
    const req = context.switchToHttp().getRequest()
    const user = req.user as DocumentType<User>
    return user && user.role && roles.includes(user.role);
  }
}
