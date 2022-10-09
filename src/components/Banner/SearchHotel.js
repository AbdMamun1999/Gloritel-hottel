import React, { useState } from "react";

const SearchHotel = () => {
  const [payValue, setPayValue] = useState(false);
  const options = ["lahor"];
  return (
    <div className="bg-secondary w-[537px] flex flex-col gap-y-5 rounded-lg box-border p-6 shadow-lg">
      <div className="flex flex-col">
        <label>Where you go?</label>
        <input type="text" className="py-2 px-5 outline-none rounded-md" />
      </div>
      <div className="flex flex-row justify-between">
        <div className="flex flex-col">
          <label>Check in</label>
          <input type="text" className="py-2 px-5 outline-none rounded-md" />
        </div>
        <div className="flex flex-col">
          <label>Check out</label>
          <input type="text" className="py-2 px-5 outline-none rounded-md" />
        </div>
      </div>
      <div>
        <label>Guest</label>
        <div className="border-2">
          <select
            value="banana"
            className="py-2 px-2 outline-none rounded-md w-[100%]"
          >
            {options.map((option) => (
              <option value={option}>{option}</option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <input
          type="checkbox"
          id="vehicle3"
          name="vehicle3"
          value={payValue}
          onClick={() => setPayValue(true)}
        />{" "}
        Pay when checkin
      </div>
      <div>
        <button
          type="submit"
          className="bg-primary py-2 px-5 outline-none rounded-md w-[100%] mt-10"
        >
          Search Hottels
        </button>
      </div>
    </div>
  );
};

export default SearchHotel;
