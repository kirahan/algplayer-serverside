import { Test, TestingModule } from '@nestjs/testing';
import { AliossService } from './alioss.service';

describe('AliossService', () => {
  let service: AliossService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AliossService],
    }).compile();

    service = module.get<AliossService>(AliossService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
