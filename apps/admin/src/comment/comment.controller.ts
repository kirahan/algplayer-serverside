import { Controller } from '@nestjs/common';
import { Crud } from 'nestjs-mongoose-crud';
import { Comment } from '@libs/db/models/comment.model';
import { ApiTags } from '@nestjs/swagger';
import { InjectModel } from 'nestjs-typegoose';
import { ReturnModelType } from '@typegoose/typegoose';



@Crud({
    model: Comment
})


@ApiTags('公式评论comment')
@Controller('comment')
export class CommentController {
    constructor(
        @InjectModel(Comment) private readonly commentModel: ReturnModelType<typeof Comment>
    ){}
}
