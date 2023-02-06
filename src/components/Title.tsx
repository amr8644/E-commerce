import React from "react";

const Title = ({ title }: any) => {
  return (
    <div className=" w-[95%] my-3">
      <h2 className="text-4xl  font-[600]  text-otherBlue ">{title}</h2>
    </div>
  );
};

export default Title;
