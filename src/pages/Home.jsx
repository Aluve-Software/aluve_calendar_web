import React from 'react';
import LoginButton from '../components/LoginButton';
import LogoutButton from '../components/LogoutButton';
import { useAuth0 } from '@auth0/auth0-react';

export default function Home() {
    const { isAuthenticated, user } = useAuth0();
    
    return (
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden mx-60 p-5 md:p-40 flex flex-col w-11/12 max-w-lg group">
            <h1 className="justify-center text-black">Welcome! {user.name}</h1>
        </div>
        
      );
  
};
