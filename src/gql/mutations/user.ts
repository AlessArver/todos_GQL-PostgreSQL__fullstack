import { ApolloError } from "apollo-server";

import {
  createUser,
  updateUserName,
  updateUserEmail,
  updateUserPassword,
  removeUser,
} from "../../controllers/user";

export const userMutations = {
  register: (_: any, { user }: any) => {
    try {
      const { name, email, password } = user;
      return createUser(name, email, password);
    } catch ({ message }) {
      throw new ApolloError(message);
    }
  },
  updateUserName: (id: number, name: string) => {
    try {
      return updateUserName(id, name);
    } catch ({ message }) {
      throw new ApolloError(message);
    }
  },
  updateUserEmail: (id: number, email: string) => updateUserEmail(id, email),
  updateUserPassword: (id: number, password: string) =>
    updateUserPassword(id, password),
  removeUser: (id: number) => removeUser(id),
};
