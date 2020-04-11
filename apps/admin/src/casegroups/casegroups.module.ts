import { Module } from '@nestjs/common';
import { CasegroupsController } from './casegroups.controller';

@Module({
  controllers: [CasegroupsController]
})
export class CasegroupsModule {}
