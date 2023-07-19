import React, { useState } from "react";
import { HiX } from "react-icons/hi";
import { Wrapper,OfferDiv,OfferIcon } from "./Offercss";
const Offer = () => {
  const [close,setClose] = useState(true);
  return (
    <>{  close &&
    (
      <Wrapper>
        <OfferDiv>
          <p>
            Friends & Fam 30% Off with code SKINLOVE + Free U.S. ground shipping
            over $40!
          </p>
          <OfferIcon>
            <HiX onClick={()=> setClose(false)}/>
          </OfferIcon>
        </OfferDiv>
      </Wrapper>
    )}
    </>
  );
};

export default Offer;
