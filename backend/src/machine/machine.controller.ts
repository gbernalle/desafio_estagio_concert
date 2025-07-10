import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('machine') //  /machine
export class MachineController {

  @Get() // GET /machine
  findAll() {
    return []
  }

  @Get(':id')  // GET /machine/:id
  findOne(@Param('id') id: string) {
    return {id}
  }

  @Post() // POST /machine
  create(@Body() machine: {}) {
    return machine
  }

  @Patch(':id')  // PATCH /machine/:id
  update(@Param('id') id: string, @Body() machineUpdate: {}) {
    return {id, ...machineUpdate}
  }

  @Delete(':id') // DELETE /machine/:id
  delete(@Param('id') id: string) {
    return {id}
  }
}