import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsEmpty, IsString, IsStrongPassword } from "class-validator";

export class CreateUserDto {
  @ApiProperty({
    example: "Kim",
    description: "Foydalanuvchining ismi",
  })
  @IsString()
  first_name: string;
  @ApiProperty({
    example: "Palonchi",
    description: "Foydalanuvchining familiyasi",
  })
  @IsString()
  last_name: string;

  @IsEmail()
  @ApiProperty({
    example: "kim@mail.com",
    description: "Foydalanuvchining email",
  })
  email: string;

  @IsStrongPassword({
    minLength: 6,
    minUppercase: 0,
    minSymbols: 0,
    minNumbers: 0,
  })
  @ApiProperty({
    example: "password",
    description: "Foydalanuvchining paro'li",
  })
  hashed_psaaword: string;
  @ApiProperty({
    example: "photo",
    description: "Foydalanuvchining rasmi",
  })
  photo: string;

  @ApiProperty({
    example: "null",
    description: "Refresh to'ken",
  })
  refresh_token: string;
}
