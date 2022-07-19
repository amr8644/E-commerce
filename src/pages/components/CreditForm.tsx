import React from "react";
import VISA from "./VISA";

const CreditForm = () => {
  return (
    <div className="h-[500px] p-5 bg-gray-800 rounded overflow-visible bg-otherBlue text-superwhite">
      <span className="text-xl font-medium text-gray-100 block pb-3">
        Card Details
      </span>

      <span className="text-xs text-gray-400 ">Card Type</span>
      <VISA />
      <div className="flex justify-center flex-col pt-3">
        <label className="text-xs text-gray-400 ">Name on Card</label>
        <input
          type="text"
          className="focus:outline-none w-full h-6 bg-gray-800 text-superwhite bg-otherBlue placeholder-gray-300 text-sm border-b border-gray-600 py-4"
          placeholder="Giga Tamarashvili"
        />
      </div>

      <div className="flex justify-center flex-col pt-3">
        <label className="text-xs text-gray-400 ">Card Number</label>
        <input
          type="text"
          className="focus:outline-none w-full h-6 bg-gray-800 text-superwhite bg-otherBlue  placeholder-gray-300 text-sm border-b border-gray-600 py-4"
          placeholder="****     ****      ****      ****"
        />
      </div>

      <div className="grid grid-cols-3 gap-2 pt-2 mb-3">
        <div className="col-span-2 ">
          <label className="text-xs text-gray-400">Expiration Date</label>
          <div className="grid grid-cols-2 gap-2">
            <input
              type="text"
              className="focus:outline-none w-full h-6 bg-gray-800 text-superwhite bg-otherBlue placeholder-gray-300 text-sm border-b border-gray-600 py-4"
              placeholder="mm"
            />
            <input
              type="text"
              className="focus:outline-none w-full h-6 bg-gray-800 text-superwhite bg-otherBlue  placeholder-gray-300 text-sm border-b border-gray-600 py-4"
              placeholder="yyyy"
            />
          </div>
        </div>

        <div className="">
          <label className="text-xs text-gray-400">CVV</label>
          <input
            type="text"
            className="focus:outline-none w-full h-6 bg-gray-800 text-superwhite bg-otherBlue  placeholder-gray-300 text-sm border-b border-gray-600 py-4"
            placeholder="XXX"
          />
        </div>
      </div>
      <button className="btn bg-orange2 rounded focus:outline-none text-superwhite hover:bg-blue-600">
        Check Out
      </button>
    </div>
  );
};

export default CreditForm;
