import { Injectable } from '@nestjs/common';
import { CreateWorkspaceDto } from './dto/create-workspace.dto';
import { UpdateWorkspaceDto } from './dto/update-workspace.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Workspace } from './models/workspace.model';

@Injectable()
export class WorkspaceService {
  constructor(
    @InjectModel(Workspace) private workspaceModel: typeof Workspace
  ) {}
  create(createWorkspaceDto: CreateWorkspaceDto): Promise<Workspace> {
    return this.workspaceModel.create(createWorkspaceDto);
  }

  findAll(): Promise<Workspace[]> {
    return this.workspaceModel.findAll();
  }

  findOne(id: number): Promise<Workspace | null> {
    return this.workspaceModel.findByPk(id);
  }

  async update(
    id: number,
    updateWorkspaceDto: UpdateWorkspaceDto
  ): Promise<Workspace | null> {
    const updateworkspace = await this.workspaceModel.update(
      updateWorkspaceDto,
      {
        where: { id },
        returning: true,
      }
    );

    return updateworkspace[1][0];
  }

  async remove(id: number) {
    const removedworkspace = await this.workspaceModel.destroy({ where: { id } });
    if (removedworkspace > 0) {
      return `Yo bob ketdi krch`;
    }
    return "aqlin yetmasa nega o'chirasan a";
  }
}
