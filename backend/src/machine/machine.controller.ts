import { Body, Controller, Delete, Get, Param, Patch, Post, Query, ParseIntPipe, ValidationPipe } from '@nestjs/common';
import { MachineService } from './machine.service';
import { CreateMachineDTO } from './dto/create-machine.dto';
import { UpdateMachineDTO } from './dto/update-machine.dto';

@Controller('machine') //  /machine
export class MachineController {

  constructor(private readonly machineService: MachineService) {}

  @Get() // GET /machine or /machine?status=value
  findAll(@Query('status') status?:'Operando' | 'Parada para manutenção' | 'Desligada') {
    return this.machineService.findAll(status)
  }

  @Get(':id')  // GET /machine/:id
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.machineService.findOne(id)
  }

  @Post() // POST /machine
  create(@Body(ValidationPipe) createMachineDTO: CreateMachineDTO) {
    return this.machineService.create(createMachineDTO)
  }

  @Patch(':id')  // PATCH /machine/:id
  update(@Param('id', ParseIntPipe) id: number, @Body(ValidationPipe) updateMachineDto: UpdateMachineDTO) {
    return this.machineService.update(id, updateMachineDto)
  }

  @Delete(':id') // DELETE /machine/:id
  delete(@Param('id',ParseIntPipe) id: number) {
    return this.machineService.delete(id)
  }
}