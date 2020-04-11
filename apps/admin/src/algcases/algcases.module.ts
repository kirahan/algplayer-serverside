import { Module } from '@nestjs/common';
import { AlgcasesController } from './algcases.controller';

@Module({
  controllers: [AlgcasesController]
})
export class AlgcasesModule {}
