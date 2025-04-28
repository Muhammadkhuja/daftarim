import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TeamSpaceService } from './team_space.service';
import { CreateTeamSpaceDto } from './dto/create-team_space.dto';
import { UpdateTeamSpaceDto } from './dto/update-team_space.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags("Team Space - Jamoa maydoni")
@Controller("team-space")
export class TeamSpaceController {
  constructor(private readonly teamSpaceService: TeamSpaceService) {}

  @Post()
  @ApiOperation({ summary: "Jamoa maydoni qo'shildi" })
  create(@Body() createTeamSpaceDto: CreateTeamSpaceDto) {
    return this.teamSpaceService.create(createTeamSpaceDto);
  }

  @Get()
  @ApiOperation({ summary: "Barcha Jamoa maydoni olish" })
  findAll() {
    return this.teamSpaceService.findAll();
  }

  @Get(":id")
  @ApiOperation({ summary: "Jamoa maydoni olish" })
  findOne(@Param("id") id: string) {
    return this.teamSpaceService.findOne(+id);
  }

  @Patch(":id")
  @ApiOperation({ summary: "Jamoa maydoni taxrirlash" })
  update(
    @Param("id") id: string,
    @Body() updateTeamSpaceDto: UpdateTeamSpaceDto
  ) {
    return this.teamSpaceService.update(+id, updateTeamSpaceDto);
  }

  @Delete(":id")
  @ApiOperation({ summary: "Jamoa maydoni o'chirish" })
  remove(@Param("id") id: string) {
    return this.teamSpaceService.remove(+id);
  }
}
