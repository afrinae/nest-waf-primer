import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VotersinfoService } from './votersinfo.service';
import { CreateVotersinfoDto } from './dto/create-votersinfo.dto';
import { UpdateVotersinfoDto } from './dto/update-votersinfo.dto';

@Controller('votersinfo')
export class VotersinfoController {
  constructor(private readonly votersinfoService: VotersinfoService) {}

  @Post()
  create(@Body() createVotersinfoDto: CreateVotersinfoDto) {
    return this.votersinfoService.create(createVotersinfoDto);
  }

  @Get()
  findAll() {
    return this.votersinfoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.votersinfoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVotersinfoDto: UpdateVotersinfoDto) {
    return this.votersinfoService.update(+id, updateVotersinfoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.votersinfoService.remove(+id);
  }
}
