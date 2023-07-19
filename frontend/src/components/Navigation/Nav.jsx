import React, { useState } from "react";
import {
  HeaderNav,
  SearchNav,
  NavLogoHolder,
  NavBagIcon,
  NavContent,
  Navhovcont,
} from "./Navcss";
import { NavBar } from "./NavContainercss";
import { HiSearch, HiLocationMarker } from "react-icons/hi";
import { TfiHandOpen, TfiBriefcase, TfiMenu } from "react-icons/tfi";
import NavATag from "./NavATag";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import Moblienav from "./Moblienav";
import $ from "jquery";
import Navlogin from "./Navlogin";

const Nav = () => {
  const [search, setSearch] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [isDropdownVisible0, setDropdownVisible0] = useState(false);
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [loginvisible,setLogin]=useState(false)
  const handleMouseEnter0 = () => {
    setDropdownVisible0(true);
  };
  const handleMouseLeave0 = () => {
    setDropdownVisible0(false);
  };

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };
  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };
  
  const searchClick = (e) => {
    setSearch(!search);
    e.preventDefault();
  };

  const handleToggle = () => {
    setToggle(!toggle);
  };
  const loginenter=()=>{
    setLogin(true)
  }
  const loginleave=()=>{
    setLogin(false)
  }
  return (
    <>
      <NavBar>
        <HeaderNav>
          <SearchNav>
            <TfiMenu onClick={handleToggle} className="menuBar" />
            <div onClick={searchClick}>
              <NavATag logo={<HiSearch />} text="search" />
            </div>
            <NavATag
              logo={<HiLocationMarker />}
              text="find us"
              cName="location"
            />
          </SearchNav>

          <NavLogoHolder>
            <a href="/">
              <img
                src="//cdn.shopify.com/s/files/1/0702/9017/8333/files/Bliss_Logo_White_3x_6c3396d6-15e0-4c23-a933-633783887842_140x.png?v=1675358315 1x, //cdn.shopify.com/s/files/1/0702/9017/8333/files/Bliss_Logo_White_3x_6c3396d6-15e0-4c23-a933-633783887842_140x@2x.png?v=1675358315 2x"
                alt="bliss"
              />
            </a>
          </NavLogoHolder>

          <NavBagIcon>
            <SearchNav>
              <div>
              <Link to="/login" >
                <NavATag logo={<TfiHandOpen/>} className="drop1"
                enter={loginenter}
                />
              </Link>
              {loginvisible &&
              <div className="navlog">
                      <Navlogin leave={loginleave}/>
              </div>}
              </div>
              <Link to="/bag">
                <NavATag logo={<TfiBriefcase/>} text="bag" />
              </Link>
            </SearchNav>
          </NavBagIcon>
        </HeaderNav>

        <NavContent>
          <a
            href="http://localhost:3000/"
            onMouseEnter={handleMouseEnter0}
            onMouseLeave={handleMouseLeave0}
          >
            <b>BEST SELLERS</b>
          </a>
          {isDropdownVisible0 && (
            <div
              className="bestsellers"
              onMouseEnter={handleMouseEnter0}
              onMouseLeave={handleMouseLeave0}
            >
              <div id="alginname">
                <img class="img1" src="https://cdn11.bigcommerce.com/s-9p889rxpkb/images/stencil/500x659/attribute_rule_images/19_source_1571348777.jpg" />
                <p>
                  <b>NEW</b>
                </p>
              </div>
              <div id="alginnam">
                <img class="img1" src="https://cdn11.bigcommerce.com/s-9p889rxpkb/images/stencil/original/image-manager/rest-assured.jpg?t=1663703636&_gl=1*1nyv6jg*_ga*MTIzNjY1NjYwNy4xNjUyMTM3Njc4*_ga_WS2VZYPC6G*MTY2MzcwMzE2MC40MDIuMS4xNjYzNzAzNzM0LjU3LjAuMA.s  " />
                <p>
                  <b>FEATURED</b>
                </p>
              </div>
              <div id="alginnam">
                <img class="img1" src="https://cdn11.bigcommerce.com/s-9p889rxpkb/images/stencil/500x659/attribute_rule_images/19_source_1571348777.jpg" />
                <p>
                  <b>AWARD WINNER</b>
                </p>
              </div>
              <div id="alginnam">
                <img class="img1" src="https://cdn11.bigcommerce.com/s-9p889rxpkb/images/stencil/original/image-manager/rest-assured.jpg?t=1663703636&_gl=1*1nyv6jg*_ga*MTIzNjY1NjYwNy4xNjUyMTM3Njc4*_ga_WS2VZYPC6G*MTY2MzcwMzE2MC40MDIuMS4xNjYzNzAzNzM0LjU3LjAuMA." />
                <p>
                  <b>WELLNESS</b>
                </p>
              </div>
              <div id="alginnam">
                <img class="img1" src="https://cdn11.bigcommerce.com/s-9p889rxpkb/images/stencil/500x659/attribute_rule_images/19_source_1571348777.jpg" />
                <p>
                  <b>SUBSCRIBE & SAVE</b>
                </p>
              </div>
            </div>
          )}

          <span>/</span>
          <a
            href="http://localhost:3000/"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <b>skincare</b>
          </a>

          {isDropdownVisible && (
            <div
              className="skincare"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <ul>
                <li className="first">BY CATEGORY</li>
                <li>Serums</li>
                <li>Cleansers</li>
                <li>Eye & Lip</li>
                <li>Toners</li>
                <li>Face Mask</li>
                <li>Mini Bliss</li>
              </ul>
              <ul>
                <li className="first">BY CONCERN</li>
                <li>Acne</li>
                <li>Discoloration</li>
                <li>Dullness</li>
                <li>Finelines</li>
                <li>Dryness</li>
              </ul>
              <ul>
                <li className="first">BY COLLECTION</li>
                <li>All Collection</li>
                <li>Bright idea</li>
                <li>Clear Genius</li>
                <li>Youth Got this</li>
              </ul>
              <img class="img1" src="https://cdn11.bigcommerce.com/s-9p889rxpkb/images/stencil/original/image-manager/rest-assured.jpg?t=1663703636&_gl=1*1nyv6jg*_ga*MTIzNjY1NjYwNy4xNjUyMTM3Njc4*_ga_WS2VZYPC6G*MTY2MzcwMzE2MC40MDIuMS4xNjYzNzAzNzM0LjU3LjAuMA." />
              <img class="img1" src="https://cdn11.bigcommerce.com/s-9p889rxpkb/images/stencil/500x659/attribute_rule_images/19_source_1571348777.jpg" />
            </div>
          )}

          <span>/</span>
          <a href="http://localhost:3000/">
            <b>body & hair care</b>
          </a>
          <span>/</span>
          <a href="http://localhost:3000/">
            <b>sets & kits</b>
          </a>
          <span>/</span>
          <a href="http://localhost:3000/">
            <b>shop all</b>
          </a>
          <span>/</span>
          <a href="http://localhost:3000/">
            <b>this is bliss</b>
          </a>
        </NavContent>
        {search && <SearchBar />}
      </NavBar>

      <Moblienav toggle={{ isVisible: toggle }} />
    </>
  );
};

export default Nav;
