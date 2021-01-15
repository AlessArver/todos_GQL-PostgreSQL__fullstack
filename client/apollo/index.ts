import ApolloClient from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { setContext } from 'apollo-link-context'

const uri = 'http://localhost:5000/'
const httpLink = createHttpLink({ uri })
const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem('auth')

    return {
        headers: {
            ...headers,
            authorization: token && `Bearer ${token}`
        }
    }
})
const cache = new InMemoryCache()

export const client = new ApolloClient({
    cache,
    link: authLink.concat(httpLink)
})