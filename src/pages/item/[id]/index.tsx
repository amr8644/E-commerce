/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import Navbar from "../../sections/Navbar";
import Sidebar from "../../sections/Sidebar";
import axios, { AxiosRequestConfig } from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const item = ({ data }: any) => {
  const { id, title, price, description, image, category } = data;
  const success = () => toast.success(`Item was added to your cart`);
  const error = () => toast.error(`Item is already in the cart`);

  const [quantity, setQuantity] = useState(1);

  const [productsData, setProductsData] = useState({
    id: id,
    name: title,
    description: description,
    image: image,
    quantity: quantity,
    price: price,
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const config: AxiosRequestConfig = {
      url: "/api/productService",
      data: productsData,
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const res = await axios(config);

    if (!res) {
      error();
      throw new Error("Error has occured");
    }

    success();

    return await res.config.data;
  };

  return (
    <>
      <Navbar />
      <Sidebar />
      <div
        key={id}
        className="lg:h-screen sm:h-auto sm:top-[70px] relative font-PTSans bg-superwhite sm:w-screen px-6 lg:w-4/5 lg:float-right flex items-center justify-center"
      >
        <ToastContainer />
        <div className="w-14 top-0 absolute left-0  m-4 z-20">
          <Link href={"/"}>
            <button className="btn w-[22px] btn-square btn-outline bg-orange2 text-superwhite">
              {" "}
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>
          </Link>
        </div>
        <div className="hero-content  flex-col lg:flex-row relative">
          <img
            src={image}
            alt={title}
            className=" md:w-[300px] md:h-[400px] sm:w-11/12   rounded-lg shadow-2xl px-5"
          />
          <div>
            <h1 className="sm:text-3xl lg:text-4xl font-bold  text-primary2">
              {title}
            </h1>
            <p className="py-6">{description}</p>
            <div className="flex justify-between items-center">
              <span className="text-3xl font-bold text-gray-900 dark:text-primary2">
                ${price}
              </span>
            </div>
            <div className="card-actions flex justify-between px-3 my-3 w-full flex-row">
              <div className="badge badge-outline capitalize">{category}</div>
            </div>
            <button
              onClick={handleSubmit}
              type="submit"
              className="btn bg-orange2 text-superwhite"
            >
              Put in Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export const getServerSideProps = async (context: any) => {
  const url = `https://fakestoreapi.com/products/${context.params.id}`;

  const resp = await fetch(url);
  const data = await resp.json();

  return {
    props: {
      data,
    },
  };
};

export default item;
