import { todoMutations, userMutations } from "./../mutations";

export const Mutation = {
  ...todoMutations,
  ...userMutations,
};
