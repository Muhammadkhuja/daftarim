import { BelongsTo, Column, DataType, Model, Table } from "sequelize-typescript";
import { Device } from "../../devices/models/device.model";

interface IUserCreationAttr {
  first_name: string;
  last_name: string;
  email: string;
  hashed_psaaword: string;
  photo: string;
  refresh_token: string;
  activation_link: string;
}

@Table({ tableName: "users" })
export class User extends Model<User, IUserCreationAttr> {
  @Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true })
  declare id: number;

  @Column({ type: DataType.STRING })
  declare first_name: string;

  @Column({ type: DataType.STRING })
  declare last_name: string;

  @Column({ type: DataType.STRING })
  declare email: string;

  @Column({ type: DataType.STRING })
  declare hashed_psaaword: string;

  @Column({ type: DataType.STRING })
  declare photo: string;

  @Column({ type: DataType.STRING, allowNull: true })
  declare refresh_token: string;

  @Column({ type: DataType.STRING, defaultValue: false })
  declare activation_link: string;

}
