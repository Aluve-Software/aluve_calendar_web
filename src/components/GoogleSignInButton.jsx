import React from 'react'

// import { Link } from 'react-router-dom'

function GoogleSignInButton() {
  return (
    <a href="/login/oauth2/authorization/google">
       <button  className='w-full lg:px-10 py-2 lg:py-3 md:py-3 md:px-5 rounded-lg md:rounded lg:rounded border-2 border-bright-orange text-bright-orange flex flex-row'> Register With Google</button>
    </a> 
  )
}

export default GoogleSignInButton

