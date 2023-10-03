import axios from 'axios'

// GET
export async function getCurrentUser() {
    const response = await axios.get('/current-user')
    return await response.data
}

// POST
export async function postLoginUser(payload) {
    const response = await axios.post('/login', payload)
    return await response.data
}

export async function postRegisterUser(payload) {
    const response = await axios.post('/register-user', payload)
    return await response.data
}

export async function postForgotPassword(payload) {
    const response = await axios.post('/forgot-password', payload)
    return await response.data
}

export async function postNewPassword(payload) {
    const response = await axios.post('/new-password', payload)
    return await response.data
}

export async function postLogOut(payload) {
    const response = await axios.post('/log-out', payload)
    return await response.data
}
