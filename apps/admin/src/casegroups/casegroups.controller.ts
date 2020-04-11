import { Controller } from '@nestjs/common';
import {Crud} from 'nestjs-mongoose-crud'
import { ApiTags } from '@nestjs/swagger';
import { InjectModel } from 'nestjs-typegoose';
import { Casegroup } from '@libs/db/models/casegroup.model';
import { ReturnModelType } from '@typegoose/typegoose';



@Crud({
    model: Casegroup
})


@ApiTags('情况group集合')
@Controller('casegroups')
export class CasegroupsController {
    constructor(@InjectModel(Casegroup) private readonly model: ReturnModelType<typeof Casegroup>) {
        
    }
}
