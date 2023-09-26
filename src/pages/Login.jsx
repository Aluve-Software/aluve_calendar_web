import { useState } from 'react';
import backArrow from '../assets/backArrow.svg';
// import aluveLogo from '../assets/aluve_monochrome_black.png';
import aluveLogoNoText from '../assets/aluveBlackNoText.svg'
import timeImgBlack from '../assets/timeImgBlack.svg';
import eyeOpenIcon from '../assets/eyeOpenIcon.svg'
import eyeShutIcon from '../assets/eyeShutIcon.svg'
import '../index.css';

export default function Login() {
    const [passwordVisible, setPasswordVisible] = useState(false);

    // Function to toggle password visibility
    function togglePasswordVisibility() {
        setPasswordVisible(!passwordVisible)
    } 


    return (
        <>
            {/* FIX: class arrangement and legibility */}
            <div className="relative min-h-screen lg:overflow-hidden overflow-visible justify-center">
                <div className="display flex flex-col bg-white justify-center w-full min-h-screen sm:flex-row flex-grow">

                    <div className='display flex row justify-center lg:items-start md:items-start items-start bg-lilac w-full lg:w-1/12 sm:w-full flex-grow lg:rounded-border pt-4 pb-12 md:pb-0 lg:pb-0'>
                        <div className='display flex-col'>
                           {/* ADD functionality to back button */}
                            <div className='display flex row justify-center lg:pb-10 md:pb-10'>
                                <img src={backArrow} className='pl-6 lg:pl-10 md:pl-10 mt-2 mb-2' onClick={() => window.history.back()} alt="back arrow" />
                                <img src={aluveLogoNoText} className='lg:w-1/4 md:w-1/4 w-1/2 mx-auto mt-2 mb-2' alt="aluve logo" />   
                            </div>
                            
                           
                            <div className='hidden lg:block md:block lg:text-white font-space-mono text-center'>
                                <p className='lg:text-lg md:text-sm font-medium'>Get organised with the</p>
                                <span className='lg:text-2xl md:text-2xl font-extrabold'>Calendar App.</span>
                            </div> 
                        </div>
                    </div>


                    <div className='bg-white w-full px-6 lg:w-1/4 md:w-full flex-grow lg:py-16 md:py-16 lg:px-60 md:px-8 lg:pt-8 md:pt-24  text-left lg:text-white md:text-white sm:text-black '>
                        <div className='flex-grow flex flex-col items-center justify-center'>
                       
                            <form action='' className=' lg:block md:block text-grey '>
                                <p className=' font-bold text-3xl lg:text:2xl py-8 lg:py-4 md:py-4'>Welcome Back.</p>

                                {/* LINK to auth functionality */}
                                {/* ADD input and onChange triggers */}
                                <div className='text-sm pb-5'>
                                    <label htmlFor="email" className="">Email Address</label>
                                    <input type="email" id="email" className="bg-white border-2 border-lilac rounded-md text-light-grey w-full p-1.5 lg:p-2.5 md:p-2.25 " placeholder="Enter email address" required />                 
                                </div> 


                                <div className='text-sm pb-5 relative'>
                                    <label htmlFor="password" className=''>Password</label>
                                    <div className='relative flex'>
                                        <input
                                        type={passwordVisible ? 'text' : 'password'}
                                        id="password"
                                        className="bg-white border-2 border-lilac rounded-md text-light-grey w-full p-1.5 lg:p-2.5 md:p-2.25"
                                        placeholder="Enter password"
                                        required
                                        />
                                        <button
                                        type='button'
                                        onClick={togglePasswordVisibility}
                                        className='absolute top-1/2 right-2 transform -translate-y-1/2 focus:outline-none'
                                        >
                                        <img
                                            src={passwordVisible ? eyeOpenIcon : eyeShutIcon}
                                            alt={passwordVisible ? 'Show password' : 'Hide password'}
                                        />
                                        </button>
                                    </div>
                                    {/* ADD link to 'forgot password' page */}
                                    <span className='text-xs text-light-blue hover:underline cursor-pointert' onClick={() => {}}>Forgot Password?</span>
                                    {/* 'text-light-blue hover:underline cursor-pointer' onClick={() => {}} */}

                                </div> 

                                
                            </form>  
                       

                            {/* ADD Link to sign user in */}
                            <div className='flex flex-col items-center gap-4 justify-center w-full lg:text-md text-sm md:text-md font-bold py-4 lg:pt-16 md:pt-8'>
                                <button className='w-full lg:px-10 py-2 lg:py-3 md:py-3 md:px-5 rounded-lg md:rounded lg:rounded bg-light-blue text-white' >
                                    Sign In
                                </button>     
                            </div>

                            {/* ADD functionality to redirect to sign in page */}
                            <p className='text-sm pb-10 lg:text-md md:text-md font-medium text-grey'>
                                Don't have an account? <span className='text-light-blue hover:underline cursor-pointer' onClick={() => {}}>Register</span>
                            </p>
                        </div>
                        
                        {/* FIX: image scaling */}
                        <div className='relative lg:-top-1/2 md:-top-1/2 w-9/12 lg:-left-full md:-left-3/4 inset-full   md:inset-full'>
                            <img
                                src={timeImgBlack}
                                alt="time image black"
                                className='hidden lg:block md:block'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
      
    );
}