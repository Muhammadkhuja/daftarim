import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateRoleDto {
  @IsString()
  @ApiProperty({
    example: "name",
    description: "name",
  })
  name: string;
  @IsString()
  @ApiProperty({
    example: "description",
    description: "description",
  })
  description: string;
}
