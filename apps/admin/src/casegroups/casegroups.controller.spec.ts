import { Test, TestingModule } from '@nestjs/testing';
import { CasegroupsController } from './casegroups.controller';

describe('Casegroups Controller', () => {
  let controller: CasegroupsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CasegroupsController],
    }).compile();

    controller = module.get<CasegroupsController>(CasegroupsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
