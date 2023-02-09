import { Controller, Get, Post, Body, Put, Param, Delete, Render } from '@nestjs/common';
import { CitizensService } from './citizens.service';
import { CreateCitizenDto } from './dto/create-citizen.dto';
import { UpdateCitizenDto } from './dto/update-citizen.dto';

@Controller('citizens')
export class CitizensController {
  constructor(private readonly CitizensService: CitizensService) { }

  @Get('create')
  @Render('citizens/create-citizen.html')
  createForm() {
  }

  @Post()
  create(@Body() CreateCitizenDto: CreateCitizenDto) {
    return this.CitizensService.create(CreateCitizenDto);
  }

  @Get()
  findAll() {
    return this.CitizensService.findAll();
  }
  /*@Get(':votersinfoid')
  findOne(@Param('id') id: string) {
    return this.CitizensService.findOne(+id);
  }
  
  @Put(':id')
  update(@Param('id') id: string, @Body() updateCitizenDto: UpdateCitizensDto) {
    return this.CitizensService.update(+id, updateCitizenDto);
  }
  
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.CitizensService.remove(+id);   
  }*/
}
