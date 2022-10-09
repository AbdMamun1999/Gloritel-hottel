import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import CustomerFeedback from "./CustomerFeedback";

const CustomerFeedbacks = () => {
 

  return (
    <div className="w-[80%] mx-auto">
      <div className="flex sm:flex-col md:flex-row justify-between items-center mt-10">
        <div>
          <h1 className="text-2xl">Our Customer Feedback</h1>
          <p className="text-[22px]">
            Don’t take our word for it. Trust our customers
          </p>
        </div>
        <div className="flex flex-row gap-x-5 gap-y-2">
          <button type="button" className="flex gap-1 items-center border">
            <span>
              <FaChevronLeft />
            </span>
            <span>Previous</span>
          </button>
          <button type="button" className="flex gap-1 items-center border">
            <span>Next</span>
            <span>
              <FaChevronRight />
            </span>
          </button>
        </div>
      </div>
      <CustomerFeedback></CustomerFeedback>
      
        {/* <div className="grid sm:grid-cols-1x lg:grid-cols-3 gap-5"> */}
        {/* {customers.map((customer, index) => (
          <CustomerFeedback key={index + 1} customer={customer} />
        ))} */}
        {/* </div> */}
      
    </div>
  );
};

export default CustomerFeedbacks;
