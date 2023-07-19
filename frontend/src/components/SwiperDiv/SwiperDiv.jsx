import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper";
import { SwiperContainer } from "./Swipercss";
import SwiperContent from "./SwiperContent";

function SwiperDiv() {
  return (
    <>
      <SwiperContainer>
        <Swiper
          modules={[Pagination, Autoplay]}
          autoplay={{delay:1500}}
          speed={2000}
          slidesPerView={1}
          pagination={{ clickable: true }}
          loop={true}
        >
          <SwiperSlide className="Swiper-card">
            <SwiperContent
              imglink="https://cdn11.bigcommerce.com/s-9p889rxpkb/images/stencil/original/image-manager/rest-assured.jpg?t=1663703636&_gl=1*1nyv6jg*_ga*MTIzNjY1NjYwNy4xNjUyMTM3Njc4*_ga_WS2VZYPC6G*MTY2MzcwMzE2MC40MDIuMS4xNjYzNzAzNzM0LjU3LjAuMA."
              title="Rest Assured"
              atag="This powerhouse eye cream visibly reduces dark circles while
                depuffing eyes for an always-well-rested look."
              btag=" 93% of users saw visible improvement in dark circles in 4
                weeks of less!"
              buttontag="Shop rest assured"
            />
          </SwiperSlide>
          <SwiperSlide className="Swiper-card">
            <SwiperContent
              imglink="https://cdn11.bigcommerce.com/s-9p889rxpkb/product_images/uploaded_images/hp-carousel-vitamin-c-tinycompress-min.jpg?t=1622707715&_gl=1*gzjyxe*_ga*MTQxNDE3MDg3MS4xNjA0MjY2MjEx*_ga_WS2VZYPC6G*MTY0MDQ1ODQ2OC42MTkuMS4xNjQwNDU4NzgyLjIy"
              title="Bright Idea"
              atag="Powered by clinical grade vitamin C, this bestselling 
                                trio boosts brightness & reduces the look of dark spots and for visibly glowing results."
              btag=""
              buttontag="Shop Bright idea"
            />
          </SwiperSlide>
          <SwiperSlide className="Swiper-card">
            <SwiperContent
              className="yellow"
              imglink="https://cdn11.bigcommerce.com/s-9p889rxpkb/product_images/uploaded_images/carousel-blockstar-hp-banner.jpg?t=1640623022&_gl=1*xpbc5j*_ga*MTQxNDE3MDg3MS4xNjA0MjY2MjEx*_ga_WS2VZYPC6G*MTY0MDYyMTQwOC42MjAuMS4xNjQwNjIzMDM3LjM3"
              title="Block Star"
              atag="This 100% mineral daily sunscreen blends like a dream and delivers broad spectrum protection, plus a smooth,
                               never-greasy finish."
              btag=""
              buttontag="Shop block star"
              idname="yellow"
            />
          </SwiperSlide>
        </Swiper>
      </SwiperContainer>
    </>
  );
}

export default SwiperDiv;
