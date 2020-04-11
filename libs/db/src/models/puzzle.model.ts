import { prop, modelOptions, arrayProp, Ref} from '@typegoose/typegoose'
import { ApiProperty } from '@nestjs/swagger'
import { Puzzleset } from './puzzleset.model'



@modelOptions({
    schemaOptions: {
        // 自动添加时间
        timestamps: true
    }
})
export class Puzzle {
    @ApiProperty({
        description: '魔方名称',
        example: '3x3'
    })
    @prop()
    name: string


    @ApiProperty({
        description: '短名字',
        example: '333'
    })
    @prop()
    shortname: string

    @ApiProperty({
        description: '阶数',
        example: 3
    })
    @prop()
    order: number


    @ApiProperty({
        description: '类型说明',
        example: 'puzzle'
    })
    @prop()
    class: string


    @ApiProperty({
        description: '包含的集合set',
        example: ['pll','oll','wv']
    })
    // 引入外键，及引用另一个collection
    @arrayProp({itemsRef: "Puzzleset"})
    puzzlesets: Ref<Puzzleset>
}