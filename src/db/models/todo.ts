import { DataTypes, Model } from "sequelize";

import { db } from "../init";
import { User } from "./User";

export class Todo extends Model {}
Todo.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
    },
    body: {
      type: DataTypes.STRING,
    },
  },
  { sequelize: db, modelName: "todo" }
);
