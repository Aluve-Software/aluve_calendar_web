import aluveLogo from '../assets/aluve_monochrome_black.png';
import timeImgBlack from '../assets/timeImgBlack.svg';
import '../index.css';

export default function Landing() {
   
    return (
        <>
            <div className="relative h-screen overflow-hidden">
                <div className="display flex flex-col bg-white justify-center w-full h-screen sm:flex-row ">
                    <div className='bg-lilac w-full flex-grow py-24 pl-32 pr-80 text-left text-white'>
                        <div className=''>
                        <p className='text-6xl font-bold  '>
                            Load shedding impacting your  <br/> team’s<br/> productivity?
                        </p>

                        <p className='text-2xl pt-16 pr-48 leading-none'>
                            Find the best time to collaborate with your team. Schedule a meeting. Send messages, plus more. <br/>Ready?
                        </p>

                        <div className='display flex row justify-space-around w-full gap-6 text-2xl pt-16'>
                            <button className='px-10 py-2 rounded bg-dark-blue'>Sign In</button>
                            <button className='px-10 py-2 rounded bg-light-blue'>Register</button>
                        </div>
                        </div>
                        
                        <div className='relative -top-3/4  left-3/4  inset-1/4'>
                           <img src={ timeImgBlack } width={"800px"}  alt="time image black" /> 
                        </div>
                        
                    </div>

                    {/* FIX: top and bottom left border radius needs to be applied */}
                    <div className='bg-white w-full max-w-md sm:w-1/2 flex-grow rounded-border'>
                        <img src={ aluveLogo } width={"300px"}  alt="aluve logo" />
                    </div>
                </div>

            </div>
        </>
    );
}