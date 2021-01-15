import { todoMutations } from "./../mutations/todo";
import { userMutations } from "./../mutations/user";

export const Mutation = {
  ...todoMutations,
  ...userMutations,
};
