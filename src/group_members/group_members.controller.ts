import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GroupMembersService } from './group_members.service';
import { CreateGroupMemberDto } from './dto/create-group_member.dto';
import { UpdateGroupMemberDto } from './dto/update-group_member.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags("Group Members - Guruh foydalanuvchilarin")
@Controller("group-members")
export class GroupMembersController {
  constructor(private readonly groupMembersService: GroupMembersService) {}

  @Post()
  @ApiOperation({ summary: "Group Members qo'shish" })
  create(@Body() createGroupMemberDto: CreateGroupMemberDto) {
    return this.groupMembersService.create(createGroupMemberDto);
  }

  @Get()
  @ApiOperation({ summary: "Barcha Group Members olish" })
  findAll() {
    return this.groupMembersService.findAll();
  }

  @Get(":id")
  @ApiOperation({ summary: "Group Members olish" })
  findOne(@Param("id") id: string) {
    return this.groupMembersService.findOne(+id);
  }

  @Patch(":id")
  @ApiOperation({ summary: "Group Members taxrirlash" })
  update(
    @Param("id") id: string,
    @Body() updateGroupMemberDto: UpdateGroupMemberDto
  ) {
    return this.groupMembersService.update(+id, updateGroupMemberDto);
  }

  @Delete(":id")
  @ApiOperation({ summary: "Group Members o'chrish" })
  remove(@Param("id") id: string) {
    return this.groupMembersService.remove(+id);
  }
}
