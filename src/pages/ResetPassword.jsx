// import aluveLogo from '../assets/aluve_monochrome_black.png';
import '../index.css';

export default function ResetPassword() {

    return (
        <>
            <div className="relative">
            <div className="relative py-4 ">
                <svg className="w-6 h-6 text-gray-800 m-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M13 5H1m0 0 4 4M1 5l4-4"/>
                </svg>
                {/* <img src={aluveLogo} loading="lazy" className="w-20 " alt="aluve logo" /> */}
            

            <div className="container relative m-auto px-6 text-gray-500 md:px-12 xl:px-40">
                <div className="m-auto space-y-8 md:w-8/12 lg:w-6/12 xl:w-6/12">
                <div className="rounded-3xl border-2 bg-white border-blue-400 shadow-2xl shadow-gray-500/10 backdrop-blur-2xl">
                    <div className="p-2 py-12 sm:p-16">
                    
                    <div className='display column border-b border-gray-400 w-full'>
                        <p className="mb-1 text-xl text-center font-medium text-black">Forgot Password?</p>
                        <p className="mb-4 text-sm text-center font-light text-gray-400">No worries, we got you :)</p>
                    </div>
                    
                        <form action="" className="space-y-8">
                        <div >
                            <p className="pt-8">Email:</p>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">Email address</label>

                            <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="john.doe@company.com" required />                    
                        </div> 

                        <button type="button" className="w-full px-5 py-2.5 text-sm font-medium text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center ">SUBMIT</button>
                        </form>


                        <div className="text-black text-sm text-center pt-5">Return to <a href="#" className="text-sm hover:text-blue-700">Login</a></div>
                    </div>
                </div>
                <div className="footer space-x-4 text-center text-gray-500">
                    <footer> 
                        <p>
                          Aluve Software House &copy;
                        | <a href="#" className="text-sm hover:text-blue-700">Contact </a>
                        | <a href="#" className="text-sm hover:text-blue-700">Privacy & Terms</a>  
                        </p>
                        
                    </footer>
                    
                </div>
                </div>
            </div>
            </div>
            </div>
        </>
    );
}