import React, { useState } from "react";
import List from "./List";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import {
  faBorderAll,
  faPercent,
  faQuestionCircle,
  faTimes,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import Avatar2 from "./Avatar2";

const SecondSidebar = ({ open }) => {
  const [show, setShow] = useState(true);
  const { data: session, loading } = useSession();

  const changeShow = () => {
    if (show) {
      setShow(false);
    }
    if (!show) {
      setShow(true);
    }
  };

  return (
    <>
      <section
        className={`${
          open ? "translate-x-0" : "-translate-x-[1000px]"
        } scrollbar z-50 overflow-y-scroll fixed bg-darkBlue top-[70px] left-0 sm:w-[90%]  md:w-2/5 bottom-0 border-t-2 border-primary duration-300`}
      >
        {session && <Avatar2 />}
        {!session && !loading && (
          <div className="w-full flex-col flex items-center justify-end">
            <Link href={"/sign"}>
              <button className="my-3 w-3/4 font-PTSans font-semibold px-4 py-2 bg-orange2 text-superwhite rounded-lg hover:bg-superwhite hover:text-orange2 duration-300">
                Sign up
              </button>
            </Link>
            <Link href={"/login"}>
              <button className="my-3 w-3/4 font-PTSans font-semibold px-4 py-2 bg-orange2 text-superwhite rounded-lg hover:bg-superwhite hover:text-orange2 duration-300">
                Login
              </button>
            </Link>
          </div>
        )}
        <div className="flex items-center justify-center w-full my-4 px-1 border pt-4 border-t-otherBlue">
          <input
            type="text"
            placeholder={"Search..."}
            className=" w-[90%] bg-primary outline-0 text-white  placeholder-white  px-3 py-2 rounded-l-md border  border-otherBlue text-sm"
          />
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="bg-orange2 text-white py-[11px] px-3 w-[41px] rounded-r-md border-none cursor-pointer"
          />
        </div>
        <div className="relative">
          <button
            onClick={changeShow}
            className="\
            text-base text-white my-2 flex px-5 py-2 w-full rounded-lg cursor-pointer hover:bg-primary hover:text-orange2 duration-300"
          >
            <FontAwesomeIcon icon={faBorderAll} className="w-[16px] mx-3" />
            Categories
          </button>
          <ul
            className={`text-white text-sm ${
              show ? "translate-x-0" : "-translate-x-96  absolute"
            } duration-300`}
          >
            <List name={"Echo and Alexa"} />
            <List name={"Kindle"} />
            <List name={"Books"} />
            <List name={"Electronics"} />
            <List name={"Home & Garden"} />
            <List name={"Fashion"} />
            <List name={"Hobby"} />
            <List name={"Games"} />
            <List name={"Gift Cards"} />
          </ul>
        </div>
        <div className="">
          <button className="text-base text-white my-2 flex px-5 py-2 w-full rounded-lg cursor-pointer hover:bg-primary hover:text-orange2 duration-300">
            <FontAwesomeIcon icon={faPercent} className="w-[16px] mx-3" />
            Sell on Amazon
          </button>
        </div>
        <div className="">
          <button className="text-base text-white my-2 flex px-5 py-2 w-full rounded-lg cursor-pointer hover:bg-primary hover:text-orange2 duration-300">
            <FontAwesomeIcon
              icon={faQuestionCircle}
              className="w-[16px] mx-3"
            />
            Help
          </button>
        </div>
        {session && (
          <button
            onClick={(e) => {
              e.preventDefault();
              signOut();
            }}
            className="text-base text-white my-2 flex px-5 py-2 w-full rounded-lg cursor-pointer hover:bg-primary hover:text-orange2 duration-300"
          >
            <FontAwesomeIcon icon={faTimes} className="w-[16px] mx-3" />
            Log Out
          </button>
        )}
      </section>
    </>
  );
};

export default SecondSidebar;
