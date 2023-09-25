import { useState } from 'react';
import backArrow from '../assets/backArrow.svg';
// import aluveLogo from '../assets/aluve_monochrome_black.png';
import aluveLogoNoText from '../assets/aluveBlackNoText.svg'
import timeImgBlack from '../assets/timeImgBlack.svg';
import timeImgWhite from '../assets/timeImgWhite.svg';
import eyeOpenIcon from '../assets/eyeOpenIcon.svg'
import eyeShutIcon from '../assets/eyeShutIcon.svg'
import '../index.css';

export default function Registration() {
    const [showForm, setShowForm] = useState(false);
    const [passwordVisible, setPasswordVisible] = useState(false);

    // Function to toggle the form visibility
    function toggleForm() {
      setShowForm(!showForm);
    }

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

                   

                    {/* Time image only visible in mobile view and conditionally rendered when form is toggled */}
                    <div className={`lg:hidden md:hidden md:h-0 flex-grow ${showForm ? 'h-0' : 'h-24'}`}>
                        {showForm ? null : (
                            <img src={timeImgWhite} className='md:hidden w-3/4 max-w-3/4 mx-auto relative -top-20 py:10' alt="time image white" />
                        )}
                    </div>
                    

                    <div className='bg-white w-full px-6 lg:w-1/4 md:w-full flex-grow lg:py-16 md:py-16 lg:px-60 md:px-8 lg:pt-8 md:pt-24  text-left lg:text-white md:text-white sm:text-black '>
                        <div className='flex-grow flex flex-col items-center justify-center'>
                            {showForm && (
                            <form action='' className=' lg:block md:block text-grey '>
                                <p className=' font-bold text-3xl lg:text:2xl py-8 lg:py-4 md:py-4'>Create your account.</p>

                                {/* LINK to auth functionality */}
                                {/* ADD input and onChange triggers */}
                                <div className='text-sm pb-5'>
                                    <label htmlFor="email" className="">Email Address</label>
                                    <input type="email" id="email" className="bg-white border-2 border-lilac rounded-md text-light-grey w-full p-1.5 lg:p-2.5 md:p-2.25 " placeholder="Enter email address" required />                 
                                </div> 


                                <div className='text-sm pb-5'>
                                    <label htmlFor="password" className=''>Password</label>
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
                                        className='absolute right-2 top-1/2 transform -translate-y-1/2 focus:outline-none'
                                    >
                                        <img 
                                            src={passwordVisible ? eyeShutIcon : eyeOpenIcon} 
                                            alt={passwordVisible ? 'Hide password' : 'Show password'} 
                                        />
                                    </button>
                                    


                                    <span className='text-xs leading-tight'>* Your password must be at least 8 characters including a number, a symbol, a lowercase and uppercase letter.</span>
                                </div> 

                                <div className='text-sm '>
                                    <label htmlFor="password" className=''>Confirm Password</label>
                                    <input type="password" id="password" className="bg-white border-2 border-lilac rounded-md text-light-grey w-full  p-1.5 lg:p-2.5 md:p-2.25" placeholder="Enter password again" required/>
                                </div> 
                            </form>  
                            )}

                            {/* Link buttons to actions and pages */}
                            <div className='flex flex-col items-center gap-4  justify-center w-full  lg:text-md text-sm md:text-md font-bold py-4 lg:pt-16 md:pt-8'>
                                {/* add onClick for mobile view to bring up input files */}
                                <button className='w-full lg:px-10 py-2 lg:py-3 md:py-3 md:px-5 rounded-lg md:rounded lg:rounded bg-light-blue text-white' onClick={toggleForm}>Register With Email</button>
                                <p className='text-grey'>OR</p>
                                <button className='w-full lg:px-10 py-2 lg:py-3 md:py-3 md:px-5 rounded-lg md:rounded lg:rounded border-2 border-bright-orange text-bright-orange'>Register With Google</button>
                                <button className='w-full lg:px-10 py-2 lg:py-3 md:py-3 md:px-5 rounded-lg md:rounded lg:rounded border-2 border-light-blue text-light-blue'>Register With Facebook</button>
                            </div>

                            {/* ADD functionality to redirect to sign in page */}
                            <p className='text-sm pb-10 lg:text-md md:text-md font-medium text-grey'>
                                Already have an account? <span className='text-light-blue hover:underline cursor-pointer' onClick={() => {}}>Sign in.</span>
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