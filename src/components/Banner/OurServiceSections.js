import React from "react";
import OurServiceBanner from "./OurServiceBanner";
import OurServices from "./OurServices";

const OurServiceSections = () => {
  return (
    <div className="grid grid-cols-2 gap-x-9 mt-20 w-[80%] mx-auto">
      <div >
        <OurServiceBanner />
      </div>
      <div>
        <OurServices />
      </div>
    </div>
  );
};

export default OurServiceSections;
