import { Injectable } from '@nestjs/common';
import { CreateMachineDTO } from './dto/create-machine.dto';
import { UpdateMachineDTO } from './dto/update-machine.dto';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class MachineService {
  private machine = [
    {
      "id": 1,
      "name": "firstMachine",
	    "location": "Belo Horizonte MG, BR",
	    "status": "Operando"	
    },
    {
      "id": 2,
      "name": "secondMachine",
	    "location": "Belo Horizonte MG, BR",
	    "status": "Parada para manutenção"	
    },
    {
      "id": 3,
      "name": "thirdMachine",
	    "location": "Belo Horizonte MG, BR",
	    "status": "Desligada"	
    },
    {
      "id": 4,
      "name": "fourthMachine",
	    "location": "Belo Horizonte MG, BR",
	    "status": "Operando"	
    }
  ]

  findAll(status?: 'Operando' | 'Parada para manutenção' | 'Desligada') {
    if (status) {
      const statusArray = this.machine.filter(machine => machine.status === status)

      if (statusArray.length === 0) throw new NotFoundException('Machine status Not Found!')
      
      return statusArray
    }
    return this.machine
  }

  findOne(id: number) {
    const mach = this.machine.find(machine => machine.id === id)

    if(!mach) throw new NotFoundException('Machine not found!')

    return mach
  }

  create(createMachineDTO: CreateMachineDTO) {
    const machineByHighestId = [...this.machine].sort((a, b) => b.id - a.id)
    const newMachine = {
      id: machineByHighestId[0].id + 1,
      ...createMachineDTO
    }
    this.machine.push(newMachine)
    return newMachine
  }

  update(id: number,
    updateMachineDTO: UpdateMachineDTO
  ) {
    this.machine = this.machine.map(mach => {
      if (mach.id === id) {
        return {...mach, ...updateMachineDTO}
      }
      return mach
    })
    return this.findOne(id)
  }

  delete(id: number) {
    const removeMachine = this.findOne(id)

    this.machine = this.machine.filter(machine => machine.id !== id)

    return removeMachine
  }
}
