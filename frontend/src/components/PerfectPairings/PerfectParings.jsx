import React from "react";
import PerfectParingsCard from "./PerfectParingsCard";
import { PerfectContainer, PerfectHeadings } from "./PerfectParingscss";
import Slider from "react-slick";

const PerfectParings = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <PerfectContainer>
        <PerfectHeadings>
          <h2>Perfect Pairings</h2>
        </PerfectHeadings>

        <div className="perfectcardcontainer lg">
            <PerfectParingsCard />
            <PerfectParingsCard />
        </div>
        
        <div className="perfectcardcontainer sm">
          <Slider {...settings}>
            <PerfectParingsCard />
            <PerfectParingsCard />
          </Slider>
        </div>
      </PerfectContainer>
    </>
  );
};

export default PerfectParings;
