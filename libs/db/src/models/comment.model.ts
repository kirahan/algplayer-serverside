import { modelOptions, prop, plugin } from "@typegoose/typegoose";
import {  AutoIncrementSimple, AutoIncrementSimplePluginOptions } from '@typegoose/auto-increment'
import { ApiProperty } from "@nestjs/swagger";
import { MaxLength } from 'class-validator'

export enum CommentState {
    Published = 1,  // 已发布
    Deleted = -1,   // 已删除
    Spam = 0        // 垃圾评论
}

enum CommentParentType {
    Self = 0
}

enum CommentReplyType {
    Self = 0
}

@plugin<AutoIncrementSimplePluginOptions>(AutoIncrementSimple,[{field: 'commit_id'}])
@modelOptions({
    schemaOptions: {
        timestamps: true
    }
})
export class Comment {

    @ApiProperty({
        description: '作者id'
    })
    @prop()
    author_id: number;


    @ApiProperty({
        description: 'case的id'
    })
    @prop({required: true})
    case_id: number


    @ApiProperty({
        description: '评论的id'
    })
    @prop()
    commit_id: number


    @ApiProperty({
        description: '父级评论id'
    })
    @prop({default: CommentParentType.Self})
    p_id: number

    @ApiProperty({
        description: '回复的评论id'
    })
    @prop({default: CommentReplyType.Self})
    reply_id: number


    @ApiProperty({
        description: '评论正文'
    })
    @MaxLength(3000)
    @prop({required: true, validate: /\S+/})
    content: string


    @ApiProperty({
        description: '发布状态',
        default: CommentState.Published
    })
    @prop({default: CommentState.Published})
    state: CommentState


    @ApiProperty({
        description: '是否置顶',
        default: false
    })
    @prop({default: false})
    is_top: boolean


    @ApiProperty({
        description: '获赞数目',
        default: 0
    })
    @prop({default: 0})
    likes: number

    @ApiProperty({
        description: 'ip地址',
        required: false
    })
    @prop()
    ip: string


}