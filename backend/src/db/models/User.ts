import { DataTypes, Model, Optional } from "sequelize";

import connection from "../../config/dbConnect";

interface UserAttributes {
  id?: number;
  username: string;
  password: string;
  status?: boolean | false;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface UserInput extends Optional<UserAttributes, "id"> {}
export interface UserOutput extends Required<UserAttributes> {}

class User extends Model<UserAttributes, UserInput> implements UserAttributes {
  public id!: number;
  public username!: string;
  public password!: string;
  public status!: boolean;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

User.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  username:{
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password:{
    type: DataTypes.STRING,
    allowNull: false,
  },
  status:{
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
},{
  sequelize: connection,
  underscored:false,
  timestamps:true
});

export default User;
