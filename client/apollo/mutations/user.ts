import { gql } from "@apollo/client";

export const REGISTER = gql`
    mutation register($user: RegisterInput!) {
        user(user: $user) {
            id
            name
            surname
            email
        }
    }
`

export const UPDATE_USER_NAME = gql`
    mutation updateUserName($id: ID!, $name: String!) {
        updateUserName(id: $id, name: $name) {
            id
            name
        }   
    }
`

export const UPDATE_USER_EMAIL = gql`
    mutation updateUserEmail($id: ID!, $email: String!) {
        updateUserEmail(id: $id, email: $email) {
            id
            email
        }   
    }
`

export const UPDATE_USER_PASSWORD = gql`
    mutation updateUserPassword(id: ID!, password: String!) {
        updateUserPassword(id: $id, password: $password) {
            id
            password
        }   
    }
`

export const REMOVE_USER = gql`
    mutation removeUser(id: ID!) {
        removeUser(id: $id) {
            id
            name
            surname
        }
    }
`