import React from "react";

const CustomerFeedback = ({ customer }) => {
  return (
    <div className="border p-3 mt-28">
      <div >
        <img src={customer.img} alt="" className="mx-auto"/>
      </div>
      <div>
        <h1 className="text-[22px]">{customer.name}</h1>
        <p className="text-[16px]">{customer.comment}</p>
      </div>
    </div>
  );
};

export default CustomerFeedback;
