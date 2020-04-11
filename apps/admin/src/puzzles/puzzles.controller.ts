import { Controller } from '@nestjs/common';
import {Crud} from 'nestjs-mongoose-crud'
import { Puzzle } from '@libs/db/models/puzzle.model';
import { ApiTags } from '@nestjs/swagger';
import { InjectModel } from 'nestjs-typegoose';
import { ReturnModelType } from '@typegoose/typegoose';



@Crud({
    model: Puzzle
})


@ApiTags('魔方')
@Controller('puzzles')
export class PuzzlesController {
    constructor(@InjectModel(Puzzle) private readonly model: ReturnModelType<typeof Puzzle>) {
        
    }
}
