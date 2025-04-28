import { Injectable } from '@nestjs/common';
import { CreateTeamSpaceMemberDto } from './dto/create-team_space_member.dto';
import { UpdateTeamSpaceMemberDto } from './dto/update-team_space_member.dto';
import { InjectModel } from '@nestjs/sequelize';
import { TeamSpaceMember } from './models/team_space_member.model';

@Injectable()
export class TeamSpaceMembersService {
  constructor(
    @InjectModel(TeamSpaceMember)
    private teamspacememebersModel: typeof TeamSpaceMember
  ) {}
  create(
    createTeamSpaceMemberDto: CreateTeamSpaceMemberDto
  ): Promise<TeamSpaceMember> {
    return this.teamspacememebersModel.create(createTeamSpaceMemberDto);
  }

  findAll(): Promise<TeamSpaceMember[]> {
    return this.teamspacememebersModel.findAll();
  }

  findOne(id: number): Promise<TeamSpaceMember|null> {
    return this.teamspacememebersModel.findByPk(id);
  }
  async update(
    id: number,
    updateTeamSpaceMemberDto: UpdateTeamSpaceMemberDto
  ): Promise<TeamSpaceMember | null> {
    const updateTeamSpaceMember = await this.teamspacememebersModel.update(
      updateTeamSpaceMemberDto,
      { where: { id }, returning: true }
    );
    return updateTeamSpaceMember[1][0];
  }

  async remove(id: number) {
    const removeTeamspacemembers = await this.teamspacememebersModel.destroy({
      where: { id },
    });
    if (removeTeamspacemembers > 0) {
      return `Yo bob kedi krch`;
    }
    return "aqlin yetmasa nega o'chirasan a";
  }
}
