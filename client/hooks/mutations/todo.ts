import { useState } from 'react'
import { useMutation } from '@apollo/client'

import { CREATE_TODO } from '../../apollo/mutations/todo'

export const useCreateTodo = () => {
    const [_createTodo, { loading, error, data }] = useMutation(CREATE_TODO)
    const [values, setValues] = useState({
        title: '',
        body: ''
    })

    const handleChange = (e: any) => {
        setValues((prevValues) => ({
            ...prevValues,
            [e.target.name]: e.target.value
        }))
    }

    const createTodo = () => {
        const { title, body } = values
        _createTodo({ variables: { title, body }})
    }

    return { handleChange, createTodo, loading, error}
}