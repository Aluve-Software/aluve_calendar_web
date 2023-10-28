import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import { Parse } from 'parse';
import FacebookLogin from 'react-facebook-login';
// import './App.css';
import { Button, Divider, Input, Card, Image } from 'antd';
const appId = "323787293725713";

const UserFacebookLogin = () => {
  // State variables
  
  const [login, setLogin] = useState(false);
  const [data, setData] = useState({});
  const [picture, setPicture] = useState('');
  const navigate = useNavigate();

  const responseFacebook = (response) => {
    console.log(response);
    setData(response);
    setPicture(response.picture.data.url);
    if (response.accessToken) {
      setLogin(true);
      navigate("/", { replace: true })
    } else {
      setLogin(false);
    }
  }

  // Keeping crrently logged in user details
  useEffect(() => {
    localStorage.clear();
    localStorage.setItem('dataKey', JSON.stringify(data));
  }, [data]);

  return (
    <div className="container">
      <div style={{ width: '600px' }}>
        <div>
          { !login && 
            <FacebookLogin
              appId={appId}
              autoLoad={true}
              fields="name,email,picture"
              scope="public_profile,user_friends"
              callback={responseFacebook}
              icon="fa-facebook" />
          }
          { login &&
            <Image src={picture} roundedCircle />
          }
        </div>
        { login &&
          <div>
            <h2>{data.name}</h2>
            <h4>
              {data.email}
            </h4>
          </div>
        }
      </div>
    </div>
  );
}
export default UserFacebookLogin;

