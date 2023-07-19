import React from "react";
import ShopdivComponent from "./ShopdivComponent";
import {ShopMainContainer} from './Shopcss';

const Shop = () => {
  return (
    <>
    <ShopMainContainer>
        <ShopdivComponent
            img="https://cdn11.bigcommerce.com/s-9p889rxpkb/images/stencil/original/image-manager/twintout-l-s.jpg?t=1659985460&_gl=1*iuxuwe*_ga*MTUxMDA1OTkuMTY2NTE4MDA3OQ..*_ga_WS2VZYPC6G*MTY3Mjc4MzEzNS4yNTguMS4xNjcyNzg1OTAwLjUuMC4w"
            heading="The Scent That Started It All"
            para="A cult-fave fragrance for more than two decades!"
            btntext="SHOP LEMON & SAGE"
        />
        <ShopdivComponent
            img="https://cdn11.bigcommerce.com/s-9p889rxpkb/images/stencil/original/image-manager/twintout-blackhead-v2-1-.jpg?t=1664384382&_gl=1*12pwmxm*_ga*MTUxMDA1OTkuMTY2NTE4MDA3OQ..*_ga_WS2VZYPC6G*MTY3Mjc4MzEzNS4yNTguMS4xNjcyNzg1OTAwLjUuMC4w"
            heading="Pore Perfection"
            para="3x THE BENEFITS - LET'S BREAK IT DOWN!"
            btntext="SHOP BLACKHEAD BREAKDOWN"
        />
    </ShopMainContainer>
      
    </>
  );
};

export default Shop;
