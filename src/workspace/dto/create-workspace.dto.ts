import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class CreateWorkspaceDto {
  @IsNumber()
  @ApiProperty({
    example: "1",
    description: "created_by",
  })
  created_by: number;

  @IsString()
  @ApiProperty({
    example: "name",
    description: "name",
  })
  name: string;
  @IsString()
  @ApiProperty({
    example: "icon",
    description: "icon",
  })
  icon: string;

  @IsString()
  @ApiProperty({
    example: "category",
    description: "category",
  })
  category: string;

  @IsString()
  @ApiProperty({
    example: "management",
    description: "managemant",
  })
  management: string;
}
