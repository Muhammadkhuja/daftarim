import {
  BelongsTo,
  BelongsToMany,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { BlockProperty } from "src/block_properties/models/block_property.model";
import { Property } from "src/properties/models/property.model";
import { Type } from "src/typess/models/type.model";

interface IBlocksCreationAttr {
  typeId: number;
  created_by: number;
  parent: number;
  order_index: number;
}

@Table({ tableName: "blocks" })
export class Block extends Model<Block, IBlocksCreationAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id: number;

  @ForeignKey(() => Type)
  @Column({ type: DataType.INTEGER })
  typeId: number;

  @Column({ type: DataType.INTEGER })
  created_by: number;

  @ForeignKey(() => Block)
  @Column({ type: DataType.INTEGER })
  parent: number;

  @Column({ type: DataType.INTEGER })
  order_index: number;

  @BelongsTo(() => Block)
  parentBlock: Block;

  @BelongsTo(() => Type)
  type: Type;

  @BelongsToMany(() =>Property, ()=>BlockProperty)
  property: Property[]
}
