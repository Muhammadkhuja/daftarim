import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class CreateBlockPropertyDto {
  @IsNumber()
  @ApiProperty({
    example: "1",
    description: "Block id raqami",
  })
  blockId: number;
  @IsNumber()
  @ApiProperty({
    example: "1",
    description: "Block id raqami",
  })
  propertiesId: number;
  @IsString()
  @ApiProperty({
    example: "somethink",
    description: "Value",
  })
  value: string;
}
