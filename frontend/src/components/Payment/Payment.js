import React,{useEffect,useState} from 'react'
import { PayLeft, PayRight, PaymentCont } from './Paymentcss'
import { FaChevronLeft,FaChevronRight } from "react-icons/fa";
import axios from 'axios';
import useRazorpay from "react-razorpay";
import { useNavigate } from 'react-router-dom';
function Payment() {
    const[order,setOrder]=useState([])
    const[mode,setMode]=useState('')
    const navigate=useNavigate()
    const [Razorpay] = useRazorpay();
    console.log(mode)
    function submit1(e){
        e.preventDefault()
        console.log(mode,order[0].total)
        
            axios.post("http://127.0.0.1:4000/api/genorder",{
                order:order,
                orderID:generateOrderId(),
                invoiceNo:generateInvoiceno(),
                paymentmode:mode
            })
            .then(res => {
                if(mode==="card"){
                    const order_id = res.data.data.order_id
                    const personaldata = res.data.data.genorder.order[0]
                    const options = {
                        key: "rzp_test_0F9S5DikFPgcji", // Enter the Key ID generated from the Dashboard
                        amount: order[0].total*100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
                        currency: "USD",
                        name: "Bliss world",
                        description: "Test Transaction",
                        order_id: order_id, //This is a sample Order ID. Pass the `id` obtained in the response of createOrder().
                        handler: function (response) {
                        //   alert(response.razorpay_payment_id);
                        //   alert(response.razorpay_order_id);
                        //   alert(response.razorpay_signature);
                          axios.post("http://127.0.0.1:4000/api//payment/verify",{
                            razorpay_payment_id:response.razorpay_payment_id,
                            razorpay_order_id:response.razorpay_order_id,
                            razorpay_signature:response.razorpay_signature,
                        }).then(res => {
                            if(res.status === 200){
                                alert("Payment Successfull")
                                navigate("/ordergenerate")
                            }else{
                                alert("failed")
                            }
                        })
                          
                        },
                        prefill: {
                          name: personaldata.firstname +  " " + personaldata.firstname,
                          email: personaldata.email,
                          contact: personaldata.phone,
                        },
                        theme: {
                          color: "#3399cc",
                        },
                      };
                    
                      const rzp1 = new Razorpay(options);
                    
                      rzp1.on("payment.failed", function (response) {
                        alert(response.error.code);
                        alert(response.error.description);
                        alert(response.error.source);
                        alert(response.error.step);
                        alert(response.error.reason);
                        alert(response.error.metadata.order_id);
                        alert(response.error.metadata.payment_id);
                      });
                     
                        rzp1.open();
                }
                else{
                    alert("Payment Successfull")
                    navigate("/ordergenerate")
                
                }
                
            })            

        
    }
    const generateOrderId = () => {
        const randomNumber = Math.floor(Math.random() * 100000) + 100;
        return `P${randomNumber}`;
      };
      const generateInvoiceno = () => {
        const randomNumber = Math.floor(Math.random() * 100000) + 100;
        return `P${randomNumber}`;
      };
    useEffect(()=>{
        axios.get("http://127.0.0.1:4000/api/showorder")
            .then((res)=>{
                console.log(res.data)
                setOrder(res.data)
            })
    },[])
    console.log(mode)
  return (
    <>
    <PaymentCont>
        <PayLeft>
        <div className='logo'>
                        <img src='/images/BLISS_FINAL_LOGOS_-_NEW_BRANDING_BLISS_LOGO_NEW_PNGS_bliss.final.BLUE.webp' alt=''/>
                    <ul>
                        <li>Cart</li>
                        <span><FaChevronRight/></span>
                        <li>Information</li>
                        <span><FaChevronRight/></span>
                        <li>Shipping</li>
                        <span><FaChevronRight/></span>
                        <li><b>Payment</b></li>
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
            <span>Payment</span>
            <p>All transactions are secure and encrypted.</p>
            </div>
            <form onSubmit={submit1}>
                <div className='payon'>
                    <input type='radio' value="card" checked={mode === 'card'} onChange={(e)=>{setMode(e.target.value)}}/>
                    <label>Credit/Debit card</label>
                </div>
                <div className='payon'>
                    <input type='radio' value="Pay on delivery" checked={mode === "Pay on delivery"} onChange={(e)=>{setMode(e.target.value)}}/>
                    <label>Pay on delivery</label>
                </div>
                <button type='submit'>Proceed</button>
            </form>
            <ul className='footer'>
                <li>Refund policy</li>
                <li>Shipping policy</li>
                <li>Privacy policy</li>
                <li>Terms of service</li>
                <li>Contact information</li>
            </ul>
        </PayLeft>
        <PayRight>
            {order[0]?.orderItems.map((i)=>{
                return(
        <div className='data'>
                <div className='des'>
                <div className='des1'>                
                    <img src={`/images/${i.image}`} alt=''/>
                    <span>{i.Quantity}</span>
                </div>
                <p>{i.Pname}</p>
                </div>
                <span>${i.Price}</span>
            </div>)})}
            <div className='totalcal'>
            <div className='cal'>
                <p className='ju'>Subtotal</p>
                <p>${order[0]?.subtotal}</p>
            </div>
            <div div className='cal'>
                <p>Shipping</p>
                <p>$5.99</p>
            </div>
            <div className='cal'>
                <p>Estimated taxes</p>
                <p>$1.31</p>
            </div>
            </div>
            <div className='kish'>
                <p>Total</p>
                <span>${order[0]?.total}</span>
            </div>
            
        </PayRight>
    </PaymentCont>
    </>
  )
}

export default Payment
