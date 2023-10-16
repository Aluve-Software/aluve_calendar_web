import React,{ useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from "react-router-dom"
import Layout from "../components/Layout"
  
function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [validationErrors, setValidationErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
 
    useEffect(()=>{
        if(localStorage.getItem('token') != "" && localStorage.getItem('token') != null){
            navigate("/dashboard");
        }
        console.log(localStorage.getItem('token'))
    },[])
 
    const loginAction = (e) => {
        setValidationErrors({})
        e.preventDefault();
        setIsSubmitting(true)
        let payload = {
            email:email,
            password:password,
        }
        // API Call
        // set configurations
        const configuration = {
            method: "POST",
            url: "http://hwsrv-1097014.hostwindsdns.com:8080/calendar/login",
            body: JSON.stringify(
                {
                    name,    
                    email,
                    password
                }
            ),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        };
        // make the API call
        axios(configuration)
        .then((response) => {console.log(response.json())})
        .catch((error) => {console.log("Something went wrong");})
    }
 
     
    return (
        <Layout>
            <div className="row justify-content-md-center mt-5">
                <div className="col-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title mb-4">Sign In</h5>
                            <form onSubmit={(e)=>{loginAction(e)}}>
                                {Object.keys(validationErrors).length != 0 &&
                                     <p className='text-center '><small className='text-danger'>Incorrect Email or Password</small></p>
                                }
                                
                                <div className="mb-3">
                                    <label 
                                        htmlFor="email"
                                        className="form-label">
                                            Email address
                                    </label>
                                    <input 
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        name="email"
                                        value={email}
                                        onChange={(e)=>{setEmail(e.target.value)}}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label 
                                        htmlFor="password"
                                        className="form-label">Password
                                    </label>
                                    <input 
                                        type="password"
                                        className="form-control"
                                        id="password"
                                        name="password"
                                        value={password}
                                        onChange={(e)=>{setPassword(e.target.value)}}
                                    />
                                </div>
                                <div className="d-grid gap-2">
                                    <button 
                                        disabled={isSubmitting}
                                        type="submit"
                                        className="btn btn-primary btn-block">Login</button>
                                    <p className="text-center">Don't have account? <Link to="/signup">Register here</Link></p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
   
export default Login;
