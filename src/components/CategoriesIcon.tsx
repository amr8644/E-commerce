import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  faLaptop,
  faCouch,
  faMobileAndroid,
  faCamera,
  faShirt,
  faBicycle,
  faHeadphonesSimple,
  faGamepad,
  faBook,
} from "@fortawesome/free-solid-svg-icons";

import "swiper/css/pagination";

const CategoriesIcon = () => {
  return (
    <Swiper
      spaceBetween={40}
      slidesPerView={9}
      scrollbar={{ draggable: true }}
      className=" w-full flex my-5"
      breakpoints={{
        0: {
          slidesPerView: 4,
          spaceBetween: 10,
        },
        520: {
          slidesPerView: 6,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 7,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 9,
          spaceBetween: 40,
        },
      }}
    >
      <SwiperSlide>
        <div className=" w-[55px]  h-[55px] flex items-center justify-center rounded-xl  bg-superwhite cursor-pointer text-otherBlue hover:bg-orange2 hover:text-superwhite duration-300">
          <FontAwesomeIcon icon={faLaptop} className="w-[24px]" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className=" w-[55px]  h-[55px] flex items-center justify-center rounded-xl  bg-superwhite cursor-pointer text-otherBlue hover:bg-orange2 hover:text-superwhite duration-300">
          <FontAwesomeIcon icon={faCouch} className="w-[24px]" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className=" w-[55px]  h-[55px] flex items-center justify-center rounded-xl  bg-superwhite cursor-pointer text-otherBlue hover:bg-orange2 hover:text-superwhite duration-300">
          <FontAwesomeIcon icon={faMobileAndroid} className="w-[24px]" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className=" w-[55px]  h-[55px] flex items-center justify-center rounded-xl  bg-superwhite cursor-pointer text-otherBlue hover:bg-orange2 hover:text-superwhite duration-300">
          <FontAwesomeIcon icon={faCamera} className="w-[24px]" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className=" w-[55px]  h-[55px] flex items-center justify-center rounded-xl  bg-superwhite cursor-pointer text-otherBlue hover:bg-orange2 hover:text-superwhite duration-300">
          <FontAwesomeIcon icon={faShirt} className="w-[24px]" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className=" w-[55px]  h-[55px] flex items-center justify-center rounded-xl  bg-superwhite cursor-pointer text-otherBlue hover:bg-orange2 hover:text-superwhite duration-300">
          <FontAwesomeIcon icon={faBicycle} className="w-[24px]" />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className=" w-[55px]  h-[55px] flex items-center justify-center rounded-xl  bg-superwhite cursor-pointer text-otherBlue hover:bg-orange2 hover:text-superwhite duration-300">
          <FontAwesomeIcon icon={faGamepad} className="w-[24px]" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className=" w-[55px]  h-[55px] flex items-center justify-center rounded-xl  bg-superwhite cursor-pointer text-otherBlue hover:bg-orange2 hover:text-superwhite duration-300">
          <FontAwesomeIcon icon={faBook} className="w-[24px]" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className=" w-[55px]  h-[55px] flex items-center justify-center rounded-xl  bg-superwhite cursor-pointer text-otherBlue hover:bg-orange2 hover:text-superwhite duration-300">
          <FontAwesomeIcon icon={faHeadphonesSimple} className="w-[24px]" />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default CategoriesIcon;
