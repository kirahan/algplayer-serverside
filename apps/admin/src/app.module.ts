import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbModule } from '@libs/db';
import { UsersModule } from './users/users.module';
import { PuzzlesModule } from './puzzles/puzzles.module';
import { PuzzlesetsModule } from './puzzlesets/puzzlesets.module';
import { CasegroupsModule } from './casegroups/casegroups.module';
import { AlgcasesModule } from './algcases/algcases.module';
import { CommonModule } from 'libs/common/src';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    CommonModule,
    UsersModule,
    PuzzlesModule,
    PuzzlesetsModule,
    CasegroupsModule,
    AlgcasesModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
