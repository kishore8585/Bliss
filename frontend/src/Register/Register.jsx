import React, { useState } from 'react'
import axios from 'axios'
import { Registercontainer,Registerhead,Registerinput,Registerbutton } from './Registercss'
import $ from 'jquery'
const Register = () => {
  const[user,setUser]=useState([])
  const[fname,setFname]=useState('')
  const[lname,setLname]=useState('')
  const[email,setEmail]=useState('')
  const[password,setPass]=useState('')
  function createUser(e){
    e.preventDefault()
    // $(".emailError").remove();
    // $(".error").remove();
    // if(fname.length<1){
    //   $("#fname").after('<p class="emailError">*This field is required</p>');
    // }
    // if(lname.length<1){
    //   $("#lname").after('<p class="emailError">*This field is required</p>');
    // }
    // if (email.length < 1) {
    //   $("#email").after('<p class="emailError">*This field is required</p>');
    // } else {
    //   var regEx = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    //   var validEmail = regEx.test(email);
    //   var new1 = email.split("@");
  
    //   if (!validEmail) {
    //       $("#email").after('<p class="emailError">*Enter a valid email</p>'); 
    //   } 
    //   else if (new1[0].length < 3) {
    //       $("#email").after('<p class="emailError">*Enter a valid email</p>');
    //   }
    // }
    // if (password.length < 8) {
    //   $("#password").after('<p class="error">*Enter at least 8 characters</p>');
    // }
    console.log(fname,lname,email,password)
    axios.post('http://127.0.0.1:4000/api/signup',{
      firstname:fname,
      lastname:lname,
      email:email,
      password:password
    })
    .then((res)=>{
      console.log(res.data)
      setUser(res.data)
    })
    window.alert("User registered Successfully...")
  }
  return (
    <>
        <Registercontainer>
            <Registerhead >
            <h1>REGISTER</h1>
            <p>Please enter your e-mail and password:</p>
            </Registerhead>
            <Registerinput onSubmit={(e)=>{createUser(e)}}>
            <input type='text' id='fname' placeholder='Firstname'  onChange={(e)=>{setFname(e.target.value)}}/><br/>
            <input type='text' id='lname' placeholder='Lastname'  onChange={(e)=>{setLname(e.target.value)}}/><br/>
            <input type='text' placeholder='Email' onChange={(e)=>{setEmail(e.target.value)}}/><br/>
            <input type='password' placeholder='Password' onChange={(e)=>{setPass(e.target.value)}}/><br/>
            <Registerbutton type="submit" >REGISTER</Registerbutton>
            </Registerinput>
            <Registerhead>
                <p>By creating an account, you agree to <a href='/'>our terms</a> and privacy policy.</p>
            </Registerhead>
        </Registercontainer>
    </>
  )
}

export default Register
