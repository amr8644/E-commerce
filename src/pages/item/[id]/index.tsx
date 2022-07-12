/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import Navbar from "../../sections/Navbar";
import Sidebar from "../../sections/Sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";

const item = ({ data }: any) => {
  const { id, title, price, description, image, category } = data;

  const [quantity, setQuantity] = useState(1);

  const [productsData, setProductsData] = useState({
    id: id,
    name: title,
    description: description,
    image: image,
    quantity: quantity,
    price: price * quantity,
  });

  const increment = (e: any) => {
    setQuantity((index: any) => {
      let newIndex = index + 1;
      return newIndex;
    });
  };

  const decrement = () => {
    setQuantity((index: any) => {
      let newIndex = index - 1;
      return newIndex;
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
  };

  return (
    <>
      <Navbar />
      <Sidebar />
      <div
        key={id}
        className="lg:h-screen sm:h-auto sm:top-[70px] relative font-PTSans bg-superwhite sm:w-screen px-6 lg:w-4/5 lg:float-right flex items-center justify-center"
      >
        <div className="hero-content  flex-col lg:flex-row">
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
              <div className="flex h-full items-center justify-center">
                <button
                  onClick={increment}
                  className="btn-sm rounded-md mx-2 bg-orange2 text-superwhite"
                >
                  <FontAwesomeIcon icon={faArrowUp} />
                </button>
                <span className="font-mono text-2xl text-darkBlue">
                  <span>{quantity}</span>
                </span>
                <button
                  onClick={decrement}
                  className="btn-sm  bg-orange2 text-superwhite rounded-md mx-2"
                >
                  <FontAwesomeIcon icon={faArrowDown} />
                </button>
              </div>
            </div>
            <button type="submit" className="btn bg-orange2 text-superwhite">
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
