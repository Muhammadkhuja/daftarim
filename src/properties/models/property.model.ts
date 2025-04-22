import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript";
import { BlockProperty } from "src/block_properties/models/block_property.model";
import { Block } from "src/blocks/models/block.model";

interface IPropertycreationAttr {
  name: string;
  description: string;
}

@Table({ tableName: "properties" })
export class Property extends Model<Property, IPropertycreationAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id: number;

  @Column({ type: DataType.STRING })
  name: string;

  @Column({ type: DataType.STRING})
  description: string;

  @BelongsToMany(() =>Block, ()=>BlockProperty)
  block: Block[]
}
