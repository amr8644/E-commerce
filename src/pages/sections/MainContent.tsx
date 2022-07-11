import React, { lazy, Suspense } from "react";
import CategoriesIcon from "../components/CategoriesIcon";

const ItemCard = lazy(() => import("../components/ItemCard"));

const MainContent = () => {
  return (
    <>
      <section className="top-[70px] relative font-PTSans bg-white sm:w-screen px-6 lg:w-4/5 lg:float-right ">
        {/* Banner */}
        <article className=" bg-white w-full flex items-center justify-center h-auto md:h-[270px]">
          <div className=" bg-orange2 rounded-2xl ml-4 sm:w-[95%] h-[95%] flex items-start justify-center flex-col sm:px-8 py-2 mt-4">
            <h2 className="text-white text-6xl sm:my-5 md:my-3 font-semibold">
              Free Delivery!
            </h2>
            <p className="text-white text-base sm:my-5 md:my-2 font-normal">
              Dont miss it out! Only today get free Next Day <br /> delivery on
              all your orders.
            </p>
            <button className="bg-white font-semibold text-lg text-orange2 rounded-2xl sm:my-5 md:my-2 cursor-pointer px-4 py-2 shadow-xl">
              Browse products
            </button>
          </div>
        </article>
        {/* Categories */}
        <article className="w-full mt-10 flex items-center justify-center flex-col">
          <div className=" w-[95%]">
            <h2 className="text-2xl font-[600]  text-otherBlue ">
              Popular Categories
            </h2>
          </div>
          <CategoriesIcon />
        </article>

        <article className=" mb-10 bg-white  flex items-center justify-center flex-col">
          <div className="w-[95%]">
            <h2 className="text-4xl font-[600] text-otherBlue my-5">
              Hot Deals
            </h2>
          </div>
        </article>
        <Suspense fallback={<h2>Hello Everyone....</h2>}>
          <ItemCard />
        </Suspense>
      </section>
    </>
  );
};

export default MainContent;
