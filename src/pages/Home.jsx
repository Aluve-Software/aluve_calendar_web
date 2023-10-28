import React,{ useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import { Parse } from "react-parse";

const currentUser = localStorage.getItem('data');
console.log(JSON.stringify(currentUser));

function Home() {
    const navigate = useNavigate();
    const [user, setUser] = useState({})
 
    useEffect(()=>{
        if(localStorage.getItem('token') == "" || localStorage.getItem('token') == null){
            navigate("/");
        }else {
            getUser()
        }
    },[])
 
    const getUser = () => {
        axios.get('/api/user', { headers:{Authorization: 'Bearer ' + localStorage.getItem('token')}})
        .then((r) => {
           setUser(r.data)
        })
        .catch((e) => {
            console.log(e)
        });
    }
 
    const logoutAction = () => {
        axios.post('/api/logout',{}, { headers:{Authorization: 'Bearer ' + localStorage.getItem('token')}})
        .then((r) => {
            localStorage.setItem('token', "")
           navigate("/");
        })
        .catch((e) => {
            console.log(e)
        });
    }
     
    return (
        <Layout>
           <div className="row justify-content-md-center">
                <div className="col-12">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <div className="container-fluid">
                            <a className="navbar-brand" href="/"></a>
                            <div className="d-flex">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <a onClick={()=>logoutAction()} className="nav-link " aria-current="page" href="#"></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    <h2 className="text-center mt-5">Welcome, {currentUser}!</h2  >
                </div>
            </div>
        </Layout>
    );
}
   
export default Home;
