/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Navbar from "./sections/Navbar";
import Sidebar from "./sections/Sidebar";
import { useSession, getSession } from "next-auth/react";
import { GetServerSideProps } from "next";
import { prisma } from "../../lib/prisma";
import { Product } from "@prisma/client";
import Link from "next/link";
import VISA from "./components/VISA";
import CreditForm from "./components/CreditForm";

const ShopingCart: React.FC<Props> = (props) => {
  const { data: session, status } = useSession();
  // console.log(props.product);

  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="lg:h-screen sm:h-auto sm:top-[70px] relative font-PTSans bg-superwhite sm:w-screen px-6 lg:w-4/5 lg:float-right flex items-center justify-center">
        <div className="py-12">
          <div className="max-w-md mx-auto bg-gray-100 shadow-lg rounded-lg  md:max-w-5xl">
            <div className="md:flex ">
              <div className="w-full p-4 px-5 py-5">
                <div className="md:grid md:grid-cols-3 gap-2 ">
                  <div className="col-span-2 p-5">
                    <h1 className="text-xl font-medium text-darkBlue">
                      Shopping Cart
                    </h1>

                    {props.product.map((e: any) => {
                      return (
                        <div
                          key={e.id}
                          className="flex justify-between items-center mt-6 pt-6"
                        >
                          <div className="flex  items-center">
                            <img
                              src={e.image}
                              width="60"
                              className="rounded-full "
                            />

                            <div className="flex flex-col ml-3">
                              <span className="md:text-md font-medium">
                                {e.name}
                              </span>
                              <span className="text-xs font-light text-gray-400">
                                {e.id}
                              </span>
                            </div>
                          </div>
                          <div className="flex justify-center items-center">
                            <div className="pr-8 ">
                              <span className="text-xs font-medium">
                                ${e.price}
                              </span>
                            </div>
                            <div>
                              <i className="fa fa-close text-xs font-medium"></i>
                            </div>
                          </div>
                        </div>
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
                          {" "}
                          $24.90
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
  products: Product[];
};

export default ShopingCart;
