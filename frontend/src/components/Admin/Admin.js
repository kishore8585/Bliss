
import React, { useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { AdminContainer, AdminHead, Admininput } from './Admincss';
function Admin() {
  const[Pid,setPid]=useState('')
  const[Pname,setPname]=useState('')
  const[price,setPrice]=useState(0)
  const[descript,setDescript]=useState('')
  const[color,setColor]=useState('')
  const[image,setImage]=useState('')
  function  generateProductId(){
    const randomNumber = Math.floor(Math.random() * 100000) + 100;
    return `P${randomNumber}`;
  }

  function addproduct(e){
    e.preventDefault()
    console.log(Pname,price,color,descript,image)
      axios.post('http://127.0.0.1:4000/api/addproduct',{
        id:generateProductId(),
        pname:Pname,
        price:price,
        color:color,
        description:descript,
        image:image
      })
  }

  return (
    <div>
      <AdminContainer>
        <AdminHead>
        <h1>ADD PRODUCT</h1>
        </AdminHead>
        <Admininput>
        <form onSubmit={(e)=>{addproduct(e)}}>
          {/* <input type='number' placeholder='Enter the Product ID' on /><br/> */}
          <input type='text' placeholder='Enter the Product Name' required onChange={(e)=>{setPname(e.target.value)}} /><br/>
          <input type='number' placeholder='Enter the Price' required onChange={(e)=>{setPrice(e.target.value)}} /><br/>
          <input type='text' placeholder='Enter the Color' required onChange={(e)=>{setColor(e.target.value)}} /><br/>
          <input type='text' placeholder='Enter the Description' required onChange={(e)=>{setDescript(e.target.value)}} /><br/>
          <input type='text' placeholder='Image'required onChange={(e)=>{setImage(e.target.value)}} />
          {/* <input type='text' placeholder='Enter the Size'/><br/> */}
          <button className='kishore'>ADD</button>
          </form>
        </Admininput>
        <p><Link to='/show'>Show details</Link></p>
      </AdminContainer>
    </div>
  )
}

export default Admin
