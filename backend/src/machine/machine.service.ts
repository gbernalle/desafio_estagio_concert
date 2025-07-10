import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

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
	    "status": "Operando"	
    },
    {
      "id": 3,
      "name": "thirdMachine",
	    "location": "Belo Horizonte MG, BR",
	    "status": "Operando"	
    },
    {
      "id": 4,
      "name": "fourthMachine",
	    "location": "Belo Horizonte MG, BR",
	    "status": "Operando"	
    }
  ]

  findAll(status?: 'Operando' | 'Parada para manutencao' | 'Desligada') {
    if (status) {
      return this.machine.filter(machine => machine.status === status)
    }
    return this.machine
  }

  findOne(id: number) {
    const mach = this.machine.find(machine => machine.id === id)

    return mach
  }

  create(machine: {
    name: string,
    email: string,
    location: string,
    status: 'Operando' | 'Parada para manutencao' | 'Desligada'
  }) {
    const machineByHighestId = [...this.machine].sort((a, b) => b.id - a.id)
    const newMachine = {
      id: machineByHighestId[0].id + 1,
      ...machine
    }
    this.machine.push(newMachine)
    return newMachine
  }

  update(id: number,
    updateMachine: {
      location: string,
      status: 'Operando' | 'Parada para manutencao' | 'Desligada'
    }
  ) {
    this.machine = this.machine.map(machine => {
      if (machine.id === id) {
        return {...machine, ...updateMachine}
      }
      return machine
    })
    return this.findOne(id)
  }

  delete(id: number) {
    const removeMachine = this.findOne(id)

    this.machine = this.machine.filter(machine => machine.id !== id)

    return removeMachine
  }
}
