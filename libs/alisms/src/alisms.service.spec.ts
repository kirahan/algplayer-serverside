import { Test, TestingModule } from '@nestjs/testing';
import { AlismsService } from './alisms.service';

describe('AlismsService', () => {
  let service: AlismsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AlismsService],
    }).compile();

    service = module.get<AlismsService>(AlismsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
