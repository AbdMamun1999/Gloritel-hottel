import React from "react";
// style={{ backgroundImage: `url(${service.bgImg})` }}
const OurService = ({ service }) => {
  return (
    <div className="flex gap-x-3 items-center ">
      <div className="text-5xl bg-cover  w-[190px] h-[100px] bg-left-bottom relative">
        <span className="absolute top-0 right-2">{service.slNum}</span>
        <div className=" h-full flex items-end justify-start">
          <img src={service.bgImg} alt="" width={75} />
        </div>
      </div>
      <div>
        <h1 className="text-[45px] ">{service.name}</h1>
        <p className="text-[20px]">{service.des}</p>
      </div>
    </div>
  );
};

export default OurService;
