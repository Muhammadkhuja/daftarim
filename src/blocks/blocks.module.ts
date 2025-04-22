import { Module } from "@nestjs/common";
import { BlocksService } from "./blocks.service";
import { BlocksController } from "./blocks.controller";
import { SequelizeModule } from "@nestjs/sequelize";
import { Block } from "./models/block.model";
import { TypesModule } from "src/typess/types.module";

@Module({
  imports: [SequelizeModule.forFeature([Block]), TypesModule],
  controllers: [BlocksController],
  providers: [BlocksService],
})
export class BlocksModule {}
