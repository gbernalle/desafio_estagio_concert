import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { MachineService } from './machine.service';

@Controller('machine') //  /machine
export class MachineController {

  constructor(private readonly machineService: MachineService) {}

  @Get() // GET /machine or /machine?status=value
  findAll(@Query('status') status?:'Operando' | 'Parada para manutencao' | 'Desligada') {
    return this.machineService.findAll(status)
  }

  @Get(':id')  // GET /machine/:id
  findOne(@Param('id') id: string) {
    return this.machineService.findOne(+id)
  }

  @Post() // POST /machine
  create(@Body() machine: {
    name: string,
    email: string,
    location: string,
    status: 'Operando' | 'Parada para manutencao' | 'Desligada'}) {
    return this.machineService.create(machine)
  }

  @Patch(':id')  // PATCH /machine/:id
  update(@Param('id') id: string, @Body() machineUpdate: {
    location: string,
    status: 'Operando' | 'Parada para manutencao' | 'Desligada'
  }) {
    return this.machineService.update(+id,machineUpdate)
  }

  @Delete(':id') // DELETE /machine/:id
  delete(@Param('id') id: string) {
    return this.machineService.delete(+id)
  }
}