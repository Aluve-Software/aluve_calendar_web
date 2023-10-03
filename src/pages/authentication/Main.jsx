import React from 'react'
import { AuthenticationHook } from '../../hooks'

export function Main() {
  return (
    <>
      {/* Provider to pass auth validation hook */}
      <AuthenticationHook.AuthValidationsProvider>

        {/* Routes  */}
        <Routes>
          {/* <Route exact path='/' element={<Login />} /> */}
          {/* <Route path='/register' element={<Register />} /> */}
          {/* <Route path='/' element={<ForgotPassword />} /> */}
          {/* <Route path='/' element={<NewPassword />} /> */}
        </Routes>

      </AuthenticationHook.AuthValidationsProvider>
    </>
  )
}
