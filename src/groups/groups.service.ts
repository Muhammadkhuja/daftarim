import { Injectable } from '@nestjs/common';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Group } from './models/group.model';

@Injectable()
export class GroupsService {
  constructor(@InjectModel(Group) private groupModel: typeof Group) {}
  create(createGroupDto: CreateGroupDto): Promise<Group> {
    return this.groupModel.create(createGroupDto);
  }

  findAll(): Promise<Group[]> {
    return this.groupModel.findAll();
  }

  findOne(id: number): Promise<Group | null> {
    return this.groupModel.findByPk(id);
  }

  async update(
    id: number,
    updateGroupDto: UpdateGroupDto
  ): Promise<Group | null> {
    const updateGroup = await this.groupModel.update(UpdateGroupDto, {
      where: { id },
      returning: true,
    });
    return updateGroup[1][0];
  }

  async remove(id: number) {
    const removegroup = await this.groupModel.destroy({ where: { id } });
    if (removegroup > 0) {
      return `Yo bob kedi krch`;
    }
    return "aqlin yetmasa nega o'chirasan a";
  }
}
