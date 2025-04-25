import {
    BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { User } from "../../user/models/user.model";
interface IDeviceCreationAttr {
  userId: number;
  name: string;
  lastActive: Date;
  location: string;
  information: string;
}

@Table({ tableName: "devices" })
export class Device extends Model<Device, IDeviceCreationAttr> {
  @Column({
    type: DataType.BIGINT.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id: number;

  @ForeignKey(() => User)
  @Column({ type: DataType.BIGINT })
  userId: number;

  @Column({ type: DataType.STRING(255) })
  name: string;

  @Column({ type: DataType.DATE })
  lastActive: Date;

  @Column({ type: DataType.STRING(255) })
  location: string;

  @Column({ type: DataType.STRING })
  information: string;


  @BelongsTo(() => User)
  user: User;
}
