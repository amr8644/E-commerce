import React, { useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faShoppingCart,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart, faBell } from "@fortawesome/free-regular-svg-icons";
import SecondSidebar from "../componets/SecondSideBar";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const changeOpen = () => {
    if (open) {
      setOpen(false);
    }
    if (!open) {
      setOpen(true);
    }
  };

  return (
    <>
      <section className="bg-darkBlue fixed z-10  w-full h-[70px] flex flex-row justify-between px-3">
        <div className="relative flex items-center justify-center lg:ml-10">
          <Image
            src="/amazon-svgrepo-com (1).svg"
            alt="Logo"
            width={50}
            height={50}
            layout="intrinsic"
          />
        </div>
        <button onClick={changeOpen} className="lg:hidden sm:block">
          <FontAwesomeIcon
            icon={faBars}
            className=" text-superwhite w-[22px]"
          />
        </button>

        <div className="sm:hidden h-full lg:flex items-center justify-center w-1/3 ">
          <input
            type="text"
            placeholder={"Search..."}
            className="w-full bg-primary outline-0 text-white  placeholder-white  px-3 py-2 rounded-l-md border  border-otherBlue text-sm"
          />
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="bg-orange2 text-white py-[11px] px-3 w-[42px] rounded-r-md border-none cursor-pointer"
          />
        </div>

        <div className="sm:hidden h-full lg:flex w-1/3  flex items-center justify-end mr-4">
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
      {open && <SecondSidebar />}
    </>
  );
};

export default Navbar;
