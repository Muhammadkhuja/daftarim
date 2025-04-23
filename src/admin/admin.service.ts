import { Injectable } from '@nestjs/common';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Admin } from './models/admin.model';

@Injectable()
export class AdminService {
  constructor(@InjectModel(Admin) private adminModel: typeof Admin) {}
  create(createAdminDto: CreateAdminDto): Promise<Admin> {
    return this.adminModel.create(createAdminDto);
  }

  findAll(): Promise<Admin[]> {
    return this.adminModel.findAll();
  }

  findOne(id: number): Promise<Admin | null> {
    return this.adminModel.findByPk(id);
  }

  async update(
    id: number,
    updateAdminDto: UpdateAdminDto
  ): Promise<Admin | null> {
    const updatetype = await this.adminModel.update(updateAdminDto, {
      where: { id },
      returning: true,
    });

    return updatetype[1][0];
  }

  async remove(id: number) {
    const removeadmin = await this.adminModel.destroy({ where: { id } });
    if (removeadmin > 0) {
      return `Yo bob ketdi krch`;
    }
    return "aqlin yetmasa nega o'chirasan a";
  }

  async findbyEmail(email: string) {
    const admin = await this.adminModel.findOne({
      where: { email },
      include: { all: true },
    });
    return admin?.dataValues;
  }
}
