import aluveLogo from '../assets/aluve_monochrome_black.png';
import '../index.css';

export default function Landing() {
   
    return (
        <>
            <div className="relative h-screen ">
                <div className="display flex flex-col bg-white justify-center w-full h-screen sm:flex-row md">
                    <div className='bg-pink-400 w-full'>
                        <h2>
                            Load shedding impacting your team’s productivity?
                        </h2>

                        <span>
                            This can be some info that tells the user a little bit about what the app can do for them. 
                            Sells makes them excited to sign up. Bla bla.
                        </span>

                        <div className='display flex row justify-space-around w-full'>
                            <button>Sign In</button>
                            <button>Register</button>
                        </div>
                        
                        <span>image</span>
                    </div>

                    <div className='bg-blue-400 w-full max-w-md sm:mx-full'>
                    <img src={ aluveLogo } width={"300px"}  alt="aluve logo" />
                    </div>
                </div>

            </div>
        </>
    );
}