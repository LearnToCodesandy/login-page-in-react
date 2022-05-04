import React, { useState } from 'react'
import SignIn from "../../components/SignIn";
import SignUp from "../../components/SignUp";
import "./login.css";

const Login = ({setAuth}) => {
    const [toggle,setToggle] = useState(true);
  return (
    toggle ? <SignIn setToggle={setToggle} setAuth={setAuth}/> : <SignUp setToggle={setToggle} setAuth={setAuth}/>
  )
}

export default Login