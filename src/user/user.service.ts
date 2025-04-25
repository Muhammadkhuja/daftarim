import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { InjectModel } from "@nestjs/sequelize";
import { User } from "./models/user.model";
import { FileService } from "../file/file.service";
@Injectable()
export class UserService {
  constructor(
    @InjectModel(User) private readonly userModel: typeof User,
    private readonly fileService: FileService
  ) {}
  async create(createUserDto: CreateUserDto, photo?: any): Promise<User> {
    const fileName = await this.fileService.saveFile(photo);
    return this.userModel.create({...createUserDto, photo: fileName});
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
      include: { all: true },
    });
    return user?.dataValues;
  }
}
