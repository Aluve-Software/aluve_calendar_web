import React, { useState, useRef, useEffect }from "react";
import { useForm } from "react-hook-form";
import { AiFillEyeInvisible, AiFillEye} from "react-icons/ai";
import axios from "axios";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { refreshTokenSetup } from '../utils/refreshToken';
import { gapi } from "gapi-script";
import UserFacebookLogin from "../pages/UserFacebookLogin";
import { useNavigate } from "react-router-dom";

const clientId = "334355193497-tr5ah0pftcc881t137rlupi0rsvn5sr3.apps.googleusercontent.com";

export default function Login() {
  const {
    register,
    setValue,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm({
      mode: "onTouched"
  });

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: 'email',
        plugin_name: 'aluve-calendar-web'
      })
    };
    gapi.load("client:auth2", start);
  })

  const [user, setUser] = useState();
  const [data, setData] = useState();
  const navigate = useNavigate();

  const responseGoogle = (response) => {
      console.log(response);
      setUser(response);
      setData(response);
  };

  const logout = () => {
      console.log('logged out')
      setUser();
  };

  const onSuccess = (res) => {
    console.log('Login Success: currentUser:', res.profileObj);
    alert(
      `Logged in successfully welcome ${res.profileObj.name} 😍. \n See console for full profile object.`
    );
    // navigate("/")
    refreshTokenSetup(res);
  };

  const onFailure = (res) => {
    console.log('Login failed: res:', res);
    alert(
      `Failed to login. 😢 Please ping this to repo owner twitter.com/sivanesh_fiz`
    );
  };


  const [email, setEmail] = useState();
  // const [password, setPassword] = useState();
  

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
        const response = await axios.post("http://hwsrv-1097014.hostwindsdns.com/calendar/login",
            JSON.stringify({ email, password }),
            {
                headers: { 'Content-Type': 'application/json', 'SameSite': 'None' },
                withCredentials: false
            }
        );
        console.log(response.data);
        console.log(response.accessToken);
        console.log(JSON.stringify(response))
        setSuccess(true);
        //clear state and controlled inputs
        //need value attrib on inputs for this
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
          <h1 className="text-black text-center text-3xl">Login</h1>
        </div>
      <form id="login" name="login" onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-lg rounded-md p-5 md:p-10 flex flex-col w-11/12 max-w-lg group">
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
        {/* Submit SEction */}
        <div className="flex items-center justfy-center mt-12">
            <button className="h-10 w-full rounded-lg font-bold bg-purple-900 text-4">Login</button>
        </div>
      </form>
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