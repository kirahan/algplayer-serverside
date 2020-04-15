import { prop, modelOptions } from '@typegoose/typegoose';
import { ApiProperty } from '@nestjs/swagger';
import { hashSync } from 'bcryptjs';


export enum UserRole{
  normal=1,
  admin,
  superadmin,
  guest,
  banned
}
export enum Gender{
  male=1,
  female
}

export interface Baseinfo {
  province?: string,
  city?: string,
  age?: number,
  gender?: Gender,
  nickname?: string,
  birthday?: string,
  introduction?: string,
  avator?: string,
  wcaid?: string,
  mail?: string,
  phone?: string,
}

interface AccountList{
  wcaoffical?: string,
  cubingchinga?: string,
  cubenode?: string,
  wechat?: string
}


@modelOptions({
  schemaOptions: {
    // 自动添加时间
    timestamps: true,
  },
})
export class User {
  @ApiProperty({
    description: '用户名',
    example: 'username1',
  })
  @prop()
  username: string;



  @ApiProperty({
    description: '密码',
  })
    //   散列密码,同时不显示
  @prop({
    select: false,
    get(val) {
      return val;
    },
    set(val) {
      return val ? hashSync(val) : val;
    },
  })
  password: string;



  @ApiProperty({
    description: '角色',
    example: 'normal',
    enumName: "UserRole"
  })
  @prop({default: 'normal'})
  role: string;


  @ApiProperty({
    description: '个人资料',
    required: false
  })
  @prop({required: false})
  baseinfo : Baseinfo;


  @ApiProperty({
    description: '绑定账号',
    required: false
  })
  @prop({required: false})
  accountbind: AccountList

}

