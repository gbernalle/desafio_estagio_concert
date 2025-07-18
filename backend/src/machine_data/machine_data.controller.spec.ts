import { Test, TestingModule } from '@nestjs/testing';
import { MachineDataController } from './machine_data.controller';
import { MachineDataService } from './machine_data.service';

describe('MachineDataController', () => {
  let controller: MachineDataController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MachineDataController],
      providers: [MachineDataService],
    }).compile();

    controller = module.get<MachineDataController>(MachineDataController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
