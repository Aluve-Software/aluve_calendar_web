// import { useState } from 'react';
// import backArrow from '../assets/backArrow.svg';
import aluveLogo from '../assets/Aluve_monochrome_black 1.svg';
// import aluveLogoNoText from '../assets/aluveBlackNoText.svg'
import confusedImg from '../assets/confusedImg.svg'
import '../index.css';

export default function ForgotPassword() {
  

    return (
        <>
            {/* FIX: class arrangement and legibility */}
            <div className="relative min-h-screen lg:overflow-hidden overflow-visible justify-center">
                <div className="display flex flex-col bg-white justify-center w-full min-h-screen sm:flex-row flex-grow">

                    <div className='display flex row justify-center lg:items-start md:items-start items-start bg-lilac w-full lg:w-1/12 sm:w-full flex-grow lg:rounded-border pt-4 pb-12 md:pb-0 lg:pb-0'>
                        <div className='display flex-col'>
                           {/* ADD functionality to back button */}
                            <div className='display flex row justify-center lg:pb-10 md:pb-10'>
                                {/* <img src={backArrow} className='pl-6 lg:pl-10 md:pl-10 mt-2 mb-2' onClick={() => window.history.back()} alt="back arrow" /> */}
                                <img src={aluveLogo} alt="aluve logo text" className='w-1/2 lg:hidden md:hidden' />
                            </div>
                            
                           
                            <div className='hidden lg:block md:block lg:text-white font-space-mono text-center'>
                                <p className='lg:text-lg md:text-sm font-medium'>Get organised with the</p>
                                <span className='lg:text-2xl md:text-2xl font-extrabold'>Calendar App.</span>
                            </div> 
                        </div>
                    </div>


                    <div className='bg-white w-full px-6 lg:w-1/4 md:w-full flex-grow lg:pb-16 md:py-16 lg:px-60 md:px-8 lg:pt-0 md:pt-12  text-center lg:text-white md:text-white sm:text-black '>
                        <div className='flex-grow flex flex-col items-center justify-center'>
                            <img src={aluveLogo} alt="aluve logo text" className='hidden lg:block md:block w-3/4' />
                       
                        <form action='' className='lg:block md:block text-grey'>
                            <p className='font-bold text-3xl lg:text-3xl py-8 lg:pb-4 lg:pt-16 md:py-4'>Oops, forgot your password?</p>

                            <p className='font-medium text-sm lg:text-lg lg:pb-8 '>Enter the password you used to register.</p>
                            {/* Container for email, password, and Sign in button */}
                            <div className='flex flex-col'>
                                <div className='text-sm lg:text-lg pb-8 pt-4 text-left'>
                                <label htmlFor="email" className="font-medium">Email address</label>
                                <input type="email" id="email" className="bg-white border-2 border-lilac rounded-md text-light-grey w-full p-1.5 lg:p-2.5 md:p-2.25 " placeholder="Enter email address" required />
                                </div>

                                {/* ADD Link to send verify user's email */}
                                <button className='w-full font-medium lg:px-10 py-2 lg:py-3 md:py-3 md:px-5 rounded-lg md:rounded lg:rounded bg-light-blue text-white cursor-pointer'>Reset Password</button>
                            </div>
                        </form>  
                       



                            {/* ADD functionality to redirect to sign in page */}
                            <p className='text-sm py-8 lg:text-md md:text-md font-medium text-grey'>
                                Don't have an account? <span className='font-bold text-light-blue hover:underline cursor-pointer' onClick={() => {}}>Register</span>
                            </p>
                        </div>
                        
                        {/* FIX: image scaling */}
                        <div className='relative w-full lg:-top-1/2 md:-top-1/2 lg:-left-full md:-left-3/4   md:inset-full'>
                            <img
                                src={confusedImg}
                                alt="confused image black"
                                className='hidden lg:block md:block'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
      
    );
}