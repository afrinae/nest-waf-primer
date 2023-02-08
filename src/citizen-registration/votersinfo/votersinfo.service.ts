import { Injectable } from '@nestjs/common';
import { CreateVotersinfoDto } from './dto/create-votersinfo.dto';
import { UpdateVotersinfoDto } from './dto/update-votersinfo.dto';

@Injectable()
export class VotersinfoService {
  create(createVotersinfoDto: CreateVotersinfoDto) {
    return 'This action adds a new votersinfo';
  }

  findAll() {
    return `This action returns all votersinfo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} votersinfo`;
  }

  update(id: number, updateVotersinfoDto: UpdateVotersinfoDto) {
    return `This action updates a #${id} votersinfo`;
  }

  remove(id: number) {
    return `This action removes a #${id} votersinfo`;
  }
}
