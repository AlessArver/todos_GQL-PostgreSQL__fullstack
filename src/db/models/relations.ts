import { Todo, User } from "./index";

Todo.hasMany(User, {
  foreignKey: "userId",
  as: "owner",
});
User.hasMany(Todo, {
  foreignKey: "userId",
  as: "todo",
});
