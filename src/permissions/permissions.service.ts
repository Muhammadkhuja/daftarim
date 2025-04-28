import { Injectable } from '@nestjs/common';
import { CreatePermissionDto } from './dto/create-permission.dto';
import { UpdatePermissionDto } from './dto/update-permission.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Permission } from './models/permission.entity';

@Injectable()
export class PermissionsService {
  constructor(
    @InjectModel(Permission) private permissionModel: typeof Permission
  ) {}
  create(createPermissionDto: CreatePermissionDto): Promise<Permission> {
    return this.permissionModel.create(createPermissionDto);
  }

  findAll(): Promise<Permission[]> {
    return this.permissionModel.findAll();
  }

  findOne(id: number): Promise<Permission | null> {
    return this.permissionModel.findByPk(id);
  }

  async update(
    id: number,
    updatePermissionDto: UpdatePermissionDto
  ): Promise<Permission | null> {
    const updatepromisse = await this.permissionModel.update(
      updatePermissionDto,
      {
        where: { id },
        returning: true,
      }
    );

    return updatepromisse[1][0];
  }

  async remove(id: number) {
    const removepermisson = await this.permissionModel.destroy({ where: { id } });
    if (removepermisson > 0) {
      return `Yo bob ketdi krch`;
    }
    return "aqlin yetmasa nega o'chirasan a";
  }
}
