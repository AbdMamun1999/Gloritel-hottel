import React from "react";
import serviceImg from "../../images/icons/Rectangle13.png";
import OurService from "./OurService";

const OurServices = () => {
  const services = [
    {
      name: "Best Breakfast",
      bgImg: serviceImg,
      des: "Amet minim mollit non deserunt ahjas ullamco est sit aliqua dolor amet sint. Velit officia consequat ",
      slNum: "01",
    },
    {
      name: "Parking Area",
      bgImg: serviceImg,
      des: "Amet minim mollit non deserunt ahjas ullamco est sit aliqua dolor amet sint. Velit officia consequat ",
      slNum: "02",
    },
    {
      name: "Free Electicity",
      bgImg: serviceImg,
      des: "Amet minim mollit non deserunt ahjas ullamco est sit aliqua dolor amet sint. Velit officia consequat ",
      slNum: "03",
    },
  ];
  return (
    <div>
      <div>
        <h1 className="text-[53px] leading-[80px] mt-10">Benefits of using our services</h1>
      </div>
      <div className=" mt-12 flex flex-col gap-y-6">
        {services.map((service, index) => (
          <OurService key={index} service={service} />
        ))}
      </div>
    </div>
  );
};

export default OurServices;
