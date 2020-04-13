import { Controller, Post, Body, Get, UseGuards, Req, Query } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiProperty, ApiBearerAuth, ApiQuery } from '@nestjs/swagger';
import { InjectModel } from 'nestjs-typegoose';
import { User } from '@libs/db/models/user.model';
import { ReturnModelType , DocumentType} from '@typegoose/typegoose';
import { AuthGuard } from '@nestjs/passport';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';
import { CurrentUser } from './currentuser.decorator';
import { RolesGuard } from '../guards/roles.guard';
import { Roles } from '../guards/roles.decorator';

@ApiTags('用户')
// @Roles('admin')
@Controller('auth')
export class AuthController {
  //
  // 注入模型
  constructor(
    private jwtService: JwtService,
    @InjectModel(User) private userModel: ReturnModelType<typeof User>,
  ) {}

  @Post('register')
  @Roles('superadmin')  //允许使用接口的用户类型
  @ApiQuery({name:'role',required:true,description:'角色类型',enum:['normal','admin','superadmin','guest','banned']})
  @ApiOperation({ summary: '注册' })
  async register(@Body() dto: RegisterDto, @Query() query) {
    const { username, password } = dto;
    const role = query.role ? query.role : 'normal'
    console.log(role)
    const user = await this.userModel.create({
      username,
      password,
      role
    });
    return user;
  }

  @Post('login')
  @Roles('admin','superadmin')
  @ApiOperation({ summary: '登录' })
  @UseGuards(AuthGuard('local'),RolesGuard)
  async login(@Body() dto: LoginDto, @CurrentUser() user: DocumentType<User>) {
    return {
      token: this.jwtService.sign(String(user._id)),
    };
  }

  @Get('user')
  @ApiOperation({ summary: '个人信息' })
  @UseGuards(AuthGuard('jwt'))  //守卫
  @ApiBearerAuth() //文档中可以输入token
  async user(@CurrentUser() user: DocumentType<User>) {
    // 上面使用了自定义装饰器，原本应该写成 @Req() req
    // 同时给user制定了typegoose的类型，这样不仅可以补全user的username
    // 还可以显示很多typegoose中的key和method
    return user;
  }
}
