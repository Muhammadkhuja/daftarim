import { IsNumber } from "class-validator";

export class CreateBlockDto {
  @IsNumber()
  typeId: number;
  @IsNumber()
  created_by: number;
  @IsNumber()
  parent: number;
  @IsNumber()
  order_index: number;
}
