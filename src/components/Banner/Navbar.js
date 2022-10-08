import React, { useState } from "react";
import { FaBars, FaTimes, FaSearch } from "react-icons/fa";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  return (
    <nav className="w-full bg-transparent text-white mt-2 ">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8 ">
        <div>
          <div className="flex items-center justify-between py-1 md:block ">
            <a href="javascript:void(0)">Gloritel</a>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? <FaTimes></FaTimes> : <FaBars></FaBars>}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            //   md:inline-block
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }  `}
          >
            <div className="flex flex-col lg:flex-row lg:gap-x-[88px] gap-y-8 ">
              <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 uppercase text-sm  text-white">
                <li>
                  <a href="javascript:void(0)">Find Hotels</a>
                </li>
                <li>
                  <a href="javascript:void(0)">Locations</a>
                </li>
                <li>
                  <a href="javascript:void(0)">About</a>
                </li>
                <li>
                  <a href="javascript:void(0)">Contact</a>
                </li>
              </ul>
              <ul >
                <li className="bg-[#FDC463] px-8 py-1">
                  <a href="javascript:void(0)">Sign Up</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
