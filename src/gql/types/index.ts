import { gql } from "apollo-server";

export const schema = gql`
  type User {
    name: String!
    email: String!
    email_confirmed: Boolean
    password: String!
  }

  type Todo {
    title: String!
    body: String
    is_completed: Boolean!
  }

  input RegisterInput {
    name: String!
    email: String!
    password: String!
  }

  input CreateTodoInput {
    title: String!
    body: String
  }

  type Query {
    users: [User]
    user(id: ID!): User

    todos: [Todo!]!
    todo(id: ID!): Todo
  }

  type Mutation {
    register(user: RegisterInput!): User!
    login(email: String!, password: String!): User!
    updateUserName(id: ID!, name: String!): User
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
