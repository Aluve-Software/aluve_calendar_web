import aluveLogo from '../assets/Aluve_monochrome_black 1.svg';
import confusedImg from '../assets/confusedImg.svg'
import '../index.css';

export default function ForgotPassword() {
  

    return (
        <>
            {/* FIX: class arrangement and legibility */}
            <div className="relative min-h-screen lg:overflow-hidden overflow-visible justify-center">
                <div className="display flex flex-col bg-lilac justify-center w-full min-h-screen sm:flex-row flex-grow">

                    <div className='display flex row justify-center lg:items-start md:items-start items-start bg-lilac w-full lg:w-1/12 sm:w-full flex-grow lg:rounded-border pt-4 pb-12 md:pb-0 lg:pb-0'>
                        <div className='display flex-col'>
                            <div className='display flex row justify-center lg:pb-10 md:pb-10'>
                                <img 
                                    src={confusedImg} 
                                    alt="confused image" 
                                    className='hidden lg:block md:block transform translate-x-1/2 lg:translate-x-1/3 md:translate-x-1/3'
                                    style={{ maxWidth: '110%', width: '700px' }}
                                />

                                {/*same image in mobile view */}
                                <div className='display flex justify-center align-center w-3/4'>
                                <img 
                                    src={confusedImg} 
                                    alt="confused image" 
                                    className='block lg:hidden md:hidden transform translate-x-0 '
                                    style={{ maxWidth: '110%', width: '700px' }}
                                />
                                </div>
                            </div>

                        </div>
                    </div>


                    <div className='bg-white w-full border-t rounded-t-2xl px-6 lg:w-1/4 md:w-full flex-grow lg:pb-16 md:py-16 lg:px-60 md:px-8 lg:pt-0 md:pt-12 text-center lg:text-white md:text-white lg:border-t-0 lg:rounded-t-none lg:rounded-tl-4xl lg:border-tl  sm:text-black'>
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
                            <p className='text-sm py-8 lg:text-lg md:text-md font-medium text-grey'>
                                Don't have an account? <span className='font-bold text-light-blue hover:underline cursor-pointer' onClick={() => {}}>Register</span>
                            </p>
                        </div>
                        
                        
                    </div>
                </div>
            </div>
        </>
      
    );
}