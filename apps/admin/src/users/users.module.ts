import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { EmailModule } from '@libs/email';

@Module({
  imports: [EmailModule],
  controllers: [UsersController]
})
export class UsersModule {}
