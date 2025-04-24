import { IsNumber } from "class-validator";

export class CreateBlockPropertyDto {
  @IsNumber()
  blockId: number;
  @IsNumber()
  propertiesId: number;
  value: string;
}
