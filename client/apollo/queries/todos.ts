import { gql } from "@apollo/client";

export const TODOS = gql`
    query todos {
        todos {
            id
            title
        }
    }
`

export const TODO = gql`
    query todo(id: ID!) {
        todo(id: $id) {
            id
            title
            body
        }
    }
`