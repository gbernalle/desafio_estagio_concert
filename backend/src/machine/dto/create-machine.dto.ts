import { IsEnum, IsNotEmpty, IsString } from "class-validator";

export class CreateMachineDTO {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  location: string;

  @IsEnum(["Operando","Parada para manutenção", "Desligada"], {
    message: 'Valid status required'
  })
  status: "Operando" | "Parada para manutenção" | "Desligada";
}