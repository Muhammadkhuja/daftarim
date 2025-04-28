import { Injectable } from "@nestjs/common";
import { CreateBlockPropertyDto } from "./dto/create-block_property.dto";
import { UpdateBlockPropertyDto } from "./dto/update-block_property.dto";
import { InjectModel } from "@nestjs/sequelize";
import { BlockProperty } from "./models/block_property.model";

@Injectable()
export class BlockPropertiesService {
  constructor(
    @InjectModel(BlockProperty) private blockpropertyModel: typeof BlockProperty
  ) {}

  create(createBlockPropertyDto: CreateBlockPropertyDto) {
    return this.blockpropertyModel.create(createBlockPropertyDto);
  }

  findAll(): Promise<BlockProperty[]> {
    return this.blockpropertyModel.findAll();
  }

  findOne(id: number): Promise<BlockProperty | null> {
    return this.blockpropertyModel.findByPk(id);
  }

  async update(
    id: number,
    updateBlockPropertyDto: UpdateBlockPropertyDto
  ): Promise<BlockProperty | null> {
    const updateBlockProperty = await this.blockpropertyModel.update(
      updateBlockPropertyDto,
      { where: { id }, returning: true }
    );
    return updateBlockProperty[1][0];
  }

  async remove(id: number) {
    const removeBlockProperty = await this.blockpropertyModel.destroy({
      where: { id },
    });
    if (removeBlockProperty > 0) {
      return `Yo bob kedi krch`;
    }
    return "aqlin yetmasa nega o'chirasan a";
  }
}
