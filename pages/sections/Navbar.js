import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart, faBell } from "@fortawesome/free-regular-svg-icons";

const Navbar = () => {
  return (
    <section className="bg-darkBlue  w-full h-[90px] flex flex-row justify-between px-3">
      <div className="relative flex items-start justify-start w-1/6">
        <Image
          src="/LA.png"
          alt="Logo"
          width={100}
          height={100}
          layout="intrinsic"
        />
      </div>

      <div className="h-full flex items-center justify-center  w-1/3">
        <input
          type="text"
          placeholder={"Search..."}
          className="w-full bg-primary outline-0 text-white  placeholder-white  px-3 py-2 rounded-l-md border  border-otherBlue text-sm"
        />
        {/* <button type='button' className="bg-otherBlue text-white  placeholder-white  px-3 py-2 border-none border-grey ">All Categories</button> */}
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className="bg-orange2 text-white py-[11px] px-3 w-[42px] rounded-r-md border-none cursor-pointer"
        />
      </div>

      <div className="w-1/3 h-full flex items-center justify-end mr-4">
        <FontAwesomeIcon
          icon={faHeart}
          className="text-white py-[11px] px-3 w-[40px] rounded-lg border-none cursor-pointer hover:bg-orange2 hover:text-darkBlue duration-500 mx-3"
          size={"12px"}
        />
        <FontAwesomeIcon
          icon={faShoppingCart}
          className="text-white py-[11px] px-3 w-[40px] rounded-lg border-none cursor-pointer hover:bg-orange2 hover:text-darkBlue duration-500 mx-3"
          size={"12px"}
        />
        <FontAwesomeIcon
          icon={faBell}
          className="text-white py-[11px] px-3 w-[40px] rounded-lg border-none cursor-pointer hover:bg-orange2 hover:text-darkBlue duration-500 mx-3"
          size={"12px"}
        />
        <Image
          className="h-8 w-8 rounded-full cursor-pointer mx-3"
          src="/Logo.png"
          alt="Avatar"
          width={52}
          height={52}
          layout="intrinsic"
        />
      </div>
    </section>
  );
};

export default Navbar;
