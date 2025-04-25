import {  Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { Block } from "../../blocks/models/block.model";

interface ITypecreationAttr {
  name: string;
  description: string;
}

@Table({ tableName: "types" })
export class Type extends Model<Type, ITypecreationAttr> {
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

    @HasMany(() => Block)
    parentBlock: Block[];
}
