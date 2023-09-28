import React from 'react'
import { Outlet, Navigate } from "react-router-dom";

export default function LoggedInPrivateRoute({ currentUser }) {
    return currentUser ? <Outlet /> : <Navigate to={'/'} />
}
