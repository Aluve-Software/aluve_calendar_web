import { createSlice } from "@reduxjs/toolkit";

/**
 * Current refers to current user
 */
const INITIAL_STATE = {
    currentUser: null
}

const authenticationSlicer = createSlice({
    name: 'authentication',
    initialState: INITIAL_STATE,
    reducers: {
        onAuthStateChange: (state, action) => {

        },
        login: (state, action) => {

        },
        register: (state, action) => {

        },
        resetPassword: (state, action) => {

        },
        newPassword: (state, action) => {

        }
    }
})

export const AuthActions = authenticationSlicer.actions
export default authenticationSlicer.reducer