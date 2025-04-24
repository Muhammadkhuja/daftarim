import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { AdminService } from './admin.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../guards/jwtauth.guard';
import { JwtSelfadminGuard } from '../guards/jwtselfadmin.guard';

@ApiTags("Admin-Administratorlar")
@Controller("admin")
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Post()
  @ApiOperation({summary: "Admin qo'shish"})
  create(@Body() createAdminDto: CreateAdminDto) {
    return this.adminService.create(createAdminDto);
  }
@UseGuards(JwtAuthGuard)
  @Get()
  @ApiOperation({summary: "Admin olish"})
  findAll() {
    return this.adminService.findAll();
  }

  @UseGuards(JwtSelfadminGuard)
  @UseGuards(JwtAuthGuard)
  @Get(":id")
  @ApiOperation({summary: "Admin id bilan olish"})
  @ApiOperation({})
  findOne(@Param("id") id: string) {
    return this.adminService.findOne(+id);
  }

  @Patch(":id")
  @ApiOperation({summary: "Adminni taxrirlash"})
  update(@Param("id") id: string, @Body() updateAdminDto: UpdateAdminDto) {
    return this.adminService.update(+id, updateAdminDto);
  }

  @Delete(":id")
  @ApiOperation({summary: "Adminni taxrirlash"})
  remove(@Param("id") id: string) {
    return this.adminService.remove(+id);
  }
}
