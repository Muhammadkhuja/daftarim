import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WorkspaceService } from './workspace.service';
import { CreateWorkspaceDto } from './dto/create-workspace.dto';
import { UpdateWorkspaceDto } from './dto/update-workspace.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags("Workspace - ish maydoni")
@Controller("workspace")
export class WorkspaceController {
  constructor(private readonly workspaceService: WorkspaceService) {}

  @Post()
  @ApiOperation({ summary: "Ishchi maydoni qo'shiladi" })
  create(@Body() createWorkspaceDto: CreateWorkspaceDto) {
    return this.workspaceService.create(createWorkspaceDto);
  }

  @Get()
  @ApiOperation({ summary: " Barcha Ishchi maydonini olish" })
  findAll() {
    return this.workspaceService.findAll();
  }

  @Get(":id")
  @ApiOperation({ summary: "Ishchi maydoni olish" })
  findOne(@Param("id") id: string) {
    return this.workspaceService.findOne(+id);
  }

  @Patch(":id")
  @ApiOperation({ summary: "Ishchi maydoni taxrirlash" })
  update(
    @Param("id") id: string,
    @Body() updateWorkspaceDto: UpdateWorkspaceDto
  ) {
    return this.workspaceService.update(+id, updateWorkspaceDto);
  }

  @Delete(":id")
  @ApiOperation({ summary: "Ishchi maydoni o'chirish" })
  remove(@Param("id") id: string) {
    return this.workspaceService.remove(+id);
  }
}
