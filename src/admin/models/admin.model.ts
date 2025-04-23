import { Column, DataType, Model, Table } from "sequelize-typescript";

interface IAdminCreationAttr {
  full_name: string;
  email: string;
  hashed_psaaword: string;
  refresh_token: string;
  roleId: number;
  is_active: boolean;
}
@Table({ tableName: "admin" })
export class Admin extends Model<Admin, IAdminCreationAttr> {
  @Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true })
  declare id: number;

  @Column({ type: DataType.STRING })
  full_name: string;

  @Column({ type: DataType.STRING })
  email: string;

  @Column({ type: DataType.STRING })
  hashed_psaaword: string;

  @Column({ type: DataType.STRING })
  refresh_token: string;

  @Column({ type: DataType.INTEGER })
  roleId: number;

  @Column({ type: DataType.BOOLEAN })
  is_active: boolean;
}
