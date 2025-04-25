import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  UseInterceptors,
  UploadedFile,
} from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "../guards/jwtauth.guard";
import { JwtSelfUserGuard } from "../guards/jwtselfuser.guard";
import { FileInterceptor } from "@nestjs/platform-express";
import { User } from "./models/user.model";

@ApiTags("User-Foydalanuchi")
@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiOperation({ summary: "Foydalanuvchi qo'shish" })
  @Post()
  @UseInterceptors(FileInterceptor("photo"))
  create(
    @Body() createUserDto: CreateUserDto,
    @UploadedFile() photo: any
  ): Promise<User> {
    return this.userService.create(createUserDto, photo);
  }

  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: "Barcha foydalanuvchilarni olish" })
  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @UseGuards(JwtSelfUserGuard)
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: "Foydalanuvchini olish" })
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.userService.findOne(+id);
  }

  @ApiOperation({ summary: "Foydalanuvchini taxrirlash" })
  @Patch(":id")
  update(@Param("id") id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @ApiOperation({ summary: "Foydalanuvchini o'chrish " })
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.userService.remove(+id);
  }
}
