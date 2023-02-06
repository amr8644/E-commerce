/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import Navbar from "./sections/Navbar";
import Sidebar from "./sections/Sidebar";
import CreditForm from "../components/CreditForm";
import Link from "next/link";
import { getSession } from "next-auth/react";
import { GetServerSideProps } from "next";
import { prisma } from "../../lib/prisma";
import { Product } from "@prisma/client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
   faArrowDown,
   faArrowUp,
   faTrash,
} from "@fortawesome/free-solid-svg-icons";
import axios, { AxiosRequestConfig } from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ShopingCart: React.FC<Props> = ({ product }: any) => {
   const [cart, setCart] = useState(product);
   const success = (msg: any) => toast.success(msg);

   let subTotal = 0;

   function truncateString(str: any, num: any) {
      if (str.length > num) {
         let subStr = str.substring(0, num);
         return subStr + "...";
      } else {
         return str;
      }
   }

   const handleDelete = async (e: any, product_id: any) => {
      const thispro = e.currentTarget;

      const config: AxiosRequestConfig = {
         url: "/api/deleteProductService",
         data: product_id,
         method: "delete",
         headers: {
            "Content-Type": "application/json",
         },
      };
      const res = await axios(config);
      thispro.closest("article").remove();
      success(`Item no. ${product_id} has been removed`);

      if (!res) {
         throw new Error("Error has occured");
      }
      return await res.config.data;
   };

   const handleUpdate = async (e: any, price: any, quantity: any) => {
      const config: AxiosRequestConfig = {
         url: "/api/updateProductService",
         data: { e, price, quantity },
         method: "put",
         headers: {
            "Content-Type": "application/json",
         },
      };
      const res = await axios(config);

      if (!res) {
         throw new Error("Error has occured");
      }

      return await res.config.data;
   };
   const increment = (product_id: any, price: any, quantity: any) => {
      setCart((cart: any) =>
         cart.map((item: any) =>
            product_id === item.id
               ? { ...item, quantity: item.quantity + 1 }
               : item
         )
      );
      handleUpdate(product_id, price, quantity);
   };

   const decrement = (product_id: any, price: any, quantity: any) => {
      setCart((cart: any) =>
         cart.map((item: any) =>
            product_id === item.id
               ? {
                    ...item,
                    quantity: item.quantity - (item.quantity > 1 ? 1 : 0),
                 }
               : item
         )
      );
      handleUpdate(product_id, price, quantity);
   };

   return (
      <>
         <Navbar product={cart} />
         <Sidebar />
         <ToastContainer />
         <div className="lg:h-auto sm:h-auto sm:top-[70px] relative font-PTSans bg-superwhite sm:w-screen px-6 lg:w-4/5 lg:float-right flex items-center justify-center">
            <div className="py-12">
               <div className="max-w-md mx-auto bg-gray-100 shadow-lg rounded-lg  md:max-w-5xl">
                  <div className="md:flex">
                     <div className="w-full p-4 px-5 py-5">
                        <div className="md:grid md:grid-cols-3 gap-2 ">
                           <div className="col-span-2 p-5">
                              <h1 className="text-xl font-medium text-darkBlue">
                                 Shopping Cart
                              </h1>

                              {cart.map((item: any) => {
                                 subTotal += item.price * item.quantity;
                                 return (
                                    <article
                                       key={item.id}
                                       id={item.id}
                                       className="text-darkBlue flex justify-between items-center mt-6 pt-6"
                                    >
                                       <div className="flex  items-center">
                                          <img
                                             src={item.image}
                                             width="60"
                                             className="rounded-full "
                                          />

                                          <div className="flex flex-col ml-3">
                                             <span className="md:text-md font-medium">
                                                {truncateString(item.name, 25)}
                                             </span>
                                             <span className="text-md font-semibold  text-primary2">
                                                $
                                                {`${Number(
                                                   (
                                                      item.price * item.quantity
                                                   ).toFixed(2)
                                                )}`}
                                             </span>
                                          </div>
                                       </div>

                                       <div className="flex  items-center justify-between">
                                          <div className=" flex h-full items-center justify-center">
                                             <button
                                                onClick={() =>
                                                   increment(
                                                      item.id,
                                                      item.price,
                                                      item.quantity
                                                   )
                                                }
                                                className="btn-sm rounded-lg mx-2 bg-orange2 text-superwhite"
                                             >
                                                <FontAwesomeIcon
                                                   icon={faArrowUp}
                                                />
                                             </button>
                                             <span className="font-mono text-2xl text-darkBlue">
                                                <span>{item.quantity}</span>
                                             </span>
                                             <button
                                                onClick={() =>
                                                   decrement(
                                                      item.id,
                                                      item.price,
                                                      item.quantity
                                                   )
                                                }
                                                className="btn-sm  bg-orange2 text-superwhite rounded-lg mx-2"
                                             >
                                                <FontAwesomeIcon
                                                   icon={faArrowDown}
                                                />
                                             </button>
                                             <button
                                                onClick={(e: any) =>
                                                   handleDelete(e, item.id)
                                                }
                                                className="btn-sm btn-error rounded-lg mx-3"
                                             >
                                                <FontAwesomeIcon
                                                   icon={faTrash}
                                                />
                                             </button>
                                          </div>

                                          <div>
                                             <i className="fa fa-close text-sm font-medium"></i>
                                          </div>
                                       </div>
                                    </article>
                                 );
                              })}

                              <div className="flex justify-between items-center mt-6 pt-6 border-t">
                                 <div className="flex items-center">
                                    <Link href={"/"}>
                                       <button className="btn btn-outline btn-info text-md font-medium text-blue-500">
                                          Continue Shopping
                                       </button>
                                    </Link>
                                 </div>

                                 <div className="flex justify-center items-end">
                                    <span className="text-sm font-medium text-gray-400 mr-1">
                                       Subtotal:
                                    </span>
                                    <span className="text-lg font-bold text-gray-800 ">
                                       ${Number(subTotal.toFixed(2))}
                                    </span>
                                 </div>
                              </div>
                           </div>
                           <CreditForm />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
   const session = await getSession({ req });

   if (!session) {
      res.statusCode = 403;
      return { props: { product: [] } };
   }

   const product = await prisma.product.findMany({
      where: {
         users: {
            every: {
               email: session?.user?.email !== null ? session?.user?.email : "",
            },
         },
      },
      include: {
         users: {
            select: { email: true },
         },
      },
   });
   return {
      props: { product },
   };
};

type Props = {
   product: Product[];
};

export default ShopingCart;
