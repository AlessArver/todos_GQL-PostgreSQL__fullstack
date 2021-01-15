import { ApolloError } from "apollo-server";

import { getTodos, getTodo, updateTodoTitlte, updateTodoBody, removeTodo } from '../../controllers/todo'

export const todoQueries = {
    todos: () => {
        try {
            return getTodos()
        } catch ({ message }) {
            throw new ApolloError(message);
        }
    },
    todo: (_: any, { id }: any) => {
        try {
            return getTodo(id)
        } catch ({ message }) {
            throw new ApolloError(message);
        }
    }
}