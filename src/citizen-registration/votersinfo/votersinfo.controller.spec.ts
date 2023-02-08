import { Test, TestingModule } from '@nestjs/testing';
import { VotersinfoController } from './votersinfo.controller';
import { VotersinfoService } from './votersinfo.service';

describe('VotersinfoController', () => {
  let controller: VotersinfoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VotersinfoController],
      providers: [VotersinfoService],
    }).compile();

    controller = module.get<VotersinfoController>(VotersinfoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
