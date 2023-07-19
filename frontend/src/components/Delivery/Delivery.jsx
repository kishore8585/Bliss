import React from 'react';
import {DContainer} from './Deliverycss';
import {Link} from 'react-router-dom'
const Delivery = () => {
  return (
    <>
        <DContainer>
          <Link to='/list'><button className='button'>More Products</button></Link>
            <div className='line-d'>
              <h3>Only on blissworld.com</h3>
              <div className='ul-container'>
                <ul>
                  <li>
                    <img src='https://cdn11.bigcommerce.com/s-9p889rxpkb/product_images/uploaded_images/truck73-37.gif' alt='gif'/>
                    <div>
                      <p className='caps'>free shipping</p>
                      <p>(on orders over $40)</p>
                    </div>
                  </li>
                  <li>
                    <img src='https://cdn11.bigcommerce.com/s-9p889rxpkb/product_images/uploaded_images/samples-gif-ani-73x37.gif' alt='gif'/>
                    <div>
                      <p className='caps'>free samples</p>
                      <p>(Yes, please!)</p>
                    </div>
                  </li>
                  <li>
                    <img src='https://cdn11.bigcommerce.com/s-9p889rxpkb/product_images/uploaded_images/gifts-gif-ani-73x37.gif' alt='gif'/>
                    <div>
                      <p className='caps'>surprises</p> 
                      <p>(You will love.Trust)</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
        </DContainer>
    </>
  )
}

export default Delivery;