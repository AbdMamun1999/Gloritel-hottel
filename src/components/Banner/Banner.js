import React from "react";
import banner from "../../images/image/banner.png";
import BannerFooterLocation from "./BannerFooterLocation";
import BannerTittle from "./BannerTittle";
import Navbar from "./Navbar";

const Banner = () => {
  return <div className="h-[60vh] lg:h-[100vh] w-[100%] justify-center  bg-no-repeat bg-cover overflow-hidden" style={{ backgroundImage: `url(${banner})` }}>
    <Navbar/>
    <BannerTittle/>
    <BannerFooterLocation/>
  </div>;
};

export default Banner;
