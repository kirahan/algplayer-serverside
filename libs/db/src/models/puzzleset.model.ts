import { prop, modelOptions, Ref, arrayProp} from '@typegoose/typegoose'
import { ApiProperty } from '@nestjs/swagger'
import { Casegroup } from './casegroup.model'



@modelOptions({
    schemaOptions: {
        // 自动添加时间
        timestamps: true
    }
})
export class Puzzleset {
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
        example: 'puzzleset'
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
        description: '是否有子集',
        example: false
    })
    @prop()
    haschildren: boolean

    @ApiProperty({
        description: '是否有父级',
        example: false
    })
    @prop()
    hasparent: boolean

    @ApiProperty({
        description: '父级',
        example: ''
    })
    @prop()
    parentset: Ref<Puzzleset>

    @ApiProperty({
        description: '包含的子集',
        example: ['zblla','zbllb']
    })
    @arrayProp({itemsRef: "Puzzleset"})
    childrensets: Ref<Puzzleset>


    @ApiProperty({
        description: '包含的casegroup',
        example: ['f2l1','f2l2']
    })
    @arrayProp({itemsRef: "Casegroup"})
    casegroups: Ref<Casegroup>
}