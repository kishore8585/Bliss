import React, { useEffect, useState } from 'react'
import { Infocontainer, LeftCont, RightCont } from './Infomationcss'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link,useNavigate,useParams } from 'react-router-dom';
import $ from 'jquery';
import axios from 'axios';
const Information = () => {
    const {total}=useParams()
    const[cartproducts,setProduct]=useState([])
    console.log(typeof(total),"params")
    const[finTotal,setTotal]=useState(0)
    console.log(finTotal,"fin")

    //details to get shipping address

    const[email,setEmail]=useState('')
    const[country,setCountry]=useState('')
    const[firstname,setFirstname]=useState('')
    const[lastname,setLastname]=useState('')
    const[address,setAddress]=useState('')
    const[optional,setOptional]=useState('')
    const[city,setCity]=useState('')
    const[state,setState]=useState('')
    const[zipcode,setZip]=useState(0)
    const[phoneno,setPhoneno]=useState(0)
    const navigate=useNavigate()
    function insertvalue(e){
        e.preventDefault()
        console.log("jabnndj")
        console.log(email,country,firstname,lastname,address,optional,city,state,zipcode,phoneno)
        
        axios.post("http://127.0.0.1:4000/api/createorder",{
            orderItems:cartproducts,
            email:email,
            country:country,
            firstname:firstname,
            lastname:lastname,
            address:address,
            optionalAdd:optional,
            city:city,
            state:state,
            zipcode:zipcode,
            phone:phoneno,
            subtotal:total,
            total:finTotal
        })
        navigate('/ship')
    }
    
    useEffect(()=>{
        axios.get("http://127.0.0.1:4000/api/showcart")
            .then((res)=>{
                var quanPrice=0
                res.data.map(i=>{
                    quanPrice+=(i.Price*i.Quantity)
                }) 
                console.log(res.data)
                setProduct(res.data)
                console.log(quanPrice,"nwe")
                setTotal(quanPrice+5.99+1.31)
            })
    },[])
  return (
    <>
        <Infocontainer>
                <LeftCont>
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
                    <img src='/images/CartPage_Payments.webp' className='pay' alt=''/>
                    </div> 
                    <div className='cont'>
                    <div className='contact'>
                        <h3>Contact</h3>
                        <p className='acc'>Already have an account? <span>Log in</span></p>
                    </div>
                    <form onSubmit={(e)=>{insertvalue(e)}}>
                    <input type='email' placeholder='Email' name='email' className='email' onChange={(e)=>{setEmail(e.target.value)}}/><br/>
                    <input type='checkbox'name='email'/>
                    <label>Sign up to get first access to product launches & exclusive offers.</label>
                    <p className='addres'>Shipping Address</p>
                    <div className='sele'>
                    {/* <label>Country/region</label> */}
                    {/* <select className='opt' value={country} onChange={(e)=>{
                        setCountry(e.target.value)
                        console.log(country)}
                        }>
                        <option value="India">India</option>
                        <option value="USA">USA</option>
                        <option value="China">China</option>
                        <option value="Japan">Japan</option>
                    </select> */}
                    <input type='text' required placeholder='Country/Region' name='country' className='email' onChange={(e)=>{setCountry(e.target.value)}}/><br/>
                    </div>
                    <br/>
                    <div className='name'>
                        <input type='text' required placeholder='First name' name='firstname' onChange={(e)=>{setFirstname(e.target.value)}} />
                        <input type='text' placeholder='Last name' name='secoundname' onChange={(e)=>{setLastname(e.target.value)}} /><br/>
                    </div>
                    <input type='text' required placeholder='Address' name='address' className='email' onChange={(e)=>{setAddress(e.target.value)}}/><br/>
                    <input type='text' required placeholder='Apartment,suite,etc.(optional)' name='address' className='email' onChange={(e)=>{setOptional(e.target.value)}}/><br/>
                    <div className='city'>
                    <input type='text' required placeholder='City' name='city' onChange={(e)=>{setCity(e.target.value)}}/>
                    <input type='text' required placeholder='State' name='state' onChange={(e)=>{setState(e.target.value)}}/>
                    <input type='text'  required placeholder='ZIP Code' name='zipcode' onChange={(e)=>{setZip(e.target.value)}}/>
                    </div>
                    <br/>
                    <input type='text' required placeholder='Phone' name='address' className='email' onChange={(e)=>{setPhoneno(e.target.value)}}/><br/>
                    <input type='checkbox'name='sms'/>
                    <label>Sign up to get first access to product launches & exclusive offers.</label>
                    <div className='ship'>
                        <div className='bh'>
                        <span><FaChevronLeft/></span>
                        <p>Return to Cart</p>
                        </div>
                        <button type='submit'>Continue to shipping</button>
                    </div>
                    </form>
                    <p className='nw'>By clicking Continue to shipping, you agree to our terms and privacy policy.</p>
                    </div> 
                    <hr/>
                    <ul className='footer'>
                        <li>Refund policy</li>
                        <li>Shipping policy</li>
                        <li>Privacy policy</li>
                        <li>Terms of service</li>
                        <li>Contact information</li>
                    </ul>
                </LeftCont>
                {/* <hr/> */}
                <RightCont>
                    <div className='display'>
                    { cartproducts.map((i)=>{
                    return ( 
                    <div className='data'>
                        <div>
                            <div className='img1'>
                                <img src={`/images/${i.image}`} alt=''/>
                                <span>{i.Quantity}</span>
                            </div>
                        <p>{i.Pname}</p>
                        </div>
                        <span>${i.Price*i.Quantity}.00</span>
                    </div>)}
                    )}
                    </div>
                   {/* <div className='form'>                   
                    <form>
                        <input type='text' placeholder='Gift card or discount code'/>
                        <button>Apply</button>
                    </form>
                    </div> */}

                    <div className='cal'>
                        <p className='ju'>Subtotal</p>
                        <p><b>${total}.00</b></p>
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
                        <p><b>${finTotal}</b></p>
                    </div>
                </RightCont>
        </Infocontainer>
    </>
  )
}

export default Information
