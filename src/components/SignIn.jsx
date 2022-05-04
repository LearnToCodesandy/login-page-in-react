import React, { useState } from 'react'
import {motion} from "framer-motion";

import {checkUserLoginValidity} from "../functions";
const FALLBACK__TIME = 1500;
const SignIn = ({ setToggle,setAuth}) => {
  const [err,setErr]= useState(false);
  const [errMess,setErrMess] = useState('');
  
  const handleSignIn = (e)=>{
    e.preventDefault();
    const signInForm = new FormData(e.target);
    const username = signInForm.get('username');
    const password = signInForm.get('password');
    const user = {username,password};
    if(checkUserLoginValidity('users',user)){
      setAuth(state=>!state);
      e.target.reset();
    }else{
      setErrMess('Invalid credentials!!!');
      setErr(true);
      setTimeout(()=>setErr(false),FALLBACK__TIME);
      console.log('user is invalid!');
    }
  }
  return (
    <>
      <h2 className="form__title">Sign In</h2>
      <p className={err ? "error__text" : "display-hide"}>{errMess}</p>
      <form className="login__form" onSubmit={e=>handleSignIn(e)}>
        <div className="form__item">
          <label htmlFor="username">Username</label>
          <motion.input whileFocus={{x:10}} type="text" name="username" id="username" required={true} placeholder='username...' />
        </div>
        <div className="form__item">
          <label htmlFor="password">Password</label>
          <motion.input whileFocus={{x:10}} type="password" name="password" id="password" required={true} />
        </div>

        <motion.input type="submit" whileTap={{scale:1.2}} className='btn btn-primary' value="Sign In" />
        <p className="under__text">Need a new account? <span className="link" onClick={() => setToggle((state)=>!state)}>Sign Up</span></p>
      </form>
    </>
  )
}

export default SignIn;