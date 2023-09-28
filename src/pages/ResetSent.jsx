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

                    <div className='display flex row justify-center lg:items-start md:items-start items-start bg-lilac w-full lg:w-1/12 sm:w-full flex-grow lg:rounded-border pt-4 pb-12 md:pb-0 lg:py-24'>
                        <div className='display flex-col'>
                            <img src={aluveLogo} alt="aluve logo text" className='w-1/2 lg:hidden md:hidden' />
                        </div>
                    </div>


                    <div className='bg-white w-full px-6 lg:w-1/4 md:w-full flex-grow lg:pb-16 md:py-16 lg:px-60 md:px-8 lg:pt-0 md:pt-12  text-center lg:text-white md:text-white sm:text-black '>
                        <div className='flex-grow flex flex-col gap-6 lg:py-24 items-center justify-center'>
                            <img src={aluveLogo} alt="aluve logo text" className='hidden lg:block md:block w-3/4 lg:w-1/2 md:w-1/2' />
                            <p className='font-bold text-3xl lg:text-3xl text-grey'>Request sent!</p>
                            <p className='font-medium text-sm lg:text-lg lg:pb-8 text-grey'>Check your email to reset your password.</p>
                            
                            {/* ADD Link to re-route user to login */}
                            <button className='w-full font-medium lg:px-10 py-2 lg:w-4/5 md:w-3/4 lg:py-3 md:py-3 md:px-5 rounded-lg md:rounded lg:rounded bg-light-blue text-white cursor-pointer'>Return to Sign In</button>
                        </div>
                        
                        {/* FIX: image scaling */}
                        <div className='relative  lg:-top-1/2 md:-top-1/2 lg:-left-full  md:-left-3/4 inset-full  md:inset-full'>
                            <img
                                src={confusedImg}
                                alt="confused image black"
                                className='hidden lg:block md:block'
                                style={{ maxWidth: 'none', height: 'auto', width: '700px' }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
      
    );
}