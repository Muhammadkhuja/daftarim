import { IsEmail, IsEmpty, IsString, IsStrongPassword } from "class-validator";

export class CreateUserDto {
  @IsString()
  first_name: string;
  @IsString()
  last_name: string;
  @IsEmail()
  email: string;
  @IsStrongPassword({
    minLength: 6,
    minUppercase: 0,
    minSymbols: 0,
    minNumbers: 0,
  })
  hashed_psaaword: string;
  @IsString()
  photo: string;
  refresh_token: string;
  activation_link: string;
}
