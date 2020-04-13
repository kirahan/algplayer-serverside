import { createParamDecorator, ExecutionContext  } from '@nestjs/common';

// 自定义装饰器

export const CurrentUser = createParamDecorator((data,ctx: ExecutionContext)=> {
    // 已经跟视频中不一样了
    const request = ctx.switchToHttp().getRequest();
    return request.user;
}
)