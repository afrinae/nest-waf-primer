import { Module } from '@nestjs/common';
import { CitizensService } from './citizens.service';
import { CitizensController } from './citizens.controller';
import { Citizen } from './entities/citizen.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Votersinfo } from '../votersinfo/entities/votersinfo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Citizen, Votersinfo])],
  controllers: [CitizensController],
  providers: [CitizensService]
})
export class CitizensModule {}
