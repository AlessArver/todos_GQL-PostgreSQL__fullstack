import { gql } from "apollo-server-koa";

export const typeDefs = gql`
  type User {
    id: String!
    username: String!
    email: String!
    # email_confirmed: Boolean
    password: String!
  }

  type Todo {
    id: String!
    title: String!
    body: String
    is_completed: Boolean!
  }

  input RegisterInput {
    username: String!
    email: String!
    password: String!
  }

  type ResRegister {
    message: String!
  }
  type ResLogin {
    token: String
    message: String!
  }
  type ResMe {
    token: String
    user: User
    message: String
  }

  input CreateTodoInput {
    title: String!
    body: String
  }

  type Query {
    users: [User]
    user(id: ID!): User
    me: ResMe

    todos: [Todo!]!
    todo(id: ID!): Todo
  }

  type Mutation {
    register(user: RegisterInput!): ResRegister!
    login(email: String!, password: String!): ResLogin
    updateUserName(id: ID!, username: String!): User
    updateUserEmail(id: ID!, email: String!): User
    updateUserPassword(id: ID!, password: String!): User
    removeUser(id: ID!): User

    createTodo(todo: CreateTodoInput!): Todo
    updateTodoTitle(id: ID!, title: String!): Todo
    updateTodoBody(id: ID!, body: String!): Todo
    removeTodo(id: ID!): Todo
  }

  type Subscription {
    addedTodo: Todo!
    updatedTodo: Todo!
  }
`;
