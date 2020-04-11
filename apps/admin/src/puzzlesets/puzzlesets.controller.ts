import { Controller } from '@nestjs/common';


import {Crud} from 'nestjs-mongoose-crud'
import { ApiTags } from '@nestjs/swagger';
import { InjectModel } from 'nestjs-typegoose';
import { Puzzleset } from '@libs/db/models/puzzleset.model';
import { ReturnModelType } from '@typegoose/typegoose';



@Crud({
    model: Puzzleset
})


@ApiTags('公式Set集合')
@Controller('puzzlesets')
export class PuzzlesetsController {
    constructor(@InjectModel(Puzzleset) private readonly model: ReturnModelType<typeof Puzzleset>) {
        
    }
}
