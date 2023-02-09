import { Module } from '@nestjs/common';
import { VotersinfoService } from './votersinfo.service';
import { VotersinfoController } from './votersinfo.controller';
import { TypeOrmModule } from '@nestjs/typeorm'; 
import { Votersinfo } from './entities/votersinfo.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Votersinfo])],
  controllers: [VotersinfoController],
  providers: [VotersinfoService]
})
export class VotersinfoModule {}
