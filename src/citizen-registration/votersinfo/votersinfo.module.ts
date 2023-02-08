import { Module } from '@nestjs/common';
import { VotersinfoService } from './votersinfo.service';
import { VotersinfoController } from './votersinfo.controller';

@Module({
  controllers: [VotersinfoController],
  providers: [VotersinfoService]
})
export class VotersinfoModule {}
