import backArrow from '../assets/backArrow.svg';
import aluveLogo from '../assets/aluve_monochrome_black.png';
import timeImgBlack from '../assets/timeImgBlack.svg';
import timeImgWhite from '../assets/timeImgWhite.svg';
import '../index.css';

export default function Registration() {
   
    return (
        <>
            {/* FIX: class arrangement and legibility */}
            <div className="relative min-h-screen lg:overflow-hidden overflow-visible justify-center">
                <div className="display flex flex-col bg-white justify-center w-full min-h-screen sm:flex-row flex-grow">
                    <div className='display flex row justify-center items-center align-top bg-lilac lg:bg-white md:bg-white w-full max-w-md sm:w-full flex-grow lg:rounded-border lg:order-2 md:order-2 pb-16  md:pb-0 lg:pb-0'>
                        {/* ADD functionality to back button */}
                        <img src={backArrow } className='pl-6' onClick={() => window.history.back()} alt="back arrow" />
                        <img src={ aluveLogo } className='lg:w-3/4 md:w-3/4 w-1/2 mx-auto' alt="aluve logo" />
                    </div>

                    {/* time image in mobile view only */}
                    <div className='lg:hidden flex-grow h-24'>
                        <img src={ timeImgWhite } className='lg:hidden md:hidden w-3/4 mx-auto relative -top-28  ' alt="time image white" />
                    </div>
                    

                    <div className='bg-white lg:bg-lilac md:bg-lilac w-full pr-6 pl-6 md:pr-24 md:pl-20 md:w-2/3 flex-grow lg:py-16 md:py-16 lg:px-16 md:px-16 lg:pt-24 md:pt-24 lg:pl-32 lg:pr-80 text-left lg:text-white md:text-white sm:text-black sm:order-2 lg:order-1 md:order-1'>
                        <div className='flex-grow'>
                            

                            {/* Link buttons to actions and pages */}
                            <div className='flex flex-col items-center gap-5 lg:flex-row md:flex-row justify-center w-full  lg:text-2xl text-sm md:text-xl font-bold py-4 lg:pt-16 md:pt-8'>
                                <button className='w-full lg:px-10 py-2 md:px-5 rounded-lg md:rounded lg:rounded bg-light-blue text-white'>Register With Email</button>
                                <button className='w-full lg:px-10 py-2 md:px-5 rounded-lg md:rounded lg:rounded border-2 border-bright-orange text-bright-orange'>Register With Google</button>
                                <button className='w-full lg:px-10 py-2 md:px-5 rounded-lg md:rounded lg:rounded bg-light-blue text-white'>Register With Facebook</button>
                            </div>

                            {/* ADD functionality to redirect to sign in page */}
                            <p className='text-sm font-medium text-gray-400'>
                                Already have an account? <span className='text-blue-500 hover:underline cursor-pointer' onClick={() => {}}>Sign in.</span>
                            </p>
                        </div>
                        
                        <div className='relative lg:-top-96 inset-full md:-top-64 md:inset-full md:left-full'>
                            <img
                                src={timeImgBlack}
                                width={"600px"}
                                alt="time image black"
                                className='hidden lg:block'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
      
    );
}