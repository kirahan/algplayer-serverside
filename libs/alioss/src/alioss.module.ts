import { Module } from '@nestjs/common';
import { AliossService } from './alioss.service';

@Module({
  providers: [AliossService],
  exports: [AliossService],
})
export class AliossModule {}
