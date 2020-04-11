import { prop, modelOptions, Ref, arrayProp} from '@typegoose/typegoose'
import { ApiProperty } from '@nestjs/swagger'
import { Casegroup } from './casegroup.model'



@modelOptions({
    schemaOptions: {
        // 自动添加时间
        timestamps: true
    }
})
export class Algcase {
    @ApiProperty({
        description: '集合类型',
        example: 'PLL'
    })
    @prop()
    name: string


    @ApiProperty({
        description: '短名字',
        example: 'pll'
    })
    @prop()
    shortname: string

    @ApiProperty({
        description: '类型说明',
        example: 'algcase'
    })
    @prop()
    class: string

    @ApiProperty({
        description: '所属的puzzle',
        example: '333'
    })
    @prop()
    puzzle: string


    @ApiProperty({
        description: '父级',
        example: ''
    })
    @prop()
    parentgroup: Ref<Casegroup>

}