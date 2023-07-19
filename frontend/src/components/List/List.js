import React from 'react'
import { ListCard, Listcontainer } from './Listcss'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
export const idcontext=React.createContext()
function List() {
  const[products,setProduct]=useState([])
  const [des,setDes]=useState({})
  useEffect(()=>{
    axios.get('http://127.0.0.1:4000/api/showproduct')
          .then((res)=>{
              console.log(res.data)
              setProduct(res.data)
          })
  },[])
  // function insert(i){
  //   console.log(i)
  //   setDes(i);
  //   console.log(des)
  // }
 
  return (
    <>

        <Listcontainer>
          {products.map((i)=>{
            return(
              
              <ListCard>
                  <img src={`/images/${i.image}`}/>
                  <p className='name'>{i.pname}</p>
                  <p className='price'>${i.price}</p>
                  <div className="card-ratings">
                    <i class="fa-solid fa-heart"></i>
                    <i class="fa-solid fa-heart"></i>
                    <i class="fa-solid fa-heart"></i>
                    <i class="fa-solid fa-heart"></i>
                    <i class="fa-solid fa-heart"></i>
                  </div>
                  <Link to={`/product/${i._id}`}><button className='button'>ADD TO BAG</button></Link>
              </ListCard>
            )
          })
          }
        </Listcontainer>
    </>
  )
}

export default List
