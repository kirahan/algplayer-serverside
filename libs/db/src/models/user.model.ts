import { prop, modelOptions } from '@typegoose/typegoose';
import { ApiProperty } from '@nestjs/swagger';
import { hashSync } from 'bcryptjs';

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
  })
  @prop({default: 'normal'})
  role: string;
}
