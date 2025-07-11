import { Injectable } from '@nestjs/common';
import { Prisma, Status } from 'generated/prisma';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class MachineDataService {
  constructor(private readonly databaseService: DatabaseService){ }
    
  async create(createMachineDatumDto: Prisma.Machine_DataCreateInput) {
    return this.databaseService.machine_Data.create({
      data: createMachineDatumDto
    })
  }

  async findAll(status?: Status) {
    if (status)
      return this.databaseService.machine_Data.findMany({
      where: {
        status,
      }
    })
    return this.databaseService.machine_Data.findMany()
  }

  async findOne(id: number) {
    return this.databaseService.machine_Data.findUnique({
      where: {
        id,
      }
    })
  }

  async update(id: number, updateMachineDatumDto: Prisma.Machine_DataUpdateInput) {
    return this.databaseService.machine_Data.update({
      where: {
        id,
      },
      data: updateMachineDatumDto,
    })
  }

  async remove(id: number) {
    return this.databaseService.machine_Data.delete({
      where: {
        id,
      }
    })
  }
}
