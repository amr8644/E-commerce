/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/keyboard";
import "swiper/css/navigation";

const Hero = () => {
  const images = [
    { image: "/Banner 1.jpg", key: 1 },
    {
      image: "/Banner2.jpg",
      key: 2,
    },
    {
      image: "/Banner3.jpg",
      key: 3,
    },
    {
      image: "/Banner4.jpg",
      key: 4,
    },
  ];

  return (
    <>
      <Swiper slidesPerView={1}>
        {images.map((e) => {
          const { image, key } = e;
          return (
            <SwiperSlide key={key}>
              <img
                src={image}
                alt={`Banner #${key}`}
                className="w-full h-full"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default Hero;
