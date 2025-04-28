import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PermissionsService } from './permissions.service';
import { CreatePermissionDto } from './dto/create-permission.dto';
import { UpdatePermissionDto } from './dto/update-permission.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';


@ApiTags("Permission ruxsat")
@Controller("permissions")
export class PermissionsController {
  constructor(private readonly permissionsService: PermissionsService) {}

  @Post()
  @ApiOperation({ summary: "Permission qo'shildi" })
  create(@Body() createPermissionDto: CreatePermissionDto) {
    return this.permissionsService.create(createPermissionDto);
  }

  @Get()
  @ApiOperation({ summary: "barcha Permission olish" })
  findAll() {
    return this.permissionsService.findAll();
  }

  @Get(":id")
  @ApiOperation({ summary: "Permission olish" })
  findOne(@Param("id") id: string) {
    return this.permissionsService.findOne(+id);
  }

  @Patch(":id")
  @ApiOperation({ summary: "Permission taxrirlash" })
  update(
    @Param("id") id: string,
    @Body() updatePermissionDto: UpdatePermissionDto
  ) {
    return this.permissionsService.update(+id, updatePermissionDto);
  }

  @Delete(":id")
  @ApiOperation({ summary: "Permission o'chirish" })
  remove(@Param("id") id: string) {
    return this.permissionsService.remove(+id);
  }
}
