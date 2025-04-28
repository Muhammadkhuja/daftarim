import { ApiProperty } from "@nestjs/swagger";
import { IsNumber } from "class-validator";

export class CreateGroupMemberDto {
  @IsNumber()
  @ApiProperty({
    example: 1,
    description: "Guruh ID",
  })
  group_id: number;

  @IsNumber()
  @ApiProperty({
    example: 7,
    description: "Foydalanuvchi ID",
  })
  user_id: number;
}
