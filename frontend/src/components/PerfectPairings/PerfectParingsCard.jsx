import React from "react";
import { PerfectCard } from "./PerfectParingscss";

const PerfectParingsCard = () => {
  return (
    <>
      <PerfectCard>
        <div className="perfectimg">
          <img
            src="https://cdn11.bigcommerce.com/s-9p889rxpkb/images/stencil/500x659/attribute_rule_images/19_source_1571348777.jpg"
            alt=""
          />
        </div>
        <div className="perfectcontent">
          <div className="perfecticon">
            <i className="fa-solid fa-heart"></i>
            <i className="fa-solid fa-heart"></i>
            <i className="fa-solid fa-heart"></i>
            <i className="fa-solid fa-heart"></i>
            <i className="fa-solid fa-heart"></i>
          </div>
          <div className="pcontent">
            <h3>Aloe Leaf & Peppermint Foot Cream</h3>
            <p>Super Softening & AHA Exfoliating Cooling Foot Cream</p>
          </div>
          <div className="perfectbtns">
            <div className="span1">
              <p className="yellow">4.0z</p>
              <p>32z</p>
            </div>
            <a className="button">ADD TO BAG $10</a>
          </div>
        </div>
      </PerfectCard>
    </>
  );
};

export default PerfectParingsCard;
