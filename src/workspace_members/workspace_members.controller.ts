import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WorkspaceMembersService } from './workspace_members.service';
import { CreateWorkspaceMemberDto } from './dto/create-workspace_member.dto';
import { UpdateWorkspaceMemberDto } from './dto/update-workspace_member.dto';
import { ApiOperation } from '@nestjs/swagger';

@Controller("workspace-members - ish maydoni a'zolari")
export class WorkspaceMembersController {
  constructor(
    private readonly workspaceMembersService: WorkspaceMembersService
  ) {}

  @Post()
  @ApiOperation({ summary: "workspace-members qo'shish" })
  create(@Body() createWorkspaceMemberDto: CreateWorkspaceMemberDto) {
    return this.workspaceMembersService.create(createWorkspaceMemberDto);
  }

  @Get()
  @ApiOperation({ summary: "barcha workspace-members olish" })
  findAll() {
    return this.workspaceMembersService.findAll();
  }

  @Get(":id")
  @ApiOperation({ summary: "workspace-members olish" })
  findOne(@Param("id") id: string) {
    return this.workspaceMembersService.findOne(+id);
  }

  @Patch(":id")
  @ApiOperation({ summary: "workspace-members taxrirlash" })
  update(
    @Param("id") id: string,
    @Body() updateWorkspaceMemberDto: UpdateWorkspaceMemberDto
  ) {
    return this.workspaceMembersService.update(+id, updateWorkspaceMemberDto);
  }

  @Delete(":id")
  @ApiOperation({ summary: "workspace-members o'chirish" })
  remove(@Param("id") id: string) {
    return this.workspaceMembersService.remove(+id);
  }
}
