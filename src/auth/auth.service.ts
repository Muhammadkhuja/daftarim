import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";

import * as bcrypt from "bcrypt";
import { UserService } from "../user/user.service";
import { JwtService } from "@nestjs/jwt";
import { User } from "../user/models/user.model";
import { CreateUserDto } from "../user/dto/create-user.dto";
import { SinginDto } from "./dto/singin.dto";
import { AdminService } from "../admin/admin.service";
import { Admin } from "../admin/models/admin.model";
import { CreateAdminDto } from "../admin/dto/create-admin.dto";

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly adminService: AdminService,
    private readonly jwtService: JwtService
  ) {}

  private async generateuserToken(user: User) {
    const payload = {
      id: user.id,
      email: user.email,
      activationLink: user.activation_link,
    };
    return { token: this.jwtService.sign(payload) };
  }
  private async generateadminToken(admin: Admin) {
    const payload = {
      id: admin.id,
      email: admin.email,
      isActive: admin.is_active,
    };
    return { token: this.jwtService.sign(payload) };
  }

  async singUpuser(createUserDto: CreateUserDto) {
    const condidate = await this.userService.findbyEmail(createUserDto.email);
    if (condidate) {
      throw new BadRequestException("yo'qolll");
    }
    const hashedPassword = await bcrypt.hash(createUserDto.hashed_psaaword, 7);
    createUserDto.hashed_psaaword = hashedPassword;
    const newUser = await this.userService.create(createUserDto);
    return newUser;
  }

  async singInuser(singinDto: SinginDto) {
    const user = await this.userService.findbyEmail(singinDto.email);
    console.log(user);
    
    if (!user) {
      throw new UnauthorizedException("tekshir nima haxto ");
    }
    const validPassword = await bcrypt.compare(
     
        singinDto.password,
      user.hashed_psaaword
    );
    if (!validPassword) {
      throw new UnauthorizedException("tekshir nima haxto ");
    }
    return this.generateuserToken(user);
  }


  async singUpadmin(createAdminDto: CreateAdminDto) {
    const condidate = await this.adminService.findbyEmail(createAdminDto.email);
    if (condidate) {
      throw new BadRequestException("yo'qolll");
    }
    const hashedPassword = await bcrypt.hash(createAdminDto.hashed_psaaword, 7);
    createAdminDto.hashed_psaaword = hashedPassword;
    const newAdmin = await this.adminService.create(createAdminDto);
    return newAdmin;
  }

  async singInadmin(singinDto: SinginDto) {
    const admin = await this.adminService.findbyEmail(singinDto.email);
    if (!admin) {
      throw new UnauthorizedException("tekshir nima haxto ");
    }

    const validPassword = await bcrypt.compare(
      singinDto.password,
      admin.hashed_psaaword
    );
    if (!validPassword) {
      throw new UnauthorizedException("tekshir nima haxto ");
    }
    return this.generateadminToken(admin);

  }
}
