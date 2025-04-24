import { IsEmail, IsNotEmpty, isString, IsString, IsStrongPassword } from "class-validator";
export class CreateAdminDto {
  @IsString()
  @IsNotEmpty()
  full_name: string;
  @IsEmail()
  email: string;

  @IsStrongPassword({
    minLength: 6,
    minUppercase: 0,
    minSymbols: 0,
    minNumbers: 0,
  })
  hashed_psaaword: string;
  refresh_token: string;
  @IsString()
  roleId: number;
  @IsString()
  is_active: boolean;
}
