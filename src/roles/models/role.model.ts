import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { Admin } from "../../admin/models/admin.model";

interface IRolecreationAttr {
  name: string;
  description: string;
}

@Table({ tableName: "roles" })
export class Role extends Model<Role, IRolecreationAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id: number;

  @Column({ type: DataType.STRING })
  name: string;

  @Column({ type: DataType.STRING })
  description: string;

  @HasMany(() => Admin)
  admin: Admin[];
}
