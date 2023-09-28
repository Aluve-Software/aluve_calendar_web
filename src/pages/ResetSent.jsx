import aluveLogo from '../assets/Aluve_monochrome_black 1.svg';
import confusedImg from '../assets/confusedImg.svg'
import Button from '../components/Button';
import '../index.css';

export default function ResetSent() {
  

    return (
        <>
            {/* FIX: class arrangement and legibility */}
            <div className="relative min-h-screen lg:overflow-hidden overflow-visible justify-center">
                <div className="display flex flex-col bg-lilac justify-center w-full min-h-screen sm:flex-row flex-grow">

                    <div className='display flex row justify-center lg:items-start md:items-start items-start bg-lilac w-full lg:w-1/12 sm:w-full flex-grow  md:pb-0 lg:pb-0'>
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

                    {/* White Container */}
                    <div className='bg-white w-full border-t rounded-t-2xl px-6 lg:w-1/4 md:w-full flex-grow lg:pb-16 md:py-16 lg:px-60 md:px-8 lg:pt-0 md:pt-12 text-center lg:text-white md:text-white lg:border-t-0 lg:rounded-t-none lg:rounded-tl-4xl lg:border-tl  sm:text-black'>
                        <div className='flex-grow flex flex-col items-center justify-center'>
                            <img src={aluveLogo} alt="aluve logo text" className='hidden lg:block md:block w-3/4' />
                            <div className='lg:block md:block text-grey'>
                            <p className='font-bold text-3xl lg:text-3xl py-8 lg:pb-4 lg:pt-16 md:py-6'>Request sent!</p>
                            <p className='font-medium text-sm lg:text-lg lg:pb-8 '>Check your email to reset your password.</p>
                            
                            <div className='flex flex-col pt-6 lg:pt-24'>
                                {/* ADD Link to send verify user's email */}
                                <Button 
                                    label="Return to Sign In"
                                    onClick={() => {
                                    // Handle button click action
                                    }}
                                    className=""
                                />
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
      
    );
}