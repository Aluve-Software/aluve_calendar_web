import aluveLogo from '../assets/aluve_monochrome_black.png';
import timeImgBlack from '../assets/timeImgBlack.svg';
import timeImgWhite from '../assets/timeImgWhite.svg';
import '../index.css';

export default function Landing() {
   
    return (
        <>
  {/* FIX: class arrangement and legibility */}
  <div className="relative min-h-screen lg:overflow-hidden overflow-visible justify-center">
    <div className="display flex flex-col bg-white justify-center w-full min-h-screen sm:flex-row flex-grow">
        <div className='bg-lilac lg:bg-white md:bg-white w-full max-w-md sm:w-full flex-grow lg:rounded-border lg:order-2 md:order-2 pb-16  md:pb-0 lg:pb-0'>
            <img src={ aluveLogo } className='lg:w-3/4 md:w-3/4 w-1/2 mx-auto' alt="aluve logo" />
           
            
        </div>
            <div className='lg:hidden flex-grow h-24'>
                <img src={ timeImgWhite } className='lg:hidden md:hidden w-3/4 mx-auto relative -top-28  ' alt="time image white" />
            </div>
        

      <div className='bg-white lg:bg-lilac md:bg-lilac w-full pr-6 pl-6 md:pr-24 md:pl-20 md:w-2/3 flex-grow lg:py-16 md:py-16 lg:px-16 md:px-16 lg:pt-24 md:pt-24 lg:pl-32 lg:pr-80 text-left lg:text-white md:text-white sm:text-black sm:order-2 lg:order-1 md:order-1'>
        <div className='flex-grow'>
          <p className='lg:text-6xl font-bold text-2xl md:text-4xl flex-grow leading-none '>
            Load shedding impacting your  <br/> team’s<br/> productivity?
          </p>

          <p className='text-1xl md:text-xl lg:pt-16 md:pt-8 pr-6 pt-4 lg:pr-16 md:pr-8 leading-none '>
            Find the best time to collaborate with your team. Schedule a meeting. Send messages, plus more. <br/>Ready?
          </p>

          {/* Link buttons to sign in page */}
          <div className='display flex row justify-space-around w-full text-white gap-6 lg:text-2xl sm:text-xl md:text-xl py-4 lg:pt-16  md:pt-8'>
            <button className='px-5 lg:px-10 py-2 md:px-5 rounded-lg md:rounded lg:rounded bg-dark-blue'>Sign In</button>
            <button className='px-5 lg:px-10 py-2 md:px-5 rounded-lg md:rounded lg:rounded bg-light-blue'>Register</button>
          </div>
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