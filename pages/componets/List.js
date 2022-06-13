import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const List = ({ name, icon }) => {
  return (
    <aside className="relative w-full flex items-center justify-center my-3">
      <div className="flex px-5 py-2 items-start justify-start w-11/12 rounded-lg cursor-pointer hover:bg-primary hover:text-orange2 duration-300">
        <FontAwesomeIcon icon={icon} className="w-[16px] mx-3" />
        <p className="tracking-wide text-sm font-medium">{name}</p>
      </div>
    </aside>
  );
};

export default List;
