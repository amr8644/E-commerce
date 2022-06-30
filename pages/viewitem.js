import React, { useEffect } from "react";
import Navbar from "./sections/Navbar";
import Sidebar from "./sections/Sidebar";
import { getData } from "./api/auth/getdata";

const ViewItem = () => {
  const data = getData();
  console.log(data);

  return (
    <>
      <Navbar />
      <Sidebar />
      <div class=" lg:h-screen sm:h-auto sm:top-[70px] relative font-PTSans bg-white sm:w-screen px-6 lg:w-4/5 lg:float-right flex items-center justify-center">
        <div class="hero-content  flex-col lg:flex-row">
          <img
            src="https://api.lorem.space/image/movie?w=260&h=400"
            class="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 class="text-5xl font-bold  text-primary2">Box Office News!</h1>
            <p class="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <div class="flex justify-between items-center">
              <span class="text-3xl font-bold text-gray-900 dark:text-primary2">
                $557.56
              </span>
            </div>
            <div class="card-actions justify-end">
              <div class="badge badge-outline capitalize">Mens</div>
            </div>
            <button class="btn bg-orange2 text-superwhite">Put in Cart</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewItem;
