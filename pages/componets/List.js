import React from "react";

const List = ({ name }) => {
  return (
    <div className="flex w-5/6  px-8 py-2 items-start justify-start rounded-lg cursor-pointer hover:text-orange2 duration-300">
      <p className="tracking-wide">{name}</p>
    </div>
  );
};

export default List;
