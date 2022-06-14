import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CategoriesIcon = ({ icon }) => {
  return (
    <div className=" w-[60px] h-[60px] flex items-center justify-center rounded-xl  bg-superwhite cursor-pointer text-otherBlue hover:bg-orange2 hover:text-superwhite duration-300">
      <FontAwesomeIcon icon={icon} className="w-[24px]" />
    </div>
  );
};

export default CategoriesIcon;
