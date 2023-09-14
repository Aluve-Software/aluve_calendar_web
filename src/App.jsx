// import { useState } from 'react'
import ResetPassword from './pages/ResetPassword'
import NewPassword from './pages/NewPassword'
import SuccessfulReset from './pages/SuccessfulReset'
import { BrowserRouter  } from 'react-router-dom'
import { Routes, Route  } from 'react-router-dom'
import './App.css'

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/reset" element={<ResetPassword />} />
          <Route path="/newpassword" element={<NewPassword />} />
          <Route path="/successreset" element={<SuccessfulReset />} />
        {/* <SuccessfulReset /> */}
        {/* <NewPassword /> */}
        {/* <ResetPassword /> */}
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
