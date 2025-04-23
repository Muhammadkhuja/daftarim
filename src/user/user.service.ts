import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './models/user.model';
@Injectable()
export class UserService {
  constructor(@InjectModel(User) private userModel: typeof User) {}
  create(createUserDto: CreateUserDto): Promise<User> {
    return this.userModel.create(createUserDto);
  }

  findAll(): Promise<User[]> {
    return this.userModel.findAll();
  }

  findOne(id: number): Promise<User | null> {
    return this.userModel.findByPk(id);
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<User | null> {
    const updateUser = await this.userModel.update(updateUserDto, {
      where: { id },
      returning: true,
    });

    return updateUser[1][0];
  }

  async remove(id: number) {
    const removeadmin = await this.userModel.destroy({ where: { id } });
    if (removeadmin > 0) {
      return `Yo bob kedi krch`;
    }
    return "aqlin yetmasa nega o'chirasan a";
  }

  async findbyEmail(email: string) {
    const user = await this.userModel.findOne({
      where: { email },
      include: {all: true}
    });
    return user?.dataValues;
  }
}
