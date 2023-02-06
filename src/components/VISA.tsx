/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";

const VISA = () => {
  return (
    <div className="overflow-visible flex justify-between items-center mt-2 ">
      <div className="rounded w-52 h-28 bg-gray-500 py-2 px-4 relative right-10 bg-gray text-superwhite">
        <span className="italic text-lg font-medium text-gray-200 underline">
          VISA
        </span>

        <div className="flex justify-between items-center pt-4 ">
          <span className="text-xs text-gray-200 font-medium">****</span>
          <span className="text-xs text-gray-200 font-medium">****</span>
          <span className="text-xs text-gray-200 font-medium">****</span>
          <span className="text-xs text-gray-200 font-medium">****</span>
        </div>

        <div className="flex justify-between items-center mt-3">
          <span className="text-xs  text-gray-200">Giga Tamarashvili</span>
          <span className="text-xs  text-gray-200">12/18</span>
        </div>
      </div>

      <div className="flex justify-center  items-center flex-col">
        <img
          src="https://img.icons8.com/color/96/000000/mastercard-logo.png"
          width="40"
          className="relative right-5"
        />
        <span className="text-xs font-medium text-gray-200 bottom-2 relative right-5">
          mastercard.
        </span>
      </div>
      {/*  */}
    </div>
  );
};

export default VISA;
