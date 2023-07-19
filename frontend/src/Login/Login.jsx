import React, { useState } from 'react'
import { Logincontainer,Loginhead,Logininput,Loginbutton,Loginaccount } from './Logincss'
import { Link } from 'react-router-dom'
import $ from 'jquery';
import axios from 'axios';
const Login=()=> {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("")


  function clicksubmit(e) {
    e.preventDefault();
    console.log(email,password)
    $(".emailError").remove();
    $(".error").remove();
    if (email.length < 1) {
      $("#email").after('<p class="emailError">*This field is required</p>');
    } else {
      var regEx = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
      var validEmail = regEx.test(email);
      var new1 = email.split("@");
  
      if (!validEmail) {
          $("#email").after('<p class="emailError">*Enter a valid email</p>'); 
      } 
      else if (new1[0].length < 3) {
          $("#email").after('<p class="emailError">*Enter a valid email</p>');
      }
    }
  
    if (password.length < 8) {
      $("#password").after('<p class="error">*Enter at least 8 characters</p>');
    }
    axios.post('http://127.0.0.1:4000/api/login',{
      email:email,
      password:password
    })

    .then((data)=>{window.alert(data.data)
      localStorage.setItem("isLoggedIn", "true");
      const value = email.split("@")[0];
      localStorage.setItem("username", value);
    })
  }
  
  return (
    <>
      <Logincontainer>
      <Loginhead>
        <h1>LOGIN</h1>
        <p>Please enter your e-mail and password</p>
      </Loginhead>
      <Logininput>
        <form onSubmit={(e)=>{clicksubmit(e)}}>
          <input type='text'id='email' value={email} onChange={(e)=> setEmail(e.target.value)}placeholder='Email'/><br/>
          <input type='password'id='password'  value={password} onChange={(e)=> setPassword(e.target.value)} placeholder='Password'/>
          <input type='submit' className='kishore'/>
        </form>
      </Logininput>
      <Loginaccount>
        <p><Link to='/forgot'>Forgot Password?</Link></p>
        <p>Don't have an account?<Link to='/register'>Create one</Link> </p>
        <p><Link to='/admin'>Admin Login</Link></p>
      </Loginaccount>
      </Logincontainer>
    </>
  )
}

export default Login
