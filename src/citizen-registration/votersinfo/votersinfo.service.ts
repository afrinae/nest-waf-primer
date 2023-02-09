import { Injectable } from '@nestjs/common';
import { CreateVotersinfoDto } from './dto/create-votersinfo.dto';
import { UpdateVotersinfoDto } from './dto/update-votersinfo.dto';
import { Votersinfo} from './entities/votersinfo.entity';

@Injectable()
export class VotersinfoService {
  create(createVotersinfoDto: CreateVotersinfoDto) {
    return 'This action adds a new voters-info';
  }
  
  findAll() {
    return `This action returns all voters-info`;
  }
  
  findOne(id: number) {
    return `This action returns a #${id} voters-info`;
  }
  
  update(id: number, updateVotersinfoDto: UpdateVotersinfoDto) {
    return `This action updates a #${id} voters-info`;
  }
  
  remove(id: number) {
    return `This action removes a #${id} voters-info`;
  }
}
