import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsNumber } from "class-validator";

export class CreateTeamSpaceMemberDto {
  @IsNumber()
  @ApiProperty({
    example: 1,
    description: "Foydalanuvchi ID",
  })
  user_id: number;

  @IsNumber()
  @ApiProperty({
    example: 2,
    description: "Team Space ID",
  })
  team_space_id: number;

  @IsBoolean()
  @ApiProperty({
    example: true,
    description: "A'zolik holati",
  })
  is_member: boolean;
}
