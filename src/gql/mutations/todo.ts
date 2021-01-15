import { ApolloError } from "apollo-server";

import { createTodo, removeTodo, updateTodoBody, updateTodoTitlte } from "../../controllers/todo";

export const todoMutations = {
    createTodo: (_: any, { todo }: any) => {
        try {
            const { title, body } = todo
            return createTodo(title, body)
        } catch ({ message }) {
            throw new ApolloError(message);
        }
    },
    updateTodoTitle: (id: any, title: string) => {
        try {
            return updateTodoTitlte(id, title)
        } catch ({ message }) {
            throw new ApolloError(message);
        }
    },
    updateTodoBody: (id: any, body: string) => {
        try {
            return updateTodoBody(id, body)
        } catch ({ message }) {
            throw new ApolloError(message);
        }
    },
    removeTodo: (id: string) => {
        try {
            return removeTodo(id)
        } catch ({ message }) {
            throw new ApolloError(message);
        }
    }
}