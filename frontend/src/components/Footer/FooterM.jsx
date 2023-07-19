import React, { useState } from "react";
import { FooterMobile, FooterRight, FooterLeft } from "./Footercss";
import FooterList from "./FooterList";

const FooterM = () => {
  const [text, setText] = useState(false);
  const [text2, setText2] = useState(false);
  const [text3, setText3] = useState(false);

  const clickFunction = () => {
    if (!text) {
      return setText(true);
    }
    else{
      return setText(false);
    }
  };

  const clickFunction2 = () => {
    if (!text2) {
      return setText2(true);
    }
    return setText2(false);
  };

  const clickFunction3 = () => {
    if (!text3) {
      return setText3(true);
    }
    return setText3(false);
  };

  return (
    <FooterMobile className="mobileFooter">
      <FooterRight>
        <div className="rightcontainer">
          <h2>Hear the lastest.</h2>
          <p>(new products, exclusive offers and other suprises)</p>
          <div className="rightsubmit">
            <input placeholder="Enter the email..." />
            <a className="button">Submit</a>
          </div>
        </div>
      </FooterRight>
      <FooterLeft>
        <div className="companydiv">
          <div className="transfooterleft">
            <div className="lefttext one" onClick={clickFunction}>
              <h3>COMPANY</h3>
              { !text && <i class="fa-solid fa-plus"></i> }
              {text && <i class="fa-solid fa-minus"></i>}
            </div>
            {text && (
              <div className="content">
                <ul>
                  <FooterList
                    link="https://www.blissworld.com/privacy-policy/"
                    text="Who we are"
                  />
                  <FooterList
                    link="https://www.blissworld.com/terms-conditions/"
                    text="Find Bliss Near You"
                  />
                  <FooterList
                    link="https://www.blissworld.com/accessibility/"
                    text="Bliss Spa"
                  />
                  <FooterList
                    link="https://www.blissworld.com/sitemap/"
                    text="Shop"
                  />
                </ul>
              </div>
            )}

<div className="lefttext two" onClick={clickFunction2}>
            <h3>CUSTOMER CARE</h3>
            { !text2 && <i class="fa-solid fa-plus"></i> }
            {text2 && <i class="fa-solid fa-minus"></i>}
          </div>
          {text2 && (
            <div className="content onec">
              <ul>
                <FooterList
                  link="https://www.blissworld.com/gift-cards/"
                  text="Gift Cards"
                />
                <FooterList
                  link="https://www.blissworld.com/contact-us/"
                  text="Contact Us"
                />
                <FooterList
                  link="https://www.blissworld.com/shipping/"
                  text="Shipping"
                />
                <FooterList
                  link="https://www.blissworld.com/returns/"
                  text="Returns"
                />
                <FooterList
                  link="https://www.blissworld.com/ordering-payment/"
                  text="Ordering & Payment"
                />
                <FooterList
                  link="https://bliss.attn.tv/p/DiC/landing-page"
                  text="SMS Texts and Alerts"
                />
              </ul>
            </div>
          )}

          <div className="lefttext three" onClick={clickFunction3}>
            <h3>THE DRY STUFF</h3>
            { !text3 && <i class="fa-solid fa-plus"></i> }
            {text3 && <i class="fa-solid fa-minus"></i>}
          </div>
          {text3 && (
            <div className="content onec">
              <ul className="dry1">
                <FooterList
                  link="https://www.blissworld.com/privacy-policy/"
                  text="Privacy Policy"
                />
                <FooterList
                  link="https://www.blissworld.com/terms-conditions/"
                  text="Terms & Conditions"
                />
                <FooterList
                  link="https://www.blissworld.com/accessibility/"
                  text="Accessibility Statement"
                />
                <FooterList
                  link="https://www.blissworld.com/sitemap/"
                  text="Sitemap"
                />
              </ul>
            </div>
          )}
          </div>

          

          <div className="companyicon">
            <img
              src="https://www.blissworld.com/content/assets/bcorp.svg"
              alt=""
            />
            <ul className="funul">
              <FooterList
                link="https://www.instagram.com/bliss/"
                text="Instagram"
                cname="insta"
              />
              <FooterList
                link="https://www.youtube.com/user/blissbeautyblog"
                text="Youtube"
                cname="youtube"
              />
              <FooterList
                link="https://www.tiktok.com/@bliss"
                text="TikTok"
                cname="pintrest"
              />
            </ul>
          </div>
          <div className="copyrights">
            <p>© 2023 BlissWorld Inc.</p>
          </div>
        </div>
      </FooterLeft>
    </FooterMobile>
  );
};

export default FooterM;
