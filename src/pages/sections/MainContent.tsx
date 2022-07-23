/* eslint-disable react/no-unescaped-entities */
import React from "react";
import CategoriesIcon from "../components/CategoriesIcon";
import Hero from "../components/Hero";
import Title from "../components/Title";
import ItemCard from "../components/ItemCard";
import { useSession } from "next-auth/react";

const MainContent = () => {
  const { data: session } = useSession();
  console.log(session);

  return (
    <>
      <section className="top-[70px] relative font-PTSans bg-white sm:w-screen lg:w-4/5 lg:float-right ">
        {/* Banner */}
        <article className=" bg-white w-full h-auto top-[90px]">
          <Hero />
        </article>
        {/* Categories */}
        <article className="w-[95%] mb-10  px-6 ">
          <Title title={"Popular Categories"} />
          <CategoriesIcon />
        </article>

        {/* Items */}

        <article className="w-[95%] px-6 mb-10">
          <Title title={"Hot Deals"} />
          <ItemCard itemsLink={"https://fakestoreapi.com/products?limit=20"} />
        </article>

        <article className="w-[95%] px-6 mb-10">
          <Title title={"Electronics"} />
          <ItemCard
            itemsLink={"https://fakestoreapi.com/products/category/electronics"}
          />
        </article>
        <article className="w-[95%] px-6 mb-10">
          <Title title={"Men's Clothing"} />
          <ItemCard
            itemsLink={
              "https://fakestoreapi.com/products/category/men's clothing"
            }
          />
        </article>
        <article className="w-[95%] px-6 mb-10">
          <Title title={"Jewelery"} />
          <ItemCard
            itemsLink={"https://fakestoreapi.com/products/category/jewelery"}
          />
        </article>
        <article className="w-[95%] px-6 mb-10">
          <Title title={"Women's clothing"} />
          <ItemCard
            itemsLink={
              "https://fakestoreapi.com/products/category/women's clothing"
            }
          />
        </article>
      </section>
    </>
  );
};

export default MainContent;
