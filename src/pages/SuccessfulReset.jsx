// import aluveLogo from '../assets/aluve_monochrome_black.png';
import '../index.css';

export default function SuccessfulReset() {

    return (
        <>
            <div className="relative">
                <div className="relative py-4 ">
                    {/* <img src={aluveLogo} loading="lazy" className="w-20 " alt="aluve logo" /> */}

                    <div className="container relative m-auto px-6 text-gray-500 md:px-12 xl:px-40">
                        <div className="display flex-column text-center my-6">
                            <p className="mb-2 text-3xl text-center font-medium text-black">Success!</p>
                            <p className="text-xl">Your password has been reset.</p>  
                        </div>
                        
                        
                        <div className="p-2 py-20 sm:p-16 text-center">
                            <svg className="w-36 mb-4 text-blue-400 mx-auto" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m7 10 2 2 4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                            </svg>

                            <span>
                                <button type="button" className="w-1/2 px-5 py-2.5 text-sm font-medium text-white bg-blue-400 hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center ">Login</button>
                            </span>
                        </div>
               
                


                    <footer className="py-6 sm:p-16 text-center"> 
                        <p>
                          Aluve Software House &copy;
                        | <a href="#" className="text-sm hover:text-blue-700">Contact </a>
                        | <a href="#" className="text-sm hover:text-blue-700">Privacy & Terms</a>  
                        </p>
                        
                    </footer>
                    
            
                
                    </div>
                </div>
            </div>
        </>
    );
}