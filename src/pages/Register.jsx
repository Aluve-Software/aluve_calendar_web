import React, { useState, useRef, useEffect }from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AiFillEyeInvisible, AiFillEye} from "react-icons/ai";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import LoginGoogle from "../pages/LoginGoogle";
// import LogoutGoogle from "../pages/LogoutGoogle";
// import { GoogleLogout } from "../../node_modules/react-google-login";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { refreshTokenSetup } from '../utils/refreshToken';
import { gapi } from "gapi-script";
import { Parse } from "react-parse";
import UserFacebookLogin from "../pages/UserFacebookLogin";

const clientId = "334355193497-tr5ah0pftcc881t137rlupi0rsvn5sr3.apps.googleusercontent.com";

export default function Register() {
  const {
    register,
    setValue,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm({
      mode: "onTouched"
  });

  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState();
  const [data, setData] = useState();
  // Start of Google Login
  useEffect(() => {
    function start() {
      gapi.auth2.init({
        clientId: clientId,
        scope: "email",
        plugin_name: "aluve-calendar-web"
      })
    };
    gapi.load("client:auth2", start);
  })

const responseGoogle = (response) => {
    console.log(response);
    setUser(response.Qt);
    setData(response.Qt);
};

const logout = () => {
    console.log('logged out');
    setUser();
    navigate("/login", { replace: true })
};

const onSuccess = (res) => {
  console.log('Login Success: currentUser:', res.profileObj);
  alert(
    `Logged in successfully welcome ${res.profileObj.name} 😍. \n See console for full profile object.`
  );
  refreshTokenSetup(res);
  navigate("/", { replace: true })
};

const onFailure = (res) => {
  console.log('Login failed: res:', res);
  alert(
    `Failed to login. 😢 Please ping this to repo owner twitter.com/sivanesh_fiz`
  );
  navigate("/login", { replace: true })
};


// Retrieving Current User
useEffect(() => {
    localStorage.setItem('data', JSON.stringify(data));
}, [data]);
// End of Google login

  const [user, setUser] = useState();

  const [email, setEmail] = useState();
  // const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [ErrMsg, setErrMsg] = useState();
  const errRef = useRef();

  // handle password eye
  const [passwordEye, setPasswordEye] = useState(false);
  // handle confirm password
  const [confirmPasswordEye, setConfirmPasswordEye] = useState(false);
  
  const handlePasswordClick = () => {
      setPasswordEye(!passwordEye)
  }

  const handleConfirmPasswordClick = () => {
      setConfirmPasswordEye(!confirmPasswordEye)
  }

  // Check passord
  const password = watch("password")

  // API call
  const onSubmit = async (e) => {
    e.preventDefault;
    
    try {
        const response = await axios.post("http://hwsrv-1097014.hostwindsdns.com/calendar/signup",
            JSON.stringify({ email, password }),
            {
                headers: { 'Content-Type': 'application/json' },
                withCredentials: false
            }
        );
        console.log(response.data);
        console.log(response.accessToken);
        console.log(JSON.stringify(response))
        setSuccess(true);
        //clear state and controlled inputs
        //need value attrib on inputs for this
        setValue('name', "");
        setValue('number', "");
        setValue('email', "");
        setValue('password', "");
        setValue('confirmPassword', "");
    } catch (err) {
        if (!err.response) {
            setErrMsg('No Server Response');
        } else  {
            console.log(JSON.stringify(err))
            setErrMsg('Username Taken');
        }
        //clear state and controlled inputs
        //need value attrib on inputs for this
        setEmail('');
        // setPassword('');
        setConfirmPassword('');
    }
}
  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden mx-60">
        <div className="bg-purple">
          <h1 className="text-black text-center text-2xl">Signup to create account</h1>
        </div>
      <form id="signup" name="signup" onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-lg rounded-md p-5 md:p-10 flex flex-col w-11/12 max-w-lg group">
        {/* Name Section */}
        <div className="mx-5 relative">
          <input
            id="name"
            name="name"
            autoComplete="off"
            className={`w-full rounded border border-gray-300 bg-inherit p-3 shadow shadow-gray-100 mt-2 focus:border-blue-500 ${errors.password && "focus:ring-red-500 border-red-500 text-black"}`}
            placeholder="Enter person name"
            {...register("name", { required: "Name is required",
            pattern: {
                value:  /^[A-Za-z].{5,20}$/,
                message: "Name must contain Letters only"
            }
         })}

          />
          {errors.name && <span className="text-sm text-red-500 peer-invalid:visible">{errors.name.message}</span>}
        </div>
        {/* Email Section */}
        <div className="mx-5 relative">
          <input
          id="email"
          name="email"
          autoComplete="off"
          className={`w-full rounded border border-gray-300 bg-inherit p-3 shadow shadow-gray-100 mt-2 focus:border-blue-500 text-black ${errors.name && "focus:ring-red-500 border-red-500 text-black"}`}
          placeholder="Enter Email"
            {...register("email", { required: "Email is required",
            pattern: {
                value:  /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/,
                message: "Enter valid email"
            }
            })}
            />
            {errors.email && <span className="text-sm text-red-500">{errors.email.message}</span>}
        </div>
        {/* Contact Numbeer Section */}
        <div className="mx-5 relative">
          <input
            id="number"
            name="name"
            autoComplete="off"
            className={`w-full rounded border border-gray-300 bg-inherit p-3 shadow shadow-gray-100 mt-2 focus:border-blue-500 text-black ${errors.number && "focus:ring-red-500 border-red-500 text-black"}`}
            type="text"
            placeholder="Enter your phone number"
            {...register("number", {
              minLength: 6,
              maxLength: 12,
              required: "Contact Number is required",
              pattern: {
                value:  /^[0-9].{10,12}$/,
                message: "Number must contain only digits"
              }
            })}
          />
          {errors.number && <span className="text-sm text-red-500">{errors.number.message}</span>}
        </div>
        {/* Password Section */}
        <div className="mx-5 relative">
          <input
            id="password"
            name="password"
            autoComplete="off"
            type={(passwordEye === false) ? "password" : "text"}
            className={`w-full rounded border border-gray-300 bg-inherit p-3 shadow shadow-gray-100 mt-2 focus:border-blue-500 text-black ${errors.password && "focus:ring-red-500 border-red-500 text-black"}`}
            id="password"
            name="password"
            placeholder="Enter password"
            {...register("password", {
              required: "Password is required",
              pattern: {
                value: /^(?=.*[a-zA-Z0-9])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/,
                message: "Password must contain at least one Capital letter, numeric value, special character and small letters"
                },
                miniLength : {
                    value: 8,
                    message: "minimum Required length is 8"
                },
                maxLength: {
                    value: 20,
                    message: "Maximum length is 20"
                }
            })}
          />
          {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
          {/* Eye section */}
          <div className="text-2xl bg-black absolute top-5 right-1">
            {(passwordEye === false)? <AiFillEyeInvisible onClick={handlePasswordClick}/> :  <AiFillEye onClick={handlePasswordClick}/>}
                
                
            </div>
          
        </div>
        {/* Confirm Password */}
        <div className="mx-5 relative">
          <input
            id="confirmPassword"
            name="confirmPassword"
            autoComplete="off"
           type={(confirmPasswordEye === false) ? "password" : "text"}
           className={`w-full rounded border border-gray-300 bg-inherit p-3 shadow shadow-gray-100 mt-2 focus:border-blue-500 text-black ${errors.confirmPassword && "focus:ring-red-500 border-red-500 text-black"}`}
            placeholder="Enter Confirm password"
            onPaste={(e) => {
                e.preventDefault()
                return false
            }}
            {...register("confirmPassword", {
              required: "Confirm Password is required",
              validate: (value) => 
                  value === password || "Confirm Password do not match with entered password"
              
            })}
          />
          {errors.confirmPassword && <span className="text-red-500 text-sm">{errors.confirmPassword.message}</span>}
          {/* Confirm Password Eye section */}
          <div className="text-2xl bg-black absolute top-5 right-1">
            {(confirmPasswordEye === false) ? <AiFillEyeInvisible onClick={handleConfirmPasswordClick}/> :  <AiFillEye onClick={handleConfirmPasswordClick}/>}
                
                
            </div>
          
        </div>
        {/* Submit SEction */}
        <div className="flex items-center justfy-center mt-12">
            <input
            type="submit"
            value="submit"
            className="h-10 w-full rounded-lg font-bold bg-purple-900 text-4"
            />
        </div>
      </form>
      <div className="mt-4 text-grey-600">
        Already have an account?{" "}
        <span>
            <a className="text-purple-600 hover:underline" href="/login">
                Log in with email and password
            </a>
        </span>
      </div>
      <div className="mt-4 text-purple-600 text-center">
        OR{" "}
      </div>
      {/* Google Login Integration */}
      <div>
        <div>
        <GoogleLogin
            clientId={clientId}
            buttonText="LOGIN WITH GOOLE"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
            style={{ marginTop: '100px' }}
            isSignedIn={true}
            cookiePolicy='single-host-origin'
            shape="rectangular"
        />
        </div>
        </div>
        {/* End of Google Login Integration */}
        {/* Facebook Login */}
        <div>
            <UserFacebookLogin />
        </div>
    </div>
  );
}