import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GroupsService } from './groups.service';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';


@ApiTags("Groups - Guruhlar")
@Controller("groups")
export class GroupsController {
  constructor(private readonly groupsService: GroupsService) {}

  @Post()
  @ApiOperation({ summary: "Group qo'shish" })
  create(@Body() createGroupDto: CreateGroupDto) {
    return this.groupsService.create(createGroupDto);
  }

  @Get()
  @ApiOperation({ summary: "Barcha grouplarni olish" })
  findAll() {
    return this.groupsService.findAll();
  }

  @Get(":id")
  @ApiOperation({ summary: "Group ni ID bo'yicha olish" })
  findOne(@Param("id") id: string) {
    return this.groupsService.findOne(+id);
  }

  @Patch(":id")
  @ApiOperation({ summary: "Group ni yangilash" })
  update(@Param("id") id: string, @Body() updateGroupDto: UpdateGroupDto) {
    return this.groupsService.update(+id, updateGroupDto);
  }

  @Delete(":id")
  @ApiOperation({ summary: "Group ni o'chirish" })
  remove(@Param("id") id: string) {
    return this.groupsService.remove(+id);
  }
}
