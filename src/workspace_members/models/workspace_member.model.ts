import {
  Column,
  DataType,
  Model,
  Table,
  PrimaryKey,
  ForeignKey,
} from "sequelize-typescript";
import { Workspace } from "../../workspace/models/workspace.model";
import { User } from "../../user/models/user.model";

interface IWorkspaceMemberCreationAttr {
  workspace_id: number;
  user_id: number;
  is_admin: boolean;
}

@Table({ tableName: "workspace_members" })
export class WorkspaceMember extends Model<
  WorkspaceMember,
  IWorkspaceMemberCreationAttr
> {
  @PrimaryKey
  @ForeignKey(() => Workspace)
  @Column({ type: DataType.BIGINT })
  workspace_id: number;

  @PrimaryKey
  @ForeignKey(() => User)
  @Column({ type: DataType.BIGINT})
  user_id: number;

  @Column({ type: DataType.BOOLEAN })
  is_admin: boolean;
}
