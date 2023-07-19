import React, { useEffect, useState } from 'react'
import { Bagcontainer } from './Bagcss'
import axios from 'axios'
import Check from '../components/Checkout/Check'

const Bag = () => {
  const[myCart,setCart]=useState([])
  useEffect(()=>{
    axios.get("http://127.0.0.1:4000/api/showcart")
      .then((res)=>{
        setCart(res.data)
      })
  },[])
  console.log(myCart)
  if(myCart.length<=0){
  return (
    <>
        <Bagcontainer>
            <h1>YOUR CART IS EMPTY</h1>
            <button className='button'>SHOP OUR PRODUCTS</button>
        </Bagcontainer>
        
    </>
  )
  }
  else{
    return(
    <>
      <Check/>
    </>
    )
  }
}

export default Bag
