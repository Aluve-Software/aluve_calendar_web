import React from 'react';

function GoogleSignInButton() {
  const handleSignIn = () => {
    // Redirect to the Google authorization URL
    window.location.href = 'http://hwsrv-1097014.hostwindsdns.com:8080/oauth2/authorization/google';
  };

  return (
    <button
      className='w-full lg:px-10 py-2 lg:py-3 md:py-3 md:px-5 rounded-lg md:rounded lg:rounded border-2 border-bright-orange text-bright-orange flex items-center justify-center'
      onClick={handleSignIn}
    >
      Register With Google
    </button>
  );
}

export default GoogleSignInButton;




