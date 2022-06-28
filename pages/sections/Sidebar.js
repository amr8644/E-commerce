import React, { useState } from "react";
import List from "../componets/List";
import { useSession, signOut } from "next-auth/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBorderAll,
  faPercent,
  faQuestionCircle,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  const [show, setShow] = useState(true);
  const { data: session } = useSession();

  const changeShow = () => {
    if (show) {
      setShow(false);
    }
    if (!show) {
      setShow(true);
    }
  };

  return (
    <section className="sm:hidden lg:block scrollbar overflow-y-scroll fixed bg-darkBlue top-[70px] left-0  w-1/5  bottom-0 border-t-2 border-primary2">
      <div className="relative">
        <button
          onClick={changeShow}
          className="text-base text-white my-2 flex px-5 py-2 w-full rounded-lg cursor-pointer hover:bg-primary2 hover:text-orange2 duration-300"
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
        <button className="text-base text-white my-2 flex px-5 py-2 w-full rounded-lg cursor-pointer hover:bg-primary2 hover:text-orange2 duration-300">
          <FontAwesomeIcon icon={faPercent} className="w-[16px] mx-3" />
          Sell on Amazon
        </button>
      </div>
      <div>
        <button className="text-base text-white my-2 flex px-5 py-2 w-full rounded-lg cursor-pointer hover:bg-primary2 hover:text-orange2 duration-300">
          <FontAwesomeIcon icon={faQuestionCircle} className="w-[16px] mx-3" />
          Help
        </button>
      </div>
      {session && (
        <button
          onClick={(e) => {
            e.preventDefault();
            signOut();
          }}
          className="text-base text-white my-2 flex px-5 py-2 w-full rounded-lg cursor-pointer hover:bg-primary2 hover:text-orange2 duration-300"
        >
          <FontAwesomeIcon icon={faTimes} className="w-[16px] mx-3" />
          Log Out
        </button>
      )}
    </section>
  );
};

export default Sidebar;
