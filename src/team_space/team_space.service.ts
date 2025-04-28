import { Injectable } from '@nestjs/common';
import { CreateTeamSpaceDto } from './dto/create-team_space.dto';
import { UpdateTeamSpaceDto } from './dto/update-team_space.dto';
import { InjectModel } from '@nestjs/sequelize';
import { TeamSpace } from './models/team_space.model';

@Injectable()
export class TeamSpaceService {
  constructor(
    @InjectModel(TeamSpace) private teamSpaceModel: typeof TeamSpace
  ) {}
  create(createTeamSpaceDto: CreateTeamSpaceDto): Promise<TeamSpace> {
    return this.teamSpaceModel.create(createTeamSpaceDto);
  }

  findAll(): Promise<TeamSpace[]> {
    return this.teamSpaceModel.findAll();
  }

  findOne(id: number): Promise<TeamSpace|null> {
    return this.teamSpaceModel.findByPk(id)
  }

  async update(
    id: number,
    updateTeamSpaceDto: UpdateTeamSpaceDto
  ): Promise<TeamSpace | null> {
    const updatetype = await this.teamSpaceModel.update(updateTeamSpaceDto, {
      where: { id },
      returning: true,
    });

    return updatetype[1][0];
  }

  async remove(id: number) {
    const removetemaspace = await this.teamSpaceModel.destroy({ where: { id } });
    if (removetemaspace > 0) {
      return `Yo bob ketdi krch`;
    }
    return "aqlin yetmasa nega o'chirasan a";
  }
}
