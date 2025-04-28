import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { Workspace } from "../../workspace/models/workspace.model";
import { Admin } from "../../admin/models/admin.model";
import { Permission } from "../../permissions/models/permission.entity";
interface ITeamSpaceCreationAttr {
  name: string;
  description: string | null;
  icon: string | null;
  workspace_id: number;
  created_by: number;
  permission_id: number;
}

@Table({ tableName: "team_space" })
export class TeamSpace extends Model<TeamSpace, ITeamSpaceCreationAttr> {
  @Column({
    type: DataType.BIGINT.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id: number;

  @Column({ type: DataType.STRING, allowNull: false })
  name: string;

  @Column({ type: DataType.TEXT, allowNull: true })
  description: string | null;

  @Column({ type: DataType.STRING, allowNull: true })
  icon: string | null;

  @ForeignKey(() => Workspace)
  @Column({ type: DataType.BIGINT, allowNull: false })
  workspace_id: number;

  @ForeignKey(() => Admin)
  @Column({ type: DataType.BIGINT, allowNull: false })
  created_by: number;

  @ForeignKey(() => Permission)
  @Column({ type: DataType.BIGINT, allowNull: false })
  permission_id: number;
}
