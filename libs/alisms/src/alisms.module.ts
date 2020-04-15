import { Module } from '@nestjs/common';
import { AlismsService } from './alisms.service';

@Module({
  providers: [AlismsService],
  exports: [AlismsService],
})
export class AlismsModule {}
