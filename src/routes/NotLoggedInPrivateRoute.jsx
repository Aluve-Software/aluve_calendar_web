import React from 'react'
import { Outlet, Navigate } from "react-router-dom";

export default function NotLoggedInPrivateRoute({currentUser }) {

    return !currentUser ? <Outlet /> : <Navigate to={'/dashboard'} />
}
