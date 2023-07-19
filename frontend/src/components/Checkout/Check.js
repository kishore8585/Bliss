import React, { useEffect, useState } from 'react'
import { CartContainer, Product,Count, Total } from './Checkcss'
import {FiMinus,FiPlus} from 'react-icons/fi'
import { Link } from 'react-router-dom'
import axios from 'axios'
const Check = () => {
    const[num,setNum]=useState({})
    const[cartprod,setCart]=useState([])
    const[quantity,setQuantity]=useState(0)
    const[total,setTotal]=useState(0)
    const[new3,setNew]=useState([])
    function increase(i){
        setTotal(prevValue=>prevValue+i.Price)
        let newNum = {...num, [i.Pname]:num[i.Pname]+1}
        setNum(newNum)
    }
  
    function decrease(i){
        let newNum
        if(num[i.Pname]>1){
          newNum = { ...num,[i.Pname]:num[i.Pname]-1}
          setTotal(prevValue=>prevValue-i.Price)
        }
        else{
           newNum = { ...num, [i.Pname]:1}
        }
         setNum(newNum)
    }
    function update(){
        axios.put("http://127.0.0.1:4000/api/updatecart",{
                data:num
        })
        .then((res)=>{
            setNew(res.data)
            })
    }   
    useEffect(()=>{
        axios.get("http://127.0.0.1:4000/api/showcart")
        .then((res)=>{
            console.log(res.data,"my")
          let quantityObj = {}
          let quanPrice=0
            res.data.map(i=>{
                quanPrice+=(i.Price*i.Quantity)
              quantityObj[i.Pname] = i.Quantity
            })
            setNum(quantityObj)
            setTotal(quanPrice)
            console.log(quantityObj,"this")
            setCart(res.data)
            })
    },[])
    

  return (
    <>
        <CartContainer>
            <h1>CART</h1>
            <Product>
                <table>
                    <tr>
                        <th className='ln1'>Product</th>
                        <th className='ln'>Quantity</th>
                        <th className='ln'>Total</th>
                        {/* <hr></hr> */}
                    </tr>
                    {cartprod.map((i)=>{ 
                        // let ny=(num[i.Pname]+1)*i.Price
                        // console.log(ny)
                        // tot.push(ny)
                        
                        return(
                    <tr>
                        <td>
                            <div className='data'>
                            <img src={`/images/${i.image}`} alt=''/>
                            <p>{i.Pname}</p>
                            <br></br>
                            {/* <p>$25</p> */}
                            </div>
                        </td>
                        <td className='quan'>
                        <Count>
                            <FiMinus className='nj' onClick={()=>{decrease(i)}}  />
                            <span>{num[i.Pname]}</span>
                            <FiPlus onClick={()=>{increase(i)}} />
                        </Count>
                        </td>
                        <td>
                            <span className='price'>${num[i.Pname]*i.Price}</span>
                        </td>
                    </tr>
                )})}
                </table>
                <div className='hrline'>
                    <hr></hr>
                </div>
             <Total>
                <img src='/images/CartPage_Payments.webp'/>
                <div className='insid'> 
                    <h6>Subtotal:&nbsp;&nbsp; ${total}</h6>
                    <p>Shipping & taxes calculated at checkout</p>
                    <Link to={`/info/${total}`}><button onClick={update}>CHECKOUT</button></Link>
                </div>
             </Total>
            </Product>
        </CartContainer>
    </>
  )
}

export default Check