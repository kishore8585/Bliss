import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';


function Navlogin({leave}){
    const navigate = useNavigate();
    const value=localStorage.getItem("username");

    useEffect(() => {
        const isLoggedIn=localStorage.getItem("isLoggedIn", "true");
        if(!isLoggedIn){
            navigate("/")
        } 
    })
const handleLogOut = () => {
    alert("cwelkwen")
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("username");
    navigate("/login")
}
const style = {
    p:{
        color:"black",
        cursor:"pointer"
    }
}
    return(
        <>
        <section onMouseLeave={leave}>
        {value ?(
            <>
            <p style={style.p}>Welcome,{value}</p>
            <p style={style.p} onClick={()=>handleLogOut()}>Logout</p>
            </>

        ):(
            <>
            <Link to="/" style={style.p}>  <p >Login</p></Link>
              
               <Link to="/register" style={style.p}><p>Register</p></Link> 
            </>
        )}
          </section>
        </>

  
        )
}

export default Navlogin