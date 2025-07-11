import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MachineModule } from './machine/machine.module';
import { DatabaseModule } from './database/database.module';
import { MachineDataModule } from './machine_data/machine_data.module';
@Module({
  imports: [MachineModule, DatabaseModule, MachineDataModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
