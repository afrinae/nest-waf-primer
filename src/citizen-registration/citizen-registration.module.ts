import { Module } from '@nestjs/common';
import { CitizensModule } from './citizens/citizens.module';
import { VotersinfoModule } from './votersinfo/votersinfo.module';

@Module({
  imports: [CitizensModule, VotersinfoModule]
})
export class CitizenRegistrationModule {}
