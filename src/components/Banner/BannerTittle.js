import React from "react";
import SearchHotel from "./SearchHotel";
import { FaChevronDown } from "react-icons/fa";

const BannerTittle = () => {
  return (
    <div className="grid grid-cols-2 w-[80%] mx-auto mt-[80px]">
      <div>
        <h1 className="text-white text-6xl flex items-end justify-between">
          <span className="border-2">Find Most Luxurious Hottels Across The Globe</span>
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
