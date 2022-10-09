import React from "react";
import imgOne from "../../images/clients/Rectangle729.png";
import imgTwo from "../../images/clients/Rectangle730.png";
import imgThree from "../../images/clients/Rectangle731.png";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Pagination } from "swiper";

const customers = [
  {
    name: "Floyd Miles",
    img: imgOne,
    des: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
  },
  {
    name: "Floyd Miles",
    img: imgTwo,
    des: "ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
  {
    name: "Floyd Miles",
    img: imgThree,
    des: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam...",
  },
];

const CustomerFeedback = ({ customer }) => {
  return (
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
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      {customers.map((customer, index) => {
        return (
          <SwiperSlide key={index + 1}>
            <div className="border p-3 mt-28">
              <div>
                <img src={customer.img} alt="" className="mx-auto" />
              </div>
              <div>
                <h1 className="text-[22px]">{customer.name}</h1>
                <p className="text-[16px]">{customer.des}</p>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default CustomerFeedback;
