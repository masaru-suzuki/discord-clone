import React from 'react';
import { Button } from '@mui/material';
import './Login.scss';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../firebase';

const Login = () => {
  const signIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <div className="login">
      <div className="loginLogo">
        <img src="./discordIcon.png" alt="" />
      </div>
      <Button onClick={signIn}>ログイン</Button>
    </div>
  );
};

export default Login;
