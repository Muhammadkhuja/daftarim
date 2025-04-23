import { Injectable } from "@nestjs/common";
import { CreateTypeDto } from "./dto/create-type.dto";
import { UpdateTypeDto } from "./dto/update-type.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Type } from "./models/type.model";

@Injectable()
export class TypesService {
  constructor(@InjectModel(Type) private typeModel: typeof Type) {}
  create(createTypeDto: CreateTypeDto): Promise<Type> {
    return this.typeModel.create(createTypeDto);
  }

  findAll(): Promise<Type[]> {
    return this.typeModel.findAll();
  }

  findOne(id: number): Promise<Type | null> {
    return this.typeModel.findByPk(id);
  }

  async update(
    id: number,
    updateTypeDto: UpdateTypeDto
  ): Promise<Type | null> {
    const updatetype = await this.typeModel.update(updateTypeDto, {
      where: { id },
      returning: true,
    });

    return updatetype[1][0];
  }

  async remove(id: number) {
    const removetype = await this.typeModel.destroy({ where: {id}})
    if (removetype > 0){
      return `Yo bob kedi krch`;
    }
        return "aqlin yetmasa nega o'chirasan a";
  }
}
