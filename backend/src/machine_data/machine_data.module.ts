import { Module } from '@nestjs/common';
import { MachineDataService } from './machine_data.service';
import { MachineDataController } from './machine_data.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [MachineDataController],
  providers: [MachineDataService],
})
export class MachineDataModule { }
