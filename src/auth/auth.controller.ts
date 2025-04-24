import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { SinginDto } from './dto/singin.dto';
import { CreateAdminDto } from '../admin/dto/create-admin.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags("Authentication - Autentifikatsiya")
@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("singup_user")
  @ApiOperation({ summary: "user sing up" })
  signUp(@Body() createUserDto: CreateUserDto) {
    return this.authService.singUpuser(createUserDto);
  }

  @Post("singin_user")
  @ApiOperation({ summary: "user sing in" })
  singInuser(@Body() singinDto: SinginDto) {
    return this.authService.singInuser(singinDto);
  }

  @Post("singup_admin")
  @ApiOperation({ summary: "admin sing up" })
  singUpadmin(@Body() createAdminDto: CreateAdminDto) {
    return this.authService.singUpadmin(createAdminDto);
  }

  @Post("singin_admin")
  @ApiOperation({ summary: "admin sing in" })
  singInadmin(@Body() singinDto: SinginDto) {
    return this.authService.singInadmin(singinDto);
  }
}
