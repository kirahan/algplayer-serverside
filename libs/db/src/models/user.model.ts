import { prop, modelOptions} from '@typegoose/typegoose'
import { ApiProperty } from '@nestjs/swagger'



@modelOptions({
    schemaOptions: {
        // 自动添加时间
        timestamps: true
    }
})
export class User {
    @ApiProperty({
        description: '用户名',
        example: 'username1'
    })
    @prop()
    username: string


    @ApiProperty({
        description: '密码'
    })
    @prop()
    password: string
}