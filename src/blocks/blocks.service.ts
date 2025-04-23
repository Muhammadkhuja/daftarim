import { Injectable } from "@nestjs/common";
import { CreateBlockDto } from "./dto/create-block.dto";
import { UpdateBlockDto } from "./dto/update-block.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Block } from "./models/block.model";
import { TypesService } from "src/types/types.service";

@Injectable()
export class BlocksService {
  constructor(
    @InjectModel(Block) private blockModule: typeof Block,
    private readonly typeService: TypesService
  ) {}

  create(createBlockDto: CreateBlockDto) {
    return this.blockModule.create(createBlockDto);
  }

  findAll(): Promise<Block[]> {
    return this.blockModule.findAll();
  }

  findOne(id: number): Promise<Block | null> {
    return this.blockModule.findByPk(id);
  }

  async update(
    id: number,
    updateBlockDto: UpdateBlockDto
  ): Promise<Block | null> {
    const updateblock = await this.blockModule.update(updateBlockDto, {
      where: { id },
      returning: true,
    });
    return updateblock[1][0];
  }

  async remove(id: number) {
    const removeBlock = await this.blockModule.destroy({ where: { id } });
    if (removeBlock > 0) {
      return "Company o'chirildi ";
    }
    return "aqlin yetmasa nega o'chirasan a";
  }
}
