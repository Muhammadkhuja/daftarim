import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TeamSpaceMembersService } from './team_space_members.service';
import { CreateTeamSpaceMemberDto } from './dto/create-team_space_member.dto';
import { UpdateTeamSpaceMemberDto } from './dto/update-team_space_member.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags("Team space members - jamoa maydoni a'zolari")
@Controller("team-space-members")
export class TeamSpaceMembersController {
  constructor(
    private readonly teamSpaceMembersService: TeamSpaceMembersService
  ) {}

  @Post()
  @ApiOperation({ summary: "Team space members qo'shildi" })
  create(@Body() createTeamSpaceMemberDto: CreateTeamSpaceMemberDto) {
    return this.teamSpaceMembersService.create(createTeamSpaceMemberDto);
  }

  @Get()
  @ApiOperation({ summary: "Barcha Team space members olish" })
  findAll() {
    return this.teamSpaceMembersService.findAll();
  }

  @Get(":id")
  @ApiOperation({ summary: "Team space members olish" })
  findOne(@Param("id") id: string) {
    return this.teamSpaceMembersService.findOne(+id);
  }

  @Patch(":id")
  @ApiOperation({ summary: "Team space members taxrirlash" })
  update(
    @Param("id") id: string,
    @Body() updateTeamSpaceMemberDto: UpdateTeamSpaceMemberDto
  ) {
    return this.teamSpaceMembersService.update(+id, updateTeamSpaceMemberDto);
  }

  @Delete(":id")
  @ApiOperation({ summary: "Team space members o'chrish" })
  remove(@Param("id") id: string) {
    return this.teamSpaceMembersService.remove(+id);
  }
}
