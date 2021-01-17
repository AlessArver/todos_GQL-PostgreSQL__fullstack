import { ApolloServer } from "apollo-server-koa";

import { app } from "./app";
import { typeDefs } from "../gql/types";
import { resolvers } from "../gql/resolvers";

export const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ ctx }) => ctx,
});
apolloServer.applyMiddleware({ app, cors: false });
