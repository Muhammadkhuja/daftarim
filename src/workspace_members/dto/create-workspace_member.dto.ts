import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsNumber } from "class-validator";

export class CreateWorkspaceMemberDto {
  @IsNumber()
  @ApiProperty({
    example: 1,
    description: "Workspace ID",
  })
  workspace_id: number;

  @IsNumber()
  @ApiProperty({
    example: 5,
    description: "Foydalanuvchi ID",
  })
  user_id: number;

  @IsBoolean()
  @ApiProperty({
    example: true,
    description: "Admin huquqi (true/false)",
  })
  is_admin: boolean;
}
