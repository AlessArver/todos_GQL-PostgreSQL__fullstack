import { Model, DataTypes } from "sequelize";

import { db } from "../init";
import { Todo } from "./Todo";

export class User extends Model {}
User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notNull: { msg: "Email is required" },
      },
    },
    // email_confirmed: DataTypes.BOOLEAN,
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        min: 8,
        notNull: { msg: "Password is required" },
      },
    },
  },
  { sequelize: db, modelName: "user" }
);
