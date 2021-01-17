import { ApolloError } from "apollo-server-koa";

export const tryCatch = (content: any) => {
  try {
    content;
  } catch ({ message }) {
    throw new ApolloError(message);
  }
};
