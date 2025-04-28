import { Column, DataType, Model, Table } from "sequelize-typescript";

interface IpermissionAttr {
  name: string;
  label: string;
  description: string;
}
@Table({ tableName: "permission" })
export class Permission extends Model<Permission, IpermissionAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id: number;

  @Column({ type: DataType.STRING })
  name: string;

  @Column({ type: DataType.STRING })
  label: string;

  @Column({ type: DataType.STRING })
  description: string;
}
