import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { Admin } from "../../admin/models/admin.model";
interface IWorkspaceCreationAttr {
  created_by: number;
  name: string;
  icon: string;
  category: string;
  management: string;
}

@Table({ tableName: "workspace" })
export class Workspace extends Model<Workspace, IWorkspaceCreationAttr> {
  @Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true })
  declare id: number;

  @ForeignKey(() => Admin)
  @Column({ type: DataType.INTEGER })
  created_by: number;

  @Column({ type: DataType.STRING })
  name: string;

  @Column({ type: DataType.STRING })
  icon: string;

  @Column({ type: DataType.STRING })
  category: string;

  @Column({ type: DataType.STRING })
  management: string;
}
