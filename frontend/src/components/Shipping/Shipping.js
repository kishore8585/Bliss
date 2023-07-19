import React, { useEffect, useState } from 'react'
import { ShipLeft, ShipRight, ShippingContainer } from './Shippingcss'
import { FaChevronLeft,FaChevronRight } from "react-icons/fa";
import { Link, useParams } from 'react-router-dom';
import axios from 'axios'
function Shipping() {
    const[order,setOrder]=useState([])
    console.log(order)
    useEffect(()=>{
        axios.get("http://127.0.0.1:4000/api/showorder")
            .then((res)=>{
                // console.log(res.data)
                setOrder(res.data)
            })
    },[])
    // console.log(order)
  return (
    <>  
        <ShippingContainer>
            <ShipLeft>
            <div className='logo'>
                        <img src='/images/BLISS_FINAL_LOGOS_-_NEW_BRANDING_BLISS_LOGO_NEW_PNGS_bliss.final.BLUE.webp' alt=''/>
                    
                    <ul>
                        <li>Cart</li>
                        <span><FaChevronRight/></span>
                        <li>Information</li>
                        <span><FaChevronRight/></span>
                        <li>Shipping</li>
                        <span><FaChevronRight/></span>
                        <li>Payment</li>
                    </ul>
            </div>
            <div className='details'>
                <div className='contact'>
                    <span className='con'>Contact</span>
                    <p>{order[0]?.email}</p>
                </div>
                <hr className='hr'></hr>
                <div className='shipto'>
                    <p className='sh'>Ship to</p>
                    <p>{order[0]?.address},{order[0]?.optionalAdd},{order[0]?.city},{order[0]?.state},{order[0]?.country},Zipcode-{order[0]?.zipcode}</p>

                </div>
            </div>
            <div className='method'>
            <span>Shipping method</span>
            <p>Please allow an additional 10-14 days for your package to ship, as we are in the midst of transitioning warehouses. We apologize for the delay.</p>
            </div>
            <div className='standard '>
                <div className='ch'>
                    <p>Standard</p>
                </div>
                <p>$5.99</p>
            </div>
            <div className='ship'>
                        <div className='bh'>
                        <span><FaChevronLeft/></span>
                        <p>Return to Cart</p>
                        </div>
                        <Link to='/payment'><button>Continue to payment</button></Link>
                    </div>
            <ul className='footer'>
                <li>Refund policy</li>
                <li>Shipping policy</li>
                <li>Privacy policy</li>
                <li>Terms of service</li>
                <li>Contact information</li>
            </ul>
            </ShipLeft>
            <ShipRight>
                {order[0]?.orderItems.map((i)=>{
                        return(
                        
                        <div className='data'>
                            <div  className='data1'>
                                <div className='data2'>
                                    <img src={`/images/${i.image}`} alt=''/>
                                    <span>{i.Quantity}</span>
                                </div>
                                <p>{i.Pname}</p>
                            </div>
                        <span>${i.Price}</span>
                        
                </div>
                        )
                }

                )
                
                }
                   {/* <div className='form'>                   
                    <form>
                        <input type='text' placeholder='Gift card or discount code'/>
                        <button>Apply</button>
                    </form>
                    </div> */}
                    <div className='div1'>
                        <div className='cal'>
                            <p className='ju'>Subtotal</p>
                            <p><b>${order[0]?.subtotal}</b></p>
                        </div>
                        <div div className='cal'>
                            <p>Shipping</p>
                            <p><b>$5.99</b></p>
                        </div>
                        <div className='cal'>
                            <p>Estimated taxes</p>
                            <p><b>$1.31</b></p>
                        </div>
                        <hr></hr>
                        <div className='cal'>
                            <p>Total</p>
                            <p><b>${order[0]?.total}</b></p>
                        </div>
                    </div>
            </ShipRight>
        </ShippingContainer>
    </>
  )
}
export default Shipping
