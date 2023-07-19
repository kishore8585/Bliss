import React, { useEffect, useState } from 'react'
import { Container, Content, Heading, Products } from './Ordergeneratecss'
import { Link } from 'react-router-dom'
import axios from 'axios'
function Ordergenerate() {
    const[genorder,setOrder]=useState([])
    useEffect(()=>{
        axios.get("http://127.0.0.1:4000/api/showgenorder")
            .then((res)=>{
                console.log(res.data)
                setOrder(res.data)
            })
    },[])
    console.log(genorder,"ek")
  return (
    <>
        <Container>
            <img src='/images/BLISS_FINAL_LOGOS_-_NEW_BRANDING_BLISS_LOGO_NEW_PNGS_bliss.final.BLUE.webp'/>
           <Heading>
                <h1>Thank you for ordering...</h1>
                <p>ORDER SUMMARY </p>
                <div className='orderno'>
                    <div>
                        <h4>Order ID:</h4>
                        <span>{genorder[0]?.orderID}</span>
                    </div>
                    <div>
                        <h4>Invoice No. :</h4>
                        <span>{genorder[0]?.invoiceNo}</span>
                    </div>
                </div>
           </Heading>
           <Products>
                <tr className='head'>
                    <th className='head1'>PRODUCT</th>
                    <th className='head2'>QUANTITY</th>
                    <th className='head2'>PRICE</th>
                </tr>
                
                {genorder[0]?.order[0]?.orderItems.map((i)=>{
                    return(
                
                <tr className='prod'>
                    <td className='prod1'>
                        <img src={`/images/${i.image}`}/>
                        <p>{i.Pname}</p>
                    </td>
                    <td className='quantity'>
                        <p>{i.Quantity}</p>
                    </td>
                    <td className='price'>
                        <p><b>${i.Price}</b></p>
                    </td>
                </tr>
               )})}
                <tr className='tax'>
                    <td><p><b>Shipping and taxes</b></p></td>
                    <td></td>
                    <td><p>$7.30</p></td>
                </tr>
              
           </Products>
           <Content>
            <div className='total'>
                <p>Total:</p>
                <p>$109</p>
            </div>
           
            <div className='address'>
                <div className='add'>
                <h4>Billing Address:</h4> 
                <p>No.35, Mahalakshmi avenue, Kalinga Nagar, LIC Colony, KK Nagar, Trichy-23</p>
                </div>  
                <div className='add'>
                    <h4>Shipping Address:</h4>
                    <p>No.35, Mahalakshmi avenue, Kalinga Nagar, LIC Colony, KK Nagar, Trichy-23</p>
                </div>
            </div>
            <div className='mode'>
                <h4>Mode of payment:</h4>
                <p>{genorder[0]?.paymentmode}</p>
           </div>
           </Content>
           <Link to='/'><button className='button'>Shop More</button></Link>
        </Container>
            
    </>
  )
}

export default Ordergenerate
