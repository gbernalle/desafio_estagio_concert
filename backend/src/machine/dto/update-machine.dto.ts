import { CreateMachineDTO } from "./create-machine.dto";
import { PartialType } from "@nestjs/mapped-types"
 
export class UpdateMachineDTO extends PartialType(CreateMachineDTO) {}