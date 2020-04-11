import { Test, TestingModule } from '@nestjs/testing';
import { AlgcasesController } from './algcases.controller';

describe('Algcases Controller', () => {
  let controller: AlgcasesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AlgcasesController],
    }).compile();

    controller = module.get<AlgcasesController>(AlgcasesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
