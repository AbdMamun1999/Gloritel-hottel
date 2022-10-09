import React from "react";

const SubscribeSeciton = () => {
  return (
    <div className="flex flex-col gap-y-10  items-center my-20">
      <div>
        <h1 className="text-[60px] text-center">Subscribe to Our Newsletter</h1>
        <p className="text-[20px] text-center">
          Don’t miss this opportunity. Subscribe now
        </p>
      </div>
      <div className="">
        <form>
          <input
            type="email"
            className="border bg-[#EDEDED] lg:w-[550px] px-6 py-3 outline-none rounded-l"
          />
          <input
            type="submit"
            value="SUBSCRIBE"
            className="bg-[#FDC463] px-3 py-3 rounded-r"
          />
        </form>
      </div>
    </div>
  );
};

export default SubscribeSeciton;
