import { Module } from '@nestjs/common';
import { PuzzlesetsController } from './puzzlesets.controller';

@Module({
  controllers: [PuzzlesetsController]
})
export class PuzzlesetsModule {}
