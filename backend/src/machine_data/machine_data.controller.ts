import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { MachineDataService } from './machine_data.service';
import { Prisma, Status } from 'generated/prisma';

@Controller('machine-data')
export class MachineDataController {
  constructor(private readonly machineDataService: MachineDataService) {}

  @Post()
  create(@Body() createMachineDatumDto: Prisma.Machine_DataCreateInput) {
    return this.machineDataService.create(createMachineDatumDto);
  }

  @Get()
  findAll(@Query('status') status?: Status) {
    return this.machineDataService.findAll(status);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.machineDataService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMachineDatumDto: Prisma.Machine_DataUpdateInput) {
    return this.machineDataService.update(+id, updateMachineDatumDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.machineDataService.remove(+id);
  }
}
