import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import SecondSidebar from "../components/SecondSidebar";
import Avatar from "../components/Avatar";
import { useSession } from "next-auth/react";
import { faMagnifyingGlass, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Loader from "../components/Loader";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { data: session, status } = useSession();
  console.log(status, session);

  const changeOpen = () => {
    if (open) {
      setOpen(false);
    }
    if (!open) {
      setOpen(true);
    }
  };

  if (status == "loading") {
    return <Loader />;
  }

  return (
    <>
      <section
        className={`bg-darkBlue fixed z-10  w-full h-[70px] flex flex-row justify-between px-3`}
      >
        <div className="relative flex items-center justify-start lg:ml-10">
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
            className="w-full bg-primary2 outline-0 text-white  placeholder-white  px-3 py-2 rounded-l-md border  border-otherBlue text-sm"
          />
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="bg-orange2 text-white py-[11px] px-3 w-[42px] rounded-r-md border-none cursor-pointer"
          />
        </div>

        {session && <Avatar />}

        {!session && (
          <div className="sm:hidden w-1/3 lg:flex items-center justify-end">
            <Link href={"/signIn"}>
              <button className=" mx-2 font-PTSans font-semibold px-4 py-2 bg-orange2 text-superwhite rounded-lg hover:bg-superwhite hover:text-orange2 duration-300">
                Sign up
              </button>
            </Link>
            <Link href={"/api/auth/signin"}>
              <button className="mx-2 font-PTSans font-semibold px-4 py-2 bg-orange2 text-superwhite rounded-lg hover:bg-superwhite hover:text-orange2 duration-300">
                Login
              </button>
            </Link>
          </div>
        )}
      </section>
      <SecondSidebar open={open} />
    </>
  );
};

export default Navbar;
