import { gql } from "@apollo/client";

export const CREATE_TODO = gql`
    mutation createTodo($todo: CreateTodoInput!) {
        createTodo(todo: $todo) {
            id
            title
            body
        }
    }
`

export const UPDATE_TODO_TITLE = gql`
    mutation updateTodoTitle($id: ID!, $title: String!) {
        updateTodoTitle(id: $id, title: $title)
    }
`

export const UPDATE_TODO_BODY = gql`
    mutation updateTodobody($id: ID!, $body: String!) {
        updateTodobody(id: $id, body: $body)
    }
`

export const REMOVE_TODO = gql`
    removeTodo($id: ID!) {
        removeTodo(id: $id) {
            id
            name
            surname
        }
    }
`