import React from "react";
import SearchHotel from "./SearchHotel";
import { FaChevronDown } from "react-icons/fa";

const BannerTittle = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2w-[80%] justify-items-center mx-auto lg:mt-[80px]">
      <div>
        <h1 className="text-white lg:text-6xl flex items-end justify-between">
          <span className="">Find Most Luxurious Hottels Across The Globe</span>
          <span className="text-black">
            <FaChevronDown />
          </span>
        </h1>
      </div>
      <div className="flex justify-end">
        <SearchHotel />
      </div>
    </div>
  );
};

export default BannerTittle;
