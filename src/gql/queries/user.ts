import { ApolloError } from "apollo-server-koa";

import { me, getUsers, getUser } from "../../controllers/user";

export const userQueries = {
  users: () => {
    try {
      console.log("query users success");
      return getUsers();
    } catch ({ message }) {
      console.log("query users error!!!");
      throw new ApolloError(message);
    }
  },
  user: (_: any, { id }: any) => {
    try {
      return getUser(id);
    } catch ({ message }) {
      throw new ApolloError(message);
    }
  },
  me: async (_: any, data: any, ctx: any) => {
    try {
      return me(ctx);
    } catch ({ message }) {
      throw new ApolloError(message);
    }
  },
};
