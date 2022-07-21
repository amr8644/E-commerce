/* eslint-disable react/no-unescaped-entities */
import React, { lazy, Suspense, useState } from "react";
import CategoriesIcon from "../components/CategoriesIcon";
import Hero from "../components/Hero";

const ItemCard = lazy(() => import("../components/ItemCard"));
const MainContent = () => {
  return (
    <>
      <section className="top-[70px] relative font-PTSans bg-white sm:w-screen lg:w-4/5 lg:float-right ">
        {/* Banner */}
        <article className=" bg-white w-full h-auto top-[90px]">
          <Hero />
        </article>
        {/* Categories */}
        <article className="w-full mt-10 flex items-center justify-center flex-col px-6 ">
          <div className=" w-[95%]">
            <h2 className="text-4xl  font-[600]  text-otherBlue ">
              Popular Categories
            </h2>
          </div>
          <CategoriesIcon />
        </article>

        <article className="w-[95%] px-6 mb-10">
          <h2 className="text-4xl font-[600] text-otherBlue my-5">Hot Deals</h2>
          <ItemCard itemsLink={"https://fakestoreapi.com/products?limit=15"} />
          {/* <h2 className="text-4xl font-[600] text-otherBlue my-5">Jewelery</h2>
          <ItemCard
            itemsLink={"https://fakestoreapi.com/products/category/jewelery"}
          />
          <h2 className="text-4xl font-[600] text-otherBlue my-5">
            Electronics
          </h2>
          <ItemCard
            itemsLink={"https://fakestoreapi.com/products/category/electronics"}
          />
          <h2 className="text-4xl font-[600] text-otherBlue my-5">
            Men's Clothing
          </h2>
          <ItemCard
            itemsLink={
              "https://fakestoreapi.com/products/category/men's clothing"
            }
          /> */}
        </article>
      </section>
    </>
  );
};

export default MainContent;
