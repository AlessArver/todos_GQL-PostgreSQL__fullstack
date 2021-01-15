import { useState } from 'react'
import { useMutation } from '@apollo/client'

import { REGISTER } from '../../apollo/mutations/user'

export const useRegister = () => {
    const [_register, { loading, error, data }] = useMutation(REGISTER)
    const [values, setValues] = useState({
        name: '',
        surname: '',
        email: ''
    })

    const handleChange = (e: any) => {
        setValues((prevValues) => ({
            ...prevValues,
            [e.target.name]: e.target.value
        }))
    }

    const register = () => {
        const { name, surname, email } = values
        _register({ variables: { name, surname, email }})
    }

    return { handleChange, register, loading, error }
}