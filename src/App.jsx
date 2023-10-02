// import { useState } from 'react'
import React from 'react'
import { BrowserRouter,Routes, Route} from 'react-router-dom'
import { LoggedInPrivateRoute, NotLoggedInPrivateRoute } from './routes'
import { useDispatch, useSelector } from 'react-redux'
import ResetPassword from './pages/ResetPassword'
import NewPassword from './pages/NewPassword'
import SuccessfulReset from './pages/SuccessfulReset'
import Registration from './pages/Registration'
import Landing from './pages/Landing'
import { Pages } from './pages'
import Login from './pages/Login'


function App() {
  const currentUser = useSelector(state => state.AuthReducer.currentUser)
  const dispatch = useDispatch()

  React.useEffect(() => {

    async function onAuthStateChange() {
      const response = await axios.get('/current-user')
      const data = await response.data
      const user = data.user
      dispatch(AuthActions.onAuthStateChange(user))
    }

    // onAuthStateChange()

  }, [currentUser])


  return (
    <>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Registration />} />
          <Route path="/reset" element={<ResetPassword />} />
          <Route path="/newpassword" element={<NewPassword />} />
          <Route path="/successreset" element={<SuccessfulReset />} />
          {/* <SuccessfulReset /> */}
          {/* <NewPassword /> */}
          {/* <ResetPassword /> */}
          
          {/* TO BE USED ONCE UI IS COMPLETE */}
          <Route element={<NotLoggedInPrivateRoute currentUser={currentUser} />}>
            <Route exact path='/*' element={<Pages.Authentication />} />
          </Route>
          <Route element={<LoggedInPrivateRoute currentUser={currentUser} />}>
            {/* <Route path='/*' element={<Pages.Dashboard />} /> */}
          </Route>

        </Routes>
    </>
  )
}

export default App