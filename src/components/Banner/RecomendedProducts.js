import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

// image for slider
import imgOne from "../../images/image/slider01.png";
import imgTwo from "../../images/image/slider02.png";
import imgThree from "../../images/image/slider03.png";

const RecomendedProducts = () => {
  return (
    <div className="mt-20">
      <div className="w-[80%] mx-auto">
        <h1 className="text-[39px]">Recommended Hotels</h1>
        <p className="text-[25px]">
          Book hotels as based upon experienced the best booking ever. Highly
          recommended
        </p>
      </div>
      <div>
        <Swiper
          breakpoints={{
            640: {
              width: 640,
              slidesPerView: 1,
            },
            768: {
              width: 768,
              slidesPerView: 2,
            },
          }}
          spaceBetween={15}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
        >
          <SwiperSlide
            className="flex flex-col justify-center items-center"
            style={{ width: "600px", border: "2px" }}
          >
            <img src={imgOne} alt="" width={600} />
            <div className="flex justify-between">
              <div>
                <h1>Delight Hotel</h1>
              </div>
              <div>
                <h1>Singapore</h1>
                <a href="">Learn more</a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide
            className="flex flex-col justify-center items-center h-[100%] "
            style={{ width: "400px" }}
          >
            <img src={imgTwo} alt="" width={300} className="translate-y-10" />
            <div className="flex justify-between">
              <div>
                <h1>Delight Hotel</h1>
              </div>
              <div>
                <h1>Singapore</h1>
                <a href="">Learn more</a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="w-[300px] ">
            <img
              src={imgThree}
              alt=""
              width={150}
              className=" translate-y-1/4"
            />
            <div>
              <div>
                <h1>Delight Hotel</h1>
              </div>
              <div>
                <h1>Singapore</h1>
                <a href="">Learn more</a>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default RecomendedProducts;
