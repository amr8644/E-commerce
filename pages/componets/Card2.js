import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Card2 = () => {
  const settings = {
    infinite: true,
    swipeToSlide: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [data, setData] = useState([]);

  const fetchData = async () => {
    const url = "https://fakestoreapi.com/products?limit=15";
    try {
      const resp = await fetch(url);
      const data = await resp.json();
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  function truncateString(str, num) {
    if (str.length > num) {
      let subStr = str.substring(0, num);
      return subStr + "...";
    } else {
      return str;
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Slider {...settings}>
      {data.map((e) => {
        const { id, title, price, description, image, category } = e;
        return (
          <div
            key={id}
            className="w-[384px] h-[384px] mb-10 bg-superwhite rounded-lg shadow-md"
          >
            <div className="flex items-center justify-center h-2/5">
              <img class=" p-8 w-1/2 rounded-t-lg" src={image} alt={title} />
            </div>
            <div class="h-3/5 px-5 flex flex-col justify-between">
              <a href="#">
                <h5 class="text-xl font-semibold tracking-tight text-gray-900 text-primary2">
                  {truncateString(title, 20)}
                </h5>
              </a>
              <p>{truncateString(description, 50)}</p>
              <div class="flex justify-between items-center">
                <span class="text-3xl font-bold text-gray-900 dark:text-primary2">
                  ${price}
                </span>
              </div>
              <div class="card-actions justify-end">
                <div class="badge badge-outline capitalize">{category}</div>
              </div>
              <div class="card-actions justify-end my-2">
                <button class="btn bg-orange2 text-superwhite">
                  Put to cart
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </Slider>
  );
};

export default Card2;
