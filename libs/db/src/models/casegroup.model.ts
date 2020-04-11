import { prop, modelOptions, Ref, arrayProp} from '@typegoose/typegoose'
import { ApiProperty } from '@nestjs/swagger'
import { Puzzleset } from './puzzleset.model'



@modelOptions({
    schemaOptions: {
        // 自动添加时间
        timestamps: true
    }
})
export class Casegroup {
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
        example: 'casegroup'
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
    parentset: Ref<Puzzleset>

}