import { todoQueries, userQueries } from "../queries";

export const Query = {
  ...todoQueries,
  ...userQueries,
};
