/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/keyboard";
import "swiper/css/navigation";

// SwiperCore.use(Navigation);

const ItemCard = ({ itemsLink }: any) => {
  const [data, setData] = useState([]);

  function truncateString(str: any, num: any) {
    if (str.length > num) {
      let subStr = str.substring(0, num);
      return subStr + "...";
    } else {
      return str;
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetch(itemsLink);
        const data = await resp.json();
        setData(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [itemsLink]);

  return (
    <Swiper
      navigation
      spaceBetween={40}
      slidesPerView={4}
      scrollbar={{ draggable: true }}
      breakpoints={{
        0: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        520: {
          slidesPerView: 1,
          spaceBetween: 5,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      }}
    >
      {data.map((e) => {
        const { id, title, price, description, image, category } = e;
        return (
          <SwiperSlide
            key={id}
            id={id}
            className="w-[384px] min-h-[384px] mb-10 bg-superwhite rounded-lg shadow-md flex items-center flex-col justify-between"
          >
            <div className="flex items-center justify-center h-1/2">
              <img
                className=" p-8 w-1/2 rounded-t-lg"
                src={image}
                alt={title}
              />
            </div>
            <div className="h-1/2 px-5 flex flex-col ite justify-end">
              <a href="#">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 text-primary2">
                  {truncateString(title, 20)}
                </h5>
              </a>
              <p>{truncateString(description, 50)}</p>
              <div className="flex justify-between items-center">
                <span className="text-3xl font-bold text-gray-900 dark:text-primary2">
                  ${price}
                </span>
              </div>
              <div className="card-actions justify-end">
                <div className="badge badge-outline capitalize">{category}</div>
              </div>
              <div className="card-actions justify-end my-2">
                <Link href={"/item/[id]"} as={`/item/${id}`}>
                  <button className="btn bg-orange2 text-superwhite">
                    View Item
                  </button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ItemCard;
