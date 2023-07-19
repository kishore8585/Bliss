import React from 'react'
import { Forgotcontainer,Forgothead,Forgotinput,Forgotbutton,Forgotaccount } from './Forgotcss'
import { Link } from 'react-router-dom'
const Forgot = () => {
  return (
    <>
    <Forgotcontainer>
      <Forgothead>
        <h1>RECOVER PASSWORD</h1>
        <p>Please enter your email:</p>
      </Forgothead>
      <Forgotinput>
          <input type='text' placeholder='Email'/><br/>
      </Forgotinput>
      <Forgotbutton>
        RECOVER
      </Forgotbutton>
      <Forgotaccount>
        <p><Link to='/login'>Remember your password? Back to login</Link></p>
      </Forgotaccount>
    
      </Forgotcontainer>
    </>
  )
}

export default Forgot
