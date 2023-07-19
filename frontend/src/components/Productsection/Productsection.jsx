import React,{useContext, useState} from 'react'
import { Rightcont,Count, Videgif ,Result} from './Productcss'
import { Leftcont,Container} from './Productcss'
import {FiMinus,FiPlus} from 'react-icons/fi'
import { Link,useParams} from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import { data } from 'jquery';


const Productsection = (props) => {
    const [num,setCount]=useState(1);
    const [accord,setAccord]=useState(false);
    const [accord1,setAccord1]=useState(false);
    const [accord2,setAccord2]=useState(false);
    const [accord3,setAccord3]=useState(false);
    const [descript,setDescript]=useState({})

    const accordview=()=>{
        if(!accord){
            return setAccord(true);
        }
        else{
            return setAccord(false);
        }
    }
    const accordview1=()=>{
        if(!accord1){
            return setAccord1(true);
        }
        else{
            return setAccord1(false);
        }
    }
    const accordview2=()=>{
        if(!accord2){
            return setAccord2(true);
        }
        else{
            return setAccord2(false);
        }
    }
    const accordview3=()=>{
        if(!accord3){
            return setAccord3(true);
        }
        else{
            return setAccord3(false);
        }
    }
    const view =(num) =>{
            if(num>1){
                setCount(num-1)
            }
    }
    const {id}=useParams()
    console.log(id,"params")
   console.log(typeof(descript.image))

    useEffect(()=>{
        axios.get(`http://127.0.0.1:4000/api/description/${id}`)
            .then((res)=>{
                console.log(res.data)
                setDescript(res.data)

            })
    },[])
    function addcart(){
            axios.post("http://127.0.0.1:4000/api/addcart",{
                id:descript.id,
                image:descript.image,
                Pname:descript.pname,
                Price:descript.price,
                Quantity:num
            })
            .then((data)=>{console.log(data)})
    }
  return (
    <>
    <Container>
        <Leftcont>
            <img src={`/images/${descript.image}`} alt={descript.pname}/>
        </Leftcont>
        <Rightcont>
            <div className="card-ratings">
                <i class="fa-solid fa-heart"></i>
                <i class="fa-solid fa-heart"></i>
                <i class="fa-solid fa-heart"></i>
                <i class="fa-solid fa-heart"></i>
                <i class="fa-solid fa-heart"></i>
            </div>
            <p className='nh'>{descript.pname}</p><br/>
            <span className='jr'>Vitamin C + Tri-Peptide Collagen Protecting & Brightening Moisturizer</span><br/><br/>
            <p className='hu'>${descript.price}</p><br/>
            <div className='bh'>
                <Count>
                    <FiMinus  onClick={()=>view(num)}/>
                    <span>{num}</span>
                    <FiPlus onClick={()=>{setCount(num+1)}}/>
                </Count>
                <Link to='/check'><button className='button1' onClick={()=>addcart()}>ADD TO BAG</button></Link>
            </div>
            <p className='bm'>Pay in 4 interest-free installments for orders over $50.00 </p>
            <div className='descript'>
            <div className='description' onClick={accordview}>
                <div className='descripthead'>
                <span>About</span>
                { !accord && <i class="fa-solid fa-plus"></i> }
                {accord && <i class="fa-solid fa-minus"></i>}
                </div>   
                {accord &&
                <div className='para'>
                    <p>Hydrates the surface layer of the skin. It seals the skin,locking with the Moisturizer</p>
                </div>
                }
            </div>
            <div className='description' onClick={accordview1}>
                <div className='descripthead'>
                <span>Features</span>
                { !accord1 && <i class="fa-solid fa-plus"></i> }
                {accord1 && <i class="fa-solid fa-minus"></i>}
                </div>   
                {accord1 &&
                <div className='para'>
                    <p>Good for skin. Will be an good for oily skin.</p>
                </div>
                }
            </div>
            <div className='description' onClick={accordview2}>
                <div className='descripthead'>
                <span>How to use</span>
                { !accord2 && <i class="fa-solid fa-plus"></i> }
                {accord2 && <i class="fa-solid fa-minus"></i>}
                </div>   
                {accord2 &&
                <div className='para'>
                    <p>Massage onto clean skin morning and night, or layer over top Bright Idea Serum. Keep in a cool, dry place out of direct sunlight.</p>
                </div>
                }
            </div>
            <div className='description' onClick={accordview3}>
                <div className='descripthead'>
                <span>Key ingredients</span>
                { !accord3 && <i class="fa-solid fa-plus"></i> }
                {accord3 && <i class="fa-solid fa-minus"></i>}
                </div>   
                {accord3 &&
                <div className='para'>
                    <p>Ultra-stable and the most effective, non-irritating form of vitamin C to visibly plump, brighten and visibly diminish the look of dark spots over time.</p>
                </div>
                }
            </div>
            </div>
        </Rightcont>
    </Container>
    <Result>
        <div className='container'>
                <div className='leftcont'>
                    <h1>PROVEN RESULTS</h1>
                    <h4>AFTER 1 USE:</h4>
                    <p>93% said skin felt softer</p>
                    <h4>AFTER 2 USE:</h4>
                    <p>90% said the moisturizer provided a healthy, radiant glow</p>
                    <h4>AFTER 4 USE:</h4>
                    <p>90% said their skin looked brighter</p>
                </div>
                <div className='photo'>
                    <img src="/images/Vit-C-Moisturizer---Image---Proven-Results---611x542@2x.jpg" alt=''/>
                </div>
        </div>
    </Result>
    </>
  )
}

export default Productsection
