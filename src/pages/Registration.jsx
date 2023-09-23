import backArrow from '../assets/backArrow.svg';
// import aluveLogo from '../assets/aluve_monochrome_black.png';
import aluveLogoNoText from '../assets/aluveBlackNoText.svg'
import timeImgBlack from '../assets/timeImgBlack.svg';
import timeImgWhite from '../assets/timeImgWhite.svg';
import '../index.css';

export default function Registration() {
   
    return (
        <>
            {/* FIX: class arrangement and legibility */}
            <div className="relative min-h-screen lg:overflow-hidden overflow-visible justify-center">
                <div className="display flex flex-col bg-white justify-center w-full min-h-screen sm:flex-row flex-grow">

                    <div className='display flex row justify-center lg:items-start md:items-start items-start bg-lilac w-full max-w-lg sm:w-full flex-grow lg:rounded-border pt-4 pb-12 md:pb-0 lg:pb-0'>
                        <div className='display flex-col'>
                           {/* ADD functionality to back button */}
                            <div className='display flex row justify-center lg:pb-10 md:pb-10'>
                                <img src={backArrow} className='pl-6 lg:pl-10 md:pl-10 mt-2 mb-2' onClick={() => window.history.back()} alt="back arrow" />
                                <img src={aluveLogoNoText} className='lg:w-1/4 md:w-3/4 w-1/2 mx-auto mt-2 mb-2' alt="aluve logo" />   
                            </div>
                            
                           
                            <div className='hidden lg:block md:block lg:text-white font-space-mono text-center'>
                                <p className='lg:text-lg md:text-sm font-medium'>Get organised with the</p>
                                <span className='lg:text-2xl md:text-2xl font-extrabold'>Calendar App.</span>
                            </div> 
                        </div>
                    </div>

                   

                    {/* time image in mobile view only */}
                    <div className='lg:hidden flex-grow h-24'>
                        <img src={ timeImgWhite } className='lg:hidden md:hidden w-3/4 mx-auto relative -top-28  ' alt="time image white" />
                    </div>
                    

                    <div className='bg-white w-full pr-6 pl-6 md:pr-24 md:pl-20 lg:w-1/4 md:w-1/4 flex-grow lg:py-16 md:py-16 lg:px-60 md:px-16 lg:pt-8 md:pt-24  text-left lg:text-white md:text-white sm:text-black '>
                        <div className='flex-grow flex flex-col items-center justify-center'>
                            <div className='hidden lg:block md:block text-grey '>
                                <p className=' font-bold text-2xl lg:text:2xl pb-10'>Create your account</p>

                                {/* LINK to auth functionality */}
                                {/* ADD input and onChange triggers */}
                                <div className='text-sm pb-5'>
                                    <label htmlFor="email" className="">Email Address</label>
                                    <input type="email" id="email" className="bg-white border-2 border-lilac rounded-md text-light-grey w-full p-2.5" placeholder="Enter email address" required />                 
                                </div> 


                                <div className='text-sm pb-5'>
                                    <label htmlFor="password" className=''>Password</label>
                                    <input type="password" id="password" className="bg-white border-2 border-lilac rounded-md text-light-grey w-full p-2.5" placeholder="Enter password" required/>
                                    <span className='text-xs'>* Your password must be at least 8 characters including a number, a symbol, a lowercase and uppercase letter.</span>
                                </div> 

                                <div className='text-sm '>
                                    <label htmlFor="password" className=''>Confirm Password</label>
                                    <input type="password" id="password" className="bg-white border-2 border-lilac rounded-md text-light-grey w-full p-2.5" placeholder="Enter password again" required/>
                                </div> 
                            </div>  

                            {/* Link buttons to actions and pages */}
                            <div className='flex flex-col items-center gap-4  justify-center w-full  lg:text-md text-sm md:text-md font-bold py-4 lg:pt-16 md:pt-8'>
                                <button className='w-full lg:px-10 py-2 lg:py-3 md:py-3 md:px-5 rounded-lg md:rounded lg:rounded bg-light-blue text-white'>Register With Email</button>
                                <p className='text-grey'>OR</p>
                                <button className='w-full lg:px-10 py-2 lg:py-3 md:py-3 md:px-5 rounded-lg md:rounded lg:rounded border-2 border-bright-orange text-bright-orange'>Register With Google</button>
                                <button className='w-full lg:px-10 py-2 lg:py-3 md:py-3 md:px-5 rounded-lg md:rounded lg:rounded border-2 border-light-blue text-light-blue'>Register With Facebook</button>
                            </div>

                            {/* ADD functionality to redirect to sign in page */}
                            <p className='text-sm lg:text-md md:text-md font-medium text-grey'>
                                Already have an account? <span className='text-light-blue hover:underline cursor-pointer' onClick={() => {}}>Sign in.</span>
                            </p>
                        </div>
                        
                        {/* FIX: image scaling */}
                        <div className='relative lg:-top-1/2  w-9/12 lg:-left-3/4 inset-full  md:-top-64 md:inset-full md:left-full'>
                            <img
                                src={timeImgBlack}
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