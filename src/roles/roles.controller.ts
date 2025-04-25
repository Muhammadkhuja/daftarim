import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RolesService } from './roles.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags("Roles - rollar")
@Controller("roles")
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}

  @Post()
  @ApiOperation({ summary: "Rol qo'shish" })
  create(@Body() createRoleDto: CreateRoleDto) {
    return this.rolesService.create(createRoleDto);
  }

  @Get()
  @ApiOperation({ summary: "Barcha rollarni olish" })
  findAll() {
    return this.rolesService.findAll();
  }

  @Get(":id")
  @ApiOperation({ summary: "Rolni ID bo'yicha olish" })
  findOne(@Param("id") id: string) {
    return this.rolesService.findOne(+id);
  }

  @Patch(":id")
  @ApiOperation({ summary: "Rolni yangilash" })
  update(@Param("id") id: string, @Body() updateRoleDto: UpdateRoleDto) {
    return this.rolesService.update(+id, updateRoleDto);
  }

  @Delete(":id")
  @ApiOperation({ summary: "Rolni o'chirish" })
  remove(@Param("id") id: string) {
    return this.rolesService.remove(+id);
  }
}
