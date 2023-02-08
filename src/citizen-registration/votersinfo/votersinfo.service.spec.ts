import { Test, TestingModule } from '@nestjs/testing';
import { VotersinfoService } from './votersinfo.service';

describe('VotersinfoService', () => {
  let service: VotersinfoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VotersinfoService],
    }).compile();

    service = module.get<VotersinfoService>(VotersinfoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
