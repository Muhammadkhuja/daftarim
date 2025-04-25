import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { Block } from "../../blocks/models/block.model";
import { Property } from "../../properties/models/property.model";

interface IBlockPropertyCreationAttr {
  blockId: number;
  propertiesId: number;
  value: string;
}

@Table({ tableName: "block_properties" })
export class BlockProperty extends Model<
  BlockProperty,
  IBlockPropertyCreationAttr
> {
  @ForeignKey(() => Block)
  @Column({ type: DataType.INTEGER })
  blockId: number;

  @ForeignKey(() => Property)
  @Column({ type: DataType.INTEGER })
  propertiesId: number;

  @Column({ type: DataType.STRING })
  value: string;

  @BelongsTo(() => Block)
  block: Block;

  @BelongsTo(() => Property)
  property: Property;
}
