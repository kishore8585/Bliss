import React from 'react'

const BrightCard = ({img,heading,para,cost}) => {
  return (
   <>
    <div className="brightcontainer">
        <a href="/">
            <li>
                <div className="brightimg">
                    <img src={img} alt=""/>
                </div>
                <div className="brightcontent">
                    <h3>{heading}</h3>
                    <p>{para}</p>
                </div>
                <a
                  href="/"
                  className="button brightbtn"
                >
                  ADD TO BAG ${cost}
                </a>
            </li>
        </a>
    </div>
   </>
  )
}

export default BrightCard;