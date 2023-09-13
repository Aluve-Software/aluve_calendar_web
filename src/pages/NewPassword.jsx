// import aluveLogo from '../assets/aluve_monochrome_black.png';
import '../index.css';

export default function NewPassword() {

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
                        <p className="mb-2 text-xl text-center font-medium text-black">Reset Password</p>
                    </div>
                    
                        <form action="" className="space-y-8">
                        <div >
                            <p className="pt-8">New Password:</p>
                        
                            <div className="mb-6">
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " placeholder="•••••••••" required/>
                            </div> 

                            <div className="mb-6">
                                <p className="pt-8">Confirm Password:</p>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " placeholder="•••••••••" required/>
                            </div> 
                                                
                        
                            
                            <h2 className="my-4 text-lg font-semibold text-gray-900">Password requirements:</h2>
                                <ul className="max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400">
                                    <li className="flex items-center">
                                        <svg className="w-3.5 h-3.5 mr-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                                        </svg>
                                        At least 10 characters
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="w-3.5 h-3.5 mr-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                                        </svg>
                                        At least one lowercase character
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="w-3.5 h-3.5 mr-2 text-gray-500 dark:text-gray-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                                        </svg>
                                        At least one special character, e.g., ! @ # ?
                                    </li>
                                </ul>

                        
                        
                        
                        
                        
                        </div> 

                        <button type="button" className="w-full px-5 py-2.5 text-sm font-medium text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center ">RESET PASSWORD</button>
                        </form>


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