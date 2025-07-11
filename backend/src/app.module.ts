import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MachineModule } from './machine/machine.module';
import { DatabaseModule } from './database/database.module';
@Module({
  imports: [MachineModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
