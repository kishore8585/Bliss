import Slider from "react-slick";
import CardContents from "./CardContents";
import { useEffect, useState } from "react";
import axios from 'axios'
export const SimpleSlider = () => {
  const [prod,setProd]=useState([])
  useEffect(()=>{
      axios.get("http://127.0.0.1:4000/api/showproduct")
        .then((res)=>{
          setProd(res.data)
          console.log(res.data)
        })
  },[])
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
      <Slider {...settings}>
        {prod.map((i)=>{
            return(
              <CardContents
            img = {`/images/${i.image}`}
            heading= {i.pname}
            para="Spa-strength Glycolic Resurfacing Pads to Smooth & Brighten"
            money ={i.price}
            ct = "15 ct"
        />
            )
        })
        }
        {/* <CardContents
            img = "https://cdn11.bigcommerce.com/s-9p889rxpkb/images/stencil/1200w/products/385/1214/BLISS_Bright_Idea_Vitamin_C_SERUM_30ml_FINALupdated__36719.1676408530.jpg"
            headin= "Bright Idea Serum"
            para="Vitamin C + Tri-Peptide Collagen Protecting & Brightening Serum"
            money = "28"
            ct = "7 ct"
        />
        <CardContents
            img = "https://cdn11.bigcommerce.com/s-9p889rxpkb/images/stencil/1200w/products/406/1277/Youth_Got_This_Moisturizer_Front__84970.1676408584.jpg"
            headin= "Youth Got This  Moisturizer"
            para="Prevent-4™ Pure Retinol Deep Hydration Moisturizer"
            money = "28"
            ct = "9 ct"
        />
        <CardContents
            img = "https://cdn11.bigcommerce.com/s-9p889rxpkb/images/stencil/1200w/products/424/1391/Pro_Liquid_Exfoliant_1000x1000__53361.1674080871.jpg"
            headin= "BlissPro Liquid Exfoliant"
            para="11.8% AHA | BHA | PHA LIQUID EXFOLIANT"
            money = "24"
            ct = "8 ct"
        />
        <CardContents
            img = "https://cdn11.bigcommerce.com/s-9p889rxpkb/images/stencil/1200w/products/425/1314/Rest_Assured_Eye_Cream_Front__54512.1674080733.jpg"
            headin= "Rest Assured Eye Cream"
            para="Dark Circle Reducing & Depuffing Eye Cream For Refreshed Eyes"
            money = "25"
            ct = "5 ct"
        />
        <CardContents
            img = "https://cdn11.bigcommerce.com/s-9p889rxpkb/images/stencil/1200w/products/445/1453/Mighty_Biome_Moisturizer_Concentrate_Front__97825.1674081071.jpg"
            headin= "Mighty Biome Pre/Post Biotics + Barrier Aid™ Moisturizer"
            para="Ultra-Hydrating Moisturizer Concentrate"
            money = "25"
            ct = ""
        />
        <CardContents
            img = "https://cdn11.bigcommerce.com/s-9p889rxpkb/images/stencil/1200w/products/466/1454/Blackhead_Breadown_Front__80282.1676408848.jpg"
            headin= "Blackhead Breakdown"
            para="Blackhead Purifying Stick"
            money = "18"
            ct = ""
        />
        <CardContents
            img = "https://cdn11.bigcommerce.com/s-9p889rxpkb/images/stencil/1200w/products/485/1618/BLISS_Vegan_Collagen_Hyaluronic_Acid_HYDRATING_Mask_FRONTflat__15303.1674514984.jpg"
            headin= "Hydrating Sheet Mask"
            para="Vegan Collagen + Hyaluronic Acid Sheet Mask"
            money = "4"
            ct = ""
        />
        <CardContents
            img = "https://cdn11.bigcommerce.com/s-9p889rxpkb/images/stencil/1200w/products/486/1620/BLISS_Vitamin_C_Niacinamide_Brightening_Mask_FRONTflat__21101.1674536387.jpg"
            headin= "Brightening Sheet Mask"
            para="Vitamin C + Niacinamide Sheet Mask"
            money = "4"
            ct = ""
        />
         <CardContents
            img = "https://cdn11.bigcommerce.com/s-9p889rxpkb/images/stencil/1200w/products/487/1625/BLISS_Block_Star_SPF50_Sunscreen_60mL_FRONT__03455.1677260656.jpg"
            headin= "Block Star Sheer"
            para="Liquid Daily Mineral Sunscreen SPF 50"
            money = "28"
            ct = ""
        />
         <CardContents
            img = "https://cdn11.bigcommerce.com/s-9p889rxpkb/images/stencil/1200w/products/488/1626/BLISS_Glow_Rush_Vitamin_C_45mL_Moisturizer_FRONTupdate__29489.1677260725.jpg"
            headin= "Glow Rush"
            para="Vitamin C Luminous Daily Moisturizer"
            money = "25"
            ct = ""
        /> */}
      </Slider>
    </>
  );
};
