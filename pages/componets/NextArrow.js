import React from "react";

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <button
      onClick={onClick}
      className={`${className}`}
      style={{
        ...style,
        width: 35,
        height: 35,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginRight: 10,
        borderRadius: 7,
        boxShadow: "0 1px 3px rgb(0 0 0 / 10%)",
        cursor: "pointer",
        background: "#191D24",
      }}
    ></button>
  );
};

export default NextArrow;
