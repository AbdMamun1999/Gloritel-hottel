import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import imgOne from "../../images/clients/Rectangle729.png";
import imgTwo from "../../images/clients/Rectangle730.png";
import imgThree from "../../images/clients/Rectangle731.png";
import CustomerFeedback from "./CustomerFeedback";

const CustomerFeedbacks = () => {
  const customers = [
    {
      name: "Floyd Miles",
      img: imgOne,
      comment:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
    },
    {
      name: "Ronald Richards",
      img: imgTwo,
      comment:
        "ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
    {
      name: "Savannah Nguyen",
      img: imgThree,
      comment:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam...",
    },
  ];

  return (
    <div className="w-[80%] mx-auto">
      <div className="flex flex-row justify-between items-center mt-10">
        <div>
          <h1 className="text-2xl">Our Customer Feedback</h1>
          <p className="text-[22px]">Don’t take our word for it. Trust our customers</p>
        </div>
        <div className="flex flex-row gap-5">
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
      <div className="grid grid-cols-3 gap-5">
        {customers.map((customer, index) => (
          <CustomerFeedback key={index + 1} customer={customer} />
        ))}
      </div>
    </div>
  );
};

export default CustomerFeedbacks;
