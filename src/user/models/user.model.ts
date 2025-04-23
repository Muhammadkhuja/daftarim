import { Column, DataType, Model, Table } from "sequelize-typescript";

interface IUserCreationAttr {
  first_name: string;
  last_name: string;
  email: string;
  hashed_psaaword: string;
  photo: string;
  refresh_token: string;
  activation_link: string;
}

@Table({ tableName: "users" })
export class User extends Model<User, IUserCreationAttr> {
  @Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true })
  declare id: number;

  @Column({ type: DataType.STRING })
  first_name: string;

  @Column({ type: DataType.STRING })
  last_name: string;

  @Column({ type: DataType.STRING })
  email: string;

  @Column({ type: DataType.STRING })
  hashed_psaaword: string;

  @Column({ type: DataType.STRING })
  photo: string;

  @Column({ type: DataType.STRING, allowNull:true})
  refresh_token: string;

  @Column({ type: DataType.STRING, defaultValue:false })
  activation_link: string;
}
