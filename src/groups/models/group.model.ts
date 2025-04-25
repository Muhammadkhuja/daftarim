import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";
import { User } from "../../user/models/user.model";

export interface IGroupCreationAttr {
  id: number;
  name: string;
  icon: string;
  description: string;
  created_by: number;
}


@Table({ tableName: "groups" })
export class Group extends Model<Group, IGroupCreationAttr> {
  @Column({
    type: DataType.BIGINT.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id: number;

  @Column({
    type: DataType.STRING(100),
  })
  name: string;

  @Column({
    type: DataType.STRING(255),
  })
  icon: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  description: string;

  @ForeignKey(() => User)
  @Column({
    type: DataType.BIGINT,
  })
  created_by: number;

  @BelongsTo(() => User)
  creator: User;
}
