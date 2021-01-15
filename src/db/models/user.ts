import { DataTypes } from "sequelize";

import { db } from "./../init";
import { TodoModel } from './todo'

export const UserModel = db.define(
  "User",
  {
    name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      unique: true,
      validate: {},
    },
    // email_confirmed: DataTypes.BOOLEAN,
    password: {
      type: DataTypes.STRING,
      validate: {
        min: 8,
      },
    },
  },
  {
    timestamps: true,
  }
);
UserModel.hasMany(TodoModel, {
  foreignKey: 'todo_id',
  as: 'todo'
})