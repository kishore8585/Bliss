import React from "react";
import BrightCard from "./BrightCard";
import { BrightContainer, BrightHeadings, BrightList } from "./Brightcss";

const Bright = () => {
  return (
    <>
      <BrightContainer>
        <BrightHeadings>
          <h2>Bright Idea</h2>
          <p>
            Boosts Brightness & Elasticity In 1 Use With Clinical-Grade Vitamin
            C
          </p>
        </BrightHeadings>
        <BrightList>
          <ul>
            <BrightCard
              img="https://cdn11.bigcommerce.com/s-9p889rxpkb/product_images/uploaded_images/bright-idea-section-moisturizer-resized.png"
              heading="Bright Idea Moisturizer"
              para="Vitamin C + Tri-Peptide Collagen Protecting & Brightening Moisturizer"
              cost="26"
            />

            <BrightCard
              img="https://cdn11.bigcommerce.com/s-9p889rxpkb/product_images/uploaded_images/bright-idea-section-resized.png"
              heading="Bright Idea Seru"
              para="Vitamin C + Tri-Peptide Collagen Protecting & Brightening Serum"
              cost="28"
            />

            <BrightCard
              img="https://cdn11.bigcommerce.com/s-9p889rxpkb/product_images/uploaded_images/331499757-bi-sheet-mask-front-290x290-min.jpg"
              heading="Bright Idea Face Mask"
              para="Holographic Foil Sheet Mask"
              cost="4"
            />

            <BrightCard
              img="https://cdn11.bigcommerce.com/s-9p889rxpkb/product_images/uploaded_images/bright-idea-section-moisturizer-resized.png"
              heading="Bright Idea Moisturizer Travel Mini"
              para="Vitamin C + Tri-Peptide Collagen Protecting & Brightening Moisturizer"
              cost="6"
            />

          </ul>
        </BrightList>
      </BrightContainer>
    </>
  );
};

export default Bright;
