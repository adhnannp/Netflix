import React, { useState } from 'react'
import './Login.css'
import logo from '../../assets/logo.png'
import { login,signup } from '../../firebase'
import netflix_spinner from '../../assets/netflix_spinner.gif'
import { toast } from "react-toastify";

const Login = () => {

  const [signState,setSignState] = useState("Sign In")
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")  
  const [password,setPassword] = useState("")

  const [loading,setLoading] = useState(false);

  const user_auth = async (event) => {
    event.preventDefault();
    setLoading(true);

    if (signState === "Sign Up") {
      if (!name.trim()) {
        toast.error("Name cannot be empty or contain only spaces");
        setLoading(false);
        return;
      }
      if (name.trim().length < 4) {
        toast.error("Name must be at least 4 characters long");
        setLoading(false);
        return;
      }
      if (!email.trim()) {
        toast.error("Email cannot be empty");
        setLoading(false);
        return;
      }
      if (!password.trim()) {
        toast.error("Password cannot be empty or contain only spaces");
        setLoading(false);
        return;
      }
      if (/\s/.test(password)) {
        toast.error("Password cannot contain spaces");
        setLoading(false);
        return;
      }
      if (password.length < 6) {
        toast.error("Password must be at least 6 characters long");
        setLoading(false);
        return;
      }
    }
  
    if (signState === "Sign In") {
      if (!email.trim()) {
        toast.error("Email cannot be empty");
        setLoading(false);
        return;
      }
      if (!password.trim()) {
        toast.error("Password cannot be empty or contain only spaces");
        setLoading(false);
        return;
      }
    }
  
    try {
      if (signState === "Sign In") {
        await login(email, password);
      } else {
        await signup(name, email, password);
      }
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  return (
    
    loading?<div className='login-spinner'>
      <img src={netflix_spinner} alt="Loading" />
    </div>:
    <div className='login'>
      <img src={logo} alt="" className="login-logo" />
      <div className="login-form">
        <h1>{signState}</h1>
        <form>

          {signState==='Sign Up'?<input value={name} onChange={(e)=>{setName(e.target.value)}} type="text" placeholder='Your name'/>:<></>}

          <input value={email} onChange={(e)=>{setEmail(e.target.value)}} type="email" placeholder='Email'/>

          <input value={password} onChange={(e)=>{setPassword(e.target.value)}} type="password" placeholder='Password'/>

          <button onClick={user_auth} type='submit'>{signState}</button>

          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>

        </form>
        <div className="form-switch">
          {
            signState==='Sign In' ? <p>New to Netflix?<span onClick={()=>{setSignState('Sign Up')}}>Sign Up Now</span> </p>
            :<p>Allready have account? <span onClick={()=>{setSignState('Sign In')}}>Sign In Now</span> </p>
          }
        </div>
      </div>
    </div>
  )
}

export default Login