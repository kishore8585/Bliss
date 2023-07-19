import React, { useEffect, useState } from 'react'
import { Showcontainer } from './Showcss'
import axios from 'axios'
function Showdetails() {
    const[productdata,setData]=useState([])
    const[update,setUpdate]=useState(false)
    const[id1,setId]=useState(0)
    const[name,setPname]=useState('')
    const[price,setPrice]=useState(0)
    const[color,setColor]=useState('')
    const[descript,setDescript]=useState('')
    const[image,setImage]=useState('')
    useEffect(()=>{
        axios.get('http://127.0.0.1:4000/api/showproduct')
            .then((res)=>{
                setData(res.data)
                console.log(res.data)})
    },[])

    function deleteproduct(i){
        console.log(i.id)
        axios.delete(`http://127.0.0.1:4000/api/deleteproduct/${i._id}`)
            .then((res)=>{setData(res.data)})
    }
    const generateProductId = () => {
        const randomNumber = Math.floor(Math.random() * 100000) + 100;
        return `P${randomNumber}`;
      };
    function updateproduct(e){
        axios.put(`http://127.0.0.1:4000/api/updateproduct/${id1}`,{
                id:generateProductId(),
                pname:name,
                price:price,
                color:color,
                descript:descript,
                image:image
        })
        .then((res)=>{
            setData(res.data)
        })
    }
    function updateproduct1(i){
        console.log("adfijk")
        setUpdate(true)
        setId(i._id)
        console.log(id1)
    }
  return (
    <>
        <Showcontainer>
        <h1>PRODUCT MANAGEMENT</h1>
        <table>
            <tr>
                <th>PRODUCT ID</th>
                <th>PRODUCT NAME</th>
                <th>OPERATIONS</th>
            </tr>
            {
                productdata.map((i)=>{
                    return (<tr>
                            <td>{i.id}</td>
                            <td>{i.pname}</td>
                            <td>
                                <button onClick={()=>{deleteproduct(i)}}>Delete</button>
                                <button onClick={()=>{updateproduct1(i)}}>Update</button>
                            </td>
                           
                    </tr>
                    )
                })
            }
            
        </table>
        { update &&
        <>
            <form onSubmit={(e)=>{updateproduct(e)}}>
                <input type='text' placeholder='Enter the Product Name' required onChange={(e)=>{setPname(e.target.value)}} /><br/>
                <input type='number' placeholder='Enter the Price' required onChange={(e)=>{setPrice(e.target.value)}} /><br/>
                <input type='text' placeholder='Enter the Color' required onChange={(e)=>{setColor(e.target.value)}} /><br/>
                <input type='text' placeholder='Enter the Description' required onChange={(e)=>{setDescript(e.target.value)}} /><br/>
                <input type='text' placeholder='Image'required onChange={(e)=>{setImage(e.target.value)}} /><br/>
                <button>Update</button>
            </form>
        </>
            }
        </Showcontainer>
    </>
  )
}

export default Showdetails
