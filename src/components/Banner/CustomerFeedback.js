import React from "react";

const CustomerFeedback = ({ customer }) => {
  return (
    <div className="border p-3 mt-28">
      <div >
        <img src={customer.img} alt="" className="mx-auto"/>
      </div>
      <div>
        <h1>{customer.name}</h1>
        <p>{customer.comment}</p>
      </div>
    </div>
  );
};

export default CustomerFeedback;
