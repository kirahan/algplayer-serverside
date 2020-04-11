import { Controller } from '@nestjs/common';
import {Crud} from 'nestjs-mongoose-crud'
import { ApiTags } from '@nestjs/swagger';
import { InjectModel } from 'nestjs-typegoose';
import { Algcase } from '@libs/db/models/algcase.model';
import { ReturnModelType } from '@typegoose/typegoose';



@Crud({
    model: Algcase
})


@ApiTags('algcase')
@Controller('algcases')
export class AlgcasesController {
    constructor(@InjectModel(Algcase) private readonly model: ReturnModelType<typeof Algcase>) {
        
    }
}
