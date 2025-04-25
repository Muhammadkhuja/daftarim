import { Injectable } from "@nestjs/common";
import { CreateRoleDto } from "./dto/create-role.dto";
import { UpdateRoleDto } from "./dto/update-role.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Role } from "./models/role.model";

@Injectable()
export class RolesService {
  constructor(@InjectModel(Role) private roleModel: typeof Role) {}
  async create(createRoleDto: CreateRoleDto): Promise<Role> {
    return this.roleModel.create(createRoleDto);
  }

  findAll(): Promise<Role[]> {
    return this.roleModel.findAll();
  }

  findOne(id: number): Promise<Role | null> {
    return this.roleModel.findByPk(id);
  }

 
  async update(
    id:number,
    updateRoleDto: UpdateRoleDto): Promise<Role | null>{
      const updateRole = await this.roleModel.update(UpdateRoleDto, {
        where: {id},
        returning: true,
      })

      return updateRole[1][0]
    }

  async remove(id: number) {
    const removerole = await this.roleModel.destroy({ where: { id } });
    if (removerole > 0) {
      return `Yo bob kedi krch`;
    }
    return "aqlin yetmasa nega o'chirasan a";
  }
}
