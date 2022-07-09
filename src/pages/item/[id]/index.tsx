import React from "react";
import Navbar from "../../sections/Navbar";
import Sidebar from "../../sections/Sidebar";

const item = ({ data }:any) => {
  const { id, title, price, description, image, category } = data;

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
            className=" lg:w-[300px] h-[400px] rounded-lg shadow-2xl px-5"
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
            <div className="card-actions justify-end my-3">
              <div className="badge badge-outline capitalize">{category}</div>
            </div>
            <button className="btn bg-orange2 text-superwhite">
              Put in Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export const getServerSideProps = async (context:any) => {
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
