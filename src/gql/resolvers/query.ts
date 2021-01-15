import { todoQueries } from "../queries/todo";
import { userQueries } from "../queries/user";

export const Query = {
  ...todoQueries,
  ...userQueries,
};
