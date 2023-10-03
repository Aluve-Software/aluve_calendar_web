import React from 'react'
import Proptypes from 'prop-types'

const Context = React.createContext()

function useAuthValidation() {
    return React.useContext(Context)
}

export function AuthValidationsProvider(props) {
    const response = { message: null, valid: null }

    const emailValidation = (email) => {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        const valid = emailRegex.test(email)

        if (valid) return { ...response, valid }

        const message = 'Enter a valid email address.'
        return { ...response, valid, message }
    }

    const passwordValidation = (password) => {
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,50}$/;
        const valid = passwordRegex.test(password)

        if (valid) return { ...response, valid }

        const message = '*Check your password. Your password must be at least 8 characters, maximum of 50 characters, including a number, a symbol, a lowercase and uppercase letter.'
        return { ...response, valid, message }
    }

    const passwordsComparisson = (password, confirmationPassword) => {
        const valid = password === confirmationPassword

        if (valid) return { ...response, valid }

        const message = '*Your passwords do not match.'
        return { ...response, valid, message }
    }

    const value = {
        emailValidation,
        passwordValidation,
        passwordsComparisson
    }

    return (
        <Context.Provider value={value}>
            {props.children}
        </Context.Provider>
    )
}

AuthValidationsProvider.prototype = {

}

export const AuthenticationHook = { AuthValidationsProvider, useAuthValidation }