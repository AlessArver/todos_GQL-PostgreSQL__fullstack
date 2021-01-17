import { ApolloError } from "apollo-server-koa";

import {
  createUser,
  login,
  updateUserName,
  updateUserEmail,
  updateUserPassword,
  removeUser,
} from "../../controllers/user";

export const userMutations = {
  register: (_: any, { user }: any) => {
    try {
      const { username, email, password } = user;
      return createUser(username, email, password);
    } catch ({ message }) {
      throw new ApolloError(message);
    }
  },
  login: (_: any, data: any, ctx: any) => {
    console.log("request type");
    return login(data.email, data.password, ctx);
  },
  updateUserName: (id: number, username: string) => {
    try {
      return updateUserName(id, username);
    } catch ({ message }) {
      throw new ApolloError(message);
    }
  },
  updateUserEmail: (id: number, email: string) => updateUserEmail(id, email),
  updateUserPassword: (id: number, password: string) =>
    updateUserPassword(id, password),
  removeUser: (id: number) => removeUser(id),
};
