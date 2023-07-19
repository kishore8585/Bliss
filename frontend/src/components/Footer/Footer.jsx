import React from "react";
import { FooterContainer, FooterLeft, FooterRight } from "./Footercss";
import FooterList from "./FooterList";

const Footer = () => {
  return (
    <>
      <FooterContainer className="webFooter">
        <FooterLeft>
          <div className="leftcontainer">
            <div className="footerlogo">
              <img
                src="https://cdn.shopify.com/s/files/1/0702/9017/8333/files/B_Corp_3x_2557d61c-dc6b-4c20-9ce7-93e5d654f4ad.png?v=1677555274"
                alt=""
              />
            </div>

            <div className="footercom">
              <h3>Company</h3>
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

            <div className="footercare">
              <h3>CUSTOME CARE</h3>
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

            <div className="footerdry">
              <h3>THE DRY STUFF</h3>
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
              <div className="footerfun">
                <h3>THE FUN STUFF</h3>
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
                <div className="copyrights">
                  <p>© 2023 BlissWorld Inc.</p>
                </div>
              </div>
            </div>

          </div>
        </FooterLeft>
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
      </FooterContainer>
    </>
  );
};

export default Footer;
