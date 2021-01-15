import { DataTypes } from "sequelize";

import { db } from "./../init";
import { UserModel } from './user'

export const TodoModel = db.define(
  "Todo",
  {
    title: {
      type: DataTypes.STRING
    },
    body: {
      type: DataTypes.STRING
    }
  },
  {
    timestamps: true,
  }
);
TodoModel.hasMany(UserModel, {
  foreignKey: 'user_id',
  as: 'owner'
})