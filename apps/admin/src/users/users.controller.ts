import { Controller, UseGuards, Get, Post, Param, Body } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { User, Baseinfo } from '@libs/db/models/user.model';
import {Crud} from 'nestjs-mongoose-crud'
import { ApiTags, ApiBearerAuth, ApiOperation, ApiParam } from '@nestjs/swagger';
import { ReturnModelType, DocumentType } from '@typegoose/typegoose';
import { AuthGuard } from '@nestjs/passport';
import { JwtService } from '@nestjs/jwt';
import { Roles } from '../guards/roles.decorator';
import { CurrentUser } from '../auth/currentuser.decorator';
import { BaseInfoDto } from './dto/baseinfo.dto';


// 使用了全站之巅的crud模块，一键生成RESTful,get,put,post,delete四种接口
@Crud({
    model: User,
    // routes: {
    //     delete: {
    //         decorators: [   
                        // ApiTags('用户')
    //             ]
    //     }
    // }
})

@ApiTags('用户')
@UseGuards(AuthGuard('jwt'))  //守卫
@ApiBearerAuth() //文档中可以输入token
@Roles('admin','superadmin')
@Controller('users')
export class UsersController {
    constructor(
        private jwtService: JwtService,
        @InjectModel(User) private readonly userModel: ReturnModelType<typeof User>){
    }

    @Get('info')
    @ApiOperation({ summary: '个人资料' })
    async info(@CurrentUser() user: DocumentType<User>) {
        const id = user._id
        const username = user.username
        const baseinfo = user.baseinfo
        return {
            id,
            username,
            baseinfo
        };
    }

    @Post('info')
    @ApiOperation({summary:'编辑个人资料'})
    async setinfo(@Body() dto: BaseInfoDto  ,@CurrentUser() user: DocumentType<User>){
        const _id = user._id
        const newInfo = {}
        for (const _key in user.baseinfo){
            newInfo[_key] = user.baseinfo[_key]
        }
        for (const _key in dto){
            newInfo[_key] = dto[_key]
        }
        // console.log(newInfo)
        
        const res = await this.userModel.findByIdAndUpdate(_id,
            {$set:{
                baseinfo: newInfo
            }},
            {new : true},
            ()=>{
                console.log('update success')
            }   
        )

        return {
            id:_id,
            usename: user.username,
            baseinfo: newInfo
        }
    }
}
