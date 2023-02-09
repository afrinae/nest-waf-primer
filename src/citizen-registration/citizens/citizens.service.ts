import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'; 
import { Repository } from 'typeorm';
import { UpdateVotersinfoDto } from '../votersinfo/dto/update-votersinfo.dto';
import { CreateCitizenDto } from './dto/create-citizen.dto';
import { UpdateCitizenDto } from './dto/update-citizen.dto';
import { Citizen } from './entities/citizen.entity';

@Injectable()
export class CitizensService {
  constructor(
    @InjectRepository(Citizen)
    private citizensRepository: Repository<Citizen>
    ){}
  async create(createCitizenDto: CreateCitizenDto) {
    const newCitizen: Citizen = this.citizensRepository.create(createCitizenDto) 
    return this.citizensRepository.save(newCitizen);
    return 'This action adds a new citizen';
  }

  async findAll() {
    //return `This action returns all citizens`;
    return await this.citizensRepository.find();
  }

  async findOne(id: any) {
    //return `This action returns a #${id} citizen`;
    return await this.citizensRepository.findOne(id);
  }

  async update(id: number, updateVotersinfoDto: UpdateVotersinfoDto) {
    //return `This action updates a #${id} voter-info`;
    return await this.citizensRepository.update(id, updateVotersinfoDto);
  }

  async remove(id: number) {
    //return `This action removes a #${id} voter-info`;
    return await this.citizensRepository.delete(id);
  }
}