import {
  Column,
  DataType,
  Model,
  Table,
  PrimaryKey,
  ForeignKey,
} from "sequelize-typescript";
import { Group } from "../../groups/models/group.model";
import { User } from "../../user/models/user.model";

interface IGroupMemberCreationAttr {
  group_id: number;
  user_id: number;
}

@Table({ tableName: "group_members" })
export class GroupMember extends Model<GroupMember, IGroupMemberCreationAttr> {
  @PrimaryKey
  @ForeignKey(() => Group)
  @Column({ type: DataType.BIGINT, allowNull: false })
  group_id: number;

  @PrimaryKey
  @ForeignKey(() => User)
  @Column({ type: DataType.BIGINT, allowNull: false })
  user_id: number;
}
