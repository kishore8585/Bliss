import React from "react";
import { SwiperSlider } from "./Swipercss";

const SwiperContent = ({imglink,title,atag,btag,buttontag,idname}) => {
  return (
    <>
      <SwiperSlider>
        <div className="content-holder" id={idname}>
          <div className="image-holder">
          <img
            src={imglink}
            alt=""
          />
          </div>
          
          <div className="text-holder">
            <h3>{title}</h3>
            <p>
              <a>
                {atag}
                <b>
                 {btag}
                </b>
              </a>
            </p>
            <a className="button">{buttontag}</a>
          </div>
        </div>
      </SwiperSlider>
    </>
  );
};

export default SwiperContent;
