import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreatePropertyDto {
  @IsString()
  @ApiProperty({
    example: "type",
    description: "Types",
  })
  name: string;
  @IsString()
  @ApiProperty({
    example: "bla bla bla",
    description: "Description",
  })
  description: string;
}
