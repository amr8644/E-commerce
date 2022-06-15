import React, { useState } from "react";
import List from "../componets/List";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBorderAll,
  faPercent,
  faQuestionCircle,
  faTimes,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

const SecondSidebar = () => {
  const [show, setShow] = useState(true);

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
      <section className="scrollbar z-50 overflow-y-scroll fixed bg-darkBlue left-0  w-2/6 bottom-0 border-t-2 border-primary">
        <div className="flex items-center justify-center w-full ">
          <input
            type="text"
            placeholder={"Search..."}
            className=" w-11/12 bg-primary outline-0 text-white  placeholder-white  px-3 py-2 rounded-l-md border  border-otherBlue text-sm"
          />
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="bg-orange2 text-white py-[11px] px-3 w-[34px] rounded-r-md border-none cursor-pointer"
          />
        </div>
        <div className="relative">
          <button
            onClick={changeShow}
            className="text-base text-white my-2 flex px-5 py-2 w-full rounded-lg cursor-pointer hover:bg-primary hover:text-orange2 duration-300"
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
        <button className="text-base text-white my-2 flex px-5 py-2 w-full rounded-lg cursor-pointer hover:bg-primary hover:text-orange2 duration-300">
          <FontAwesomeIcon icon={faTimes} className="w-[16px] mx-3" />
          Log Out
        </button>
      </section>
    </>
  );
};

export default SecondSidebar;
