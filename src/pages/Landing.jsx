import aluveLogo from '../assets/aluve_monochrome_black.png';
import timeImgBlack from '../assets/timeImgBlack.svg';
import '../index.css';

export default function Landing() {
   
    return (
        <>
  {/* FIX: class arrangement and legibility */}
  <div className="relative min-h-screen lg:overflow-hidden overflow-visible justify-center">
    <div className="display flex flex-col bg-white justify-center w-full min-h-screen sm:flex-row flex-grow">
      <div className='bg-lilac lg:bg-white md:bg-white w-full max-w-md sm:w-full flex-grow lg:rounded-border lg:order-2 md:order-2'>
      <img src={ aluveLogo } className='lg:w-full md:w-full w-2/3' alt="aluve logo" />
      </div>

      <div className='bg-white lg:bg-lilac md:bg-lilac w-full   md:pr-24 md:pl-20 md:w-2/3 flex-grow py-16 px-16 lg:pt-24 md:pt-24 lg:pl-32 lg:pr-80 text-left lg:text-white md:text-white sm:text-black sm:order-2 lg:order-1 md:order-1'>
        <div className='flex-grow'>
          <p className='lg:text-6xl font-bold text-4xl md:text-4xl flex-grow'>
            Load shedding impacting your  <br/> team’s<br/> productivity?
          </p>

          <p className='text-2xl md:text-xl lg:pt-16 md:pt-8 lg:pr-16 md:pr-8 leading-none '>
            Find the best time to collaborate with your team. Schedule a meeting. Send messages, plus more. <br/>Ready?
          </p>

          {/* Link buttons to sign in page */}
          <div className='display flex row justify-space-around w-full gap-6 lg:text-2xl sm:text-xl md:text-xl lg:pt-16  md:pt-8'>
            <button className='lg:px-10 py-2 md:px-5 rounded bg-dark-blue'>Sign In</button>
            <button className='lg:px-10 py-2 md:px-5 rounded bg-light-blue'>Register</button>
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