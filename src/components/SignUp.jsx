import React,{useState} from 'react'
import {motion} from "framer-motion";
import {addUser} from "../functions";


const FALLBACK__TIME = 1500;
const SignUp = ({setToggle,setAuth}) => {
  const [err,setErr] = useState(false);
  const [errMess,setErrMess] = useState('');

  const handleSignUp = e=>{
    e.preventDefault();
    const signUpForm = new FormData(e.target);
    const username = signUpForm.get('user');
    const password = signUpForm.get('pass');
    const repassword = signUpForm.get('repass');
    const user = {username,password};
    if(password === repassword){
      const response = addUser('users',user);
      if(response){
        setAuth(state => !state);
        e.target.reset();
      }else{
        setErrMess('Username exists already!!!');
        setErr(true);
        setTimeout(()=>setErr(false),FALLBACK__TIME);
        console.log('User already existing in our database!');
      }
    }else{
      setErrMess('Passwords does not match!!!');
      setErr(true);
      setTimeout(() => {
        setErr(false);
      }, FALLBACK__TIME);

      console.log('passwords does not match!')
    }
  }
  return (
    <>
    <h2 className="form__title">Sign Up</h2>
    <p className={err ? "error__text" : "display-hide"}>{errMess}</p>
    <form className="login__form" onSubmit={e=>handleSignUp(e)}>
      <div className="form__item">
        <label htmlFor="user">Username</label>
        <motion.input whileFocus={{x:10}} type="text" name="user" id="user" required={ true} placeholder='username...'/>
      </div>
      <div className="form__item" >
        <label htmlFor="pass">Password</label>
        <motion.input whileFocus={{x:10}} type="password" name="pass" id="pass" required={true}/>
      </div>  

      <div className="form__item" >
        <label htmlFor="repass">Re-enter password</label>
        <motion.input type="password" name="repass" id="repass" whileFocus={{x:10}}/>
      </div>
      <motion.input whileTap={{scale:1.2}} type="submit" className='btn btn-primary' value="Sign In"/>
      <p className="under__text">Already have an account ? <span className="link" onClick={() => setToggle((state)=>!state)}>Sign In</span></p>
    </form>
    </>
  )
}

export default SignUp