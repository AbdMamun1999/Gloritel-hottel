import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

const BannerFooterLocation = () => {
  return (
    <div className="flex items-center gap-2 text-white mt-5 w-[80%] mx-auto text-xl ">
      <FaMapMarkerAlt />
      <small>Mercurser Hotel, Austria</small>
    </div>
  );
};

export default BannerFooterLocation;
