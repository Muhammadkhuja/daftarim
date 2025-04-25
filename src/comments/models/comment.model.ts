import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { User } from "../../user/models/user.model";
import { Block } from "../../blocks/models/block.model";
interface ICommentCreationAttr {
  content: string;
  userId: number;
  blockId: number;
  isEdited: boolean;
}

@Table({ tableName: "comments" })
export class Comment extends Model<Comment, ICommentCreationAttr> {
  @Column({
    type: DataType.BIGINT.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id: number;

  @Column({ type: DataType.TEXT })
  content: string;

  @ForeignKey(() => User)
  @Column({ type: DataType.BIGINT })
  userId: number;

  @ForeignKey(() => Block)
  @Column({ type: DataType.BIGINT })
  blockId: number;

  @Column({ type: DataType.BOOLEAN })
  isEdited: boolean;

  @BelongsTo(() => User)
  user: User;

  @BelongsTo(() => Block)
  block: Block;
}
