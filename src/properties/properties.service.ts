import { Injectable } from '@nestjs/common';
import { CreatePropertyDto } from './dto/create-property.dto';
import { UpdatePropertyDto } from './dto/update-property.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Property } from './models/property.model';

@Injectable()
export class PropertiesService {
  constructor(@InjectModel(Property) private propertyModel: typeof Property) {}
  async create(createPropertyDto: CreatePropertyDto): Promise<Property> {
    return this.propertyModel.create(createPropertyDto);
  }

  findAll(): Promise<Property[]> {
    return this.propertyModel.findAll();
  }

  findOne(id: number): Promise<Property | null> {
    return this.propertyModel.findByPk(id);
  }

  async update(
    id: number,
    updatePropertyDto: UpdatePropertyDto
  ): Promise<Property | null> {
    const updateproperty = await this.propertyModel.update(updatePropertyDto, {
      where: {id},
      returning: true
    })
    return updatePropertyDto[1][0];
  }

  async remove(id: number) {
    const removeproperty = await this.propertyModel.destroy({where: {id}})
    if (removeproperty > 0) {
      return `Yo bob kedi krch`;
    }
    return "aqlin yetmasa nega o'chirasan a";
  }
}
