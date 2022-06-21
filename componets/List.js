import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const List = ({ name }) => {
  return (
    <aside className=" w-full flex items-center justify-center my-3">
      <div className="flex px-8 py-2 items-start justify-start w-5/6 rounded-lg cursor-pointer hover:text-orange2 duration-300">
        <p className="tracking-wide">{name}</p>
      </div>
    </aside>
  );
};

export default List;
