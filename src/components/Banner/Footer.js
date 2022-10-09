import React from "react";
import {
  FaInstagramSquare,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="p-16 bg-[#FEE0AE]">
        <div className="grid lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-2 md:gap-x-5 lg:justify-items-center gap-y-8 w-[80%] mx-auto">
          <div>
            <h3 className="text-[25px] text-[#070707]">Gloritel</h3>
            <p className="text-[16px] text-[#133240] mt-5]">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint.
            </p>
          </div>
          <div>
            <h3 className="text-[25px] text-[#070707]">Quick links</h3>
            <ul className="text-[18px] mt-2 flex flex-col gap-y-3">
              <li>Home</li>
              <li>Find Hottles</li>
              <li>Location</li>
              <li>About</li>
            </ul>
          </div>
          <div>
            <h3 className="text-[#070707] text-[25px]">Information</h3>
            <ul className="text-[18px] mt-2 flex flex-col gap-y-3">
              <li>Privacy Policy</li>
              <li>Term of Service</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h3 className="text-[#070707] text-[25px]">Social</h3>
            <ul className="flex flex-row gap-x-4 mt-[22px]">
              <a href="">
                <FaFacebook size={28}/>
              </a>
              <a href="">
                <FaInstagramSquare size={30}/>
              </a>
              <a href="">
                <FaTwitter size={28}/>
              </a>
              <a href="">
                <FaLinkedin size={29}/>
              </a>
            </ul>
          </div>
        </div>
      </div>
      <div
        className=" bg-[#F6CA7E] py-[22px]"
      >
        <div className="w-[80%] mx-auto">
          <small className="text-[#000000] text-[14px]">
            Copyright &#169; 2022 | Designed by Hina HM
          </small>
        </div>
      </div>
    </>
  );
};

export default Footer;
