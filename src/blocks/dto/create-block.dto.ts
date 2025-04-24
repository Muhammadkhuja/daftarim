import { ApiProperty } from "@nestjs/swagger";
import { IsNumber } from "class-validator";

export class CreateBlockDto {
  @IsNumber()
  @ApiProperty({
    example: "1",
    description: "Type Id",
  })
  typeId: number;

  @ApiProperty({
    example: "1",
    description: "Kim tomonid (id raqami)",
  })
  @IsNumber()
  created_by: number;
  @IsNumber()
  @ApiProperty({
    example: "1",
    description: "Qaysi biridan ?",
  })
  parent: number;
  @IsNumber()
  @ApiProperty({
    example: "1",
    description: "Index raqami",
  })
  order_index: number;
}
