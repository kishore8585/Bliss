import React from 'react'
import { LMContainer, LMContent,LMImage } from './LearnMorecss'

const LearnMore = () => {
  return (
    <>
        <LMContainer>
            <div className='divcontainer'>
                <LMContent>
                    <div className='contentcontainer'>
                        <h2>Clean, Cruelty-Free,<br />Dermatologist-Tested</h2>
                        <p>We are a clean, cruelty-free, planet-friendly skincare brand that delivers transformative, dermatologist-tested products for total skin happiness.</p>
                        <div className='lmbuttonholder'>
                            <a className='button'>LEARN MORE</a>
                            <a className='button'>SHOP BLISS</a>
                        </div>
                    </div>
                </LMContent>
                <LMImage>
                    <img src='https://cdn11.bigcommerce.com/s-9p889rxpkb/product_images/uploaded_images/hp-about-mobile.jpg' alt=''/>
                </LMImage>
            </div>
            
        </LMContainer>
    </>
  )
}

export default LearnMore