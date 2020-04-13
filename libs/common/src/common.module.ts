// 配置公共模块
// 装载环境变量
// 装载数据库


import { Module } from '@nestjs/common';
import { CommonService } from './common.service';
import { ConfigModule } from '@nestjs/config'
import { DbModule } from '@libs/db';
// import { JwtModule} from '@nestjs/jwt'

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
  providers: [CommonService],
  exports: [CommonService,
    // JwtModule
  ],
})
export class CommonModule {}
