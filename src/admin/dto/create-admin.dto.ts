import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, isString, IsString, IsStrongPassword } from "class-validator";
export class CreateAdminDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: "Kimdur Palonchiyev",
    description: "Toliq isim familiya",
  })
  full_name: string;
  @IsEmail()
  @ApiProperty({
    example: "kimdur@mail.com",
    description: "foydalanuvchining email",
  })
  email: string;

  @IsStrongPassword({
    minLength: 6,
    minUppercase: 0,
    minSymbols: 0,
    minNumbers: 0,
  })
  @ApiProperty({
    example: "kim123",
    description: "Foydalanuchi paroli",
  })
  hashed_psaaword: string;
  refresh_token: string;
  @IsString()
  @ApiProperty({
    example: "1",
    description: "Foydalanuvchi roli",
  })
  roleId: number;
  @IsString()
  @ApiProperty({
    example: "false",
    description: "Foydalanuvchi faolligi",
  })
  is_active: boolean;
}
