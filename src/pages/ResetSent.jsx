// import { useState } from 'react';
// import backArrow from '../assets/backArrow.svg';
import aluveLogo from '../assets/Aluve_monochrome_black 1.svg';
// import aluveLogoNoText from '../assets/aluveBlackNoText.svg'
import confusedImg from '../assets/confusedImg.svg'
import '../index.css';

export default function ResetSent() {
  

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
                                <img 
                                    src={confusedImg} 
                                    alt="confused image" 
                                    className='hidden lg:block md:block transform translate-x-1/2 lg:translate-x-1/3 md:translate-x-1/3'
                                    style={{ maxWidth: '110%', width: '700px' }}
                                />
                            </div>
                        </div>
                    </div>


                    <div className='bg-white w-full px-6 lg:w-1/4 md:w-full flex-grow lg:pb-16 md:py-16 lg:px-60 md:px-8 lg:pt-0 md:pt-12  text-center lg:text-white md:text-white sm:text-black '>
                        <div className='flex-grow flex flex-col items-center justify-center'>
                            <img src={aluveLogo} alt="aluve logo text" className='hidden lg:block md:block w-3/4' />
                       
                            <div className='lg:block md:block text-grey'>
                                <p className='font-bold text-3xl lg:text-3xl py-8 lg:pb-4 lg:pt-16 md:py-6'>Request sent!</p>
                                <p className='font-medium text-sm lg:text-lg lg:pb-8 '>Check your email to reset your password.</p>
                                {/* Container for email, password, and Sign in button */}
                                <div className='flex flex-col pt-6 lg:pt-24'>
                                    

                                    {/* ADD Link to send verify user's email */}
                                    <button className='w-full font-medium lg:px-10 py-2 lg:py-3 md:py-3 md:px-5 rounded-lg md:rounded lg:rounded bg-light-blue text-white cursor-pointer'>Return to Sign In</button>
                                </div>
                            </div>            
                        </div>
                    </div>
                </div>
            </div>
        </>
      
    );
}