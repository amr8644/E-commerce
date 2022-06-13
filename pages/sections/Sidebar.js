import React from "react";
import List from "../componets/List";
import { faBorderAll } from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  return (
    <section className=" font-Poppins fixed bg-darkBlue left-0  w-[260px] h-full border-t-2 border-primary">
      <ul className="z-10 text-white text-sm">
        <List name={"Catergories"} icon={faBorderAll} />
        <List name={"Echo and Alexa"} />
      </ul>
    </section>
  );
};

export default Sidebar;
