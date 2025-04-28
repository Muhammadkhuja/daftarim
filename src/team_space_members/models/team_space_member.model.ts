import {
  Column,
  DataType,
  Model,
  Table,
  PrimaryKey,
} from "sequelize-typescript";

interface ITeamSpaceMemberCreationAttr {
  user_id: number;
  team_space_id: number;
  is_member: boolean;
}

@Table({ tableName: "team_space_members" })
export class TeamSpaceMember extends Model<
  TeamSpaceMember,
  ITeamSpaceMemberCreationAttr
> {
  @PrimaryKey
  @Column({ type: DataType.BIGINT, allowNull: false })
  user_id: number;

  @PrimaryKey
  @Column({ type: DataType.BIGINT, allowNull: false })
  team_space_id: number;

  @Column({ type: DataType.BOOLEAN, allowNull: false, defaultValue: true })
  is_member: boolean;
}
