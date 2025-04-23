import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { SinginDto } from './dto/singin.dto';
import { CreateAdminDto } from '../admin/dto/create-admin.dto';

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("singup_user")
  signUp(@Body() createUserDto: CreateUserDto) {
    return this.authService.singUpuser(createUserDto);
  }

  @Post("singin_user")
  singInuser(@Body() singinDto: SinginDto) {
    return this.authService.singInuser(singinDto);
  }

  @Post("singup_admin")
  singUpadmin(@Body() createAdminDto: CreateAdminDto) {
    return this.authService.singUpadmin(createAdminDto);
  }

  @Post("singin_admin")
  singInadmin(@Body() singinDto: SinginDto) {
    return this.authService.singInadmin(singinDto);
  }
}
