import { Test, TestingModule } from '@nestjs/testing';
import { PuzzlesetsController } from './puzzlesets.controller';

describe('Puzzlesets Controller', () => {
  let controller: PuzzlesetsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PuzzlesetsController],
    }).compile();

    controller = module.get<PuzzlesetsController>(PuzzlesetsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
