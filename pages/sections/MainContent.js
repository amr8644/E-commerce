import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLaptop,
  faCouch,
  faMobileAndroid,
  faCamera,
  faShirt,
  faBicycle,
  faHeadphonesSimple,
  faGamepad,
  faBook,
} from "@fortawesome/free-solid-svg-icons";
import CategoriesIcon from "../componets/CategoriesIcon";

const MainContent = () => {
  return (
    <section className="main font-PTSans">
      {/* Banner */}
      <article className="w-full flex items-center justify-center h-[270px]">
        <div className=" bg-orange2 rounded-2xl w-[95%] h-[95%] flex items-start justify-center flex-col px-8 py-2 mt-3">
          <h2 className="text-white text-6xl my-3 font-semibold">
            Free Delivery!
          </h2>
          <p className="text-white text-base my-2 font-normal">
            Dont miss it out! Only today get free Next Day <br /> delivery on
            all your orders.
          </p>
          <button className="bg-white font-semibold text-lg text-orange2 rounded-2xl my-1 cursor-pointer px-4 py-2 shadow-xl">
            Browse products
          </button>
        </div>
      </article>
      {/* Categories */}
      <article className="w-full mt-10 flex items-center justify-center flex-col ">
        <div className=" w-[95%]">
          <h2 className="text-2xl font-[600]  text-otherBlue ">
            Popular Categories
          </h2>
        </div>
        <div className="w-[95%]  mt-5 flex items-center justify-between">
          <CategoriesIcon icon={faLaptop} />
          <CategoriesIcon icon={faCouch} />
          <CategoriesIcon icon={faCamera} />
          <CategoriesIcon icon={faShirt} />
          <CategoriesIcon icon={faMobileAndroid} />
          <CategoriesIcon icon={faBicycle} />
          <CategoriesIcon icon={faHeadphonesSimple} />
          <CategoriesIcon icon={faBook} />
          <CategoriesIcon icon={faGamepad} />
        </div>
      </article>

      <article className="w-full mt-10 flex items-center justify-center flex-col ">
        <div className=" w-[95%]">
          <h2 className="text-2xl font-[600] text-otherBlue mt-5">Hot Deals</h2>
        </div>
        <div></div>
      </article>
    </section>
  );
};

export default MainContent;
