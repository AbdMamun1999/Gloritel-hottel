import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper";

// image for slider
import imgOne from "../../images/image/slider01.png";
import imgTwo from "../../images/image/slider02.png";
import imgThree from "../../images/image/slider03.png";

const RecomendedProducts = () => {
  return (
    <>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={Pagination}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="w-[700px]">
            <img src={imgOne} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[350px] h-[300px]">
          <img src={imgTwo} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={imgThree} alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default RecomendedProducts;
