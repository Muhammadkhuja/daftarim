import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, IsString, IsNumber } from "class-validator";

export class CreateTeamSpaceDto {
  @IsString()
  @ApiProperty({
    example: "Development Team",
    description: "Team Space nomi",
  })
  name: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    example: "Bu team dasturchilar uchun",
    description: "Team Space haqida qisqacha ma'lumot",
  })
  description: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    example: "dev-team-icon.png",
    description: "Team Space uchun ikon rasm nomi yoki URL",
  })
  icon?: string;

  @IsNumber()
  @ApiProperty({
    example: 1,
    description: "Qaysi workspace ga tegishli",
  })
  workspace_id: number;

  @IsNumber()
  @ApiProperty({
    example: 5,
    description: "Team Space ni yaratgan user ID",
  })
  created_by: number;

  @IsNumber()
  @ApiProperty({
    example: 2,
    description: "Team Space uchun permission ID",
  })
  permission_id: number;
}
