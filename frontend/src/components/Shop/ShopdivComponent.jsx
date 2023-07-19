import React from "react";
import {ShopContainer} from './Shopcss';

const ShopdivComponent = ({img,heading,para,btntext}) => {
  return (
    <>
      <ShopContainer>
        <div className="shopcompontent">
          <div className="shopdiv">
            <a href="/">
              <img
                src={img}
                alt=""
              />
            </a>
            <div className="headingshop">
              <div className="contentshop">
                <h4>{heading}</h4>
                <p>{para}</p>
              </div>
                <a
                  href="/"
                  className="button shop"
                >
                  {btntext}
                </a>
            </div>
          </div>
        </div>
      </ShopContainer>
    </>
  );
};

export default ShopdivComponent;
