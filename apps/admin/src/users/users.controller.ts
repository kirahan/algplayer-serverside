import { Controller } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { User } from '@libs/db/models/user.model';
import {Crud} from 'nestjs-mongoose-crud'
import { ApiTags } from '@nestjs/swagger';
import { ReturnModelType } from '@typegoose/typegoose';


// 使用了全站之巅的crud模块，一键生成RESTful,get,put,post,delete四种接口
@Crud({
    model: User
})

@ApiTags('用户')
@Controller('users')
export class UsersController {
    constructor(@InjectModel(User) private readonly model: ReturnModelType<typeof User>){

    }
}
