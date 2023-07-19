import React from "react";
import { WinterContainer } from "./Wintercss";
import { SimpleSlider } from "./SimpleSlider/SimpleSlider";
import WinterHeader from './WinterHeader';
import "./SimpleSlider/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
const Winter = () => {
  return (
    <>
      <WinterContainer>
        <WinterHeader />
        <SimpleSlider />
      </WinterContainer>
    </>
  );
};

export default Winter;
