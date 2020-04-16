// 配置公共模块

import { Module, Global } from '@nestjs/common';
import { CommonService } from './common.service';

// 环境变量
import { ConfigModule } from '@nestjs/config'

// 数据库
import { DbModule, DbService } from '@libs/db';

//邮件服务 
import { EmailService } from '@libs/email';

// 短信服务
import { AlismsService } from '@libs/alisms';

// 文件上传服务
import { AliossService } from '@libs/alioss';


const services = [CommonService,DbService,EmailService,AlismsService,AliossService]

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    // JwtModule.registerAsync({
    //   useFactory(){
    //     return {
    //       secret: process.env.JWTSECRET
    //     }
    //   }
    // }),
    DbModule
  ],
  providers: services,
  exports: services,
    // JwtModule
})
export class CommonModule {}
