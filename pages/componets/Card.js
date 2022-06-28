import React, { useEffect, useState } from "react";

const Card = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const url = "https://fakestoreapi.com/products?limit=5";
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
    <>
      {data.map((e) => {
        const { id, title, price, description, image, category } = e;
        return (
          <section
            key={id}
            class=" card-compact bg-superwhite rounded-lg  w-80 mx-3 mt-2 shadow-xl text-darkBlue"
          >
            <div className=" w-full flex items-center justify-center">
              <img
                src={image}
                alt={title}
                className=" w-1/2 flex items-center justify-center"
              />
            </div>
            <div class="card-body">
              <h2 class="card-title">{truncateString(title, 30)}</h2>
              <div class="rating">
                <input
                  type="radio"
                  name="rating-2"
                  class="mask mask-star-2 bg-warning"
                />
                <input
                  type="radio"
                  name="rating-2"
                  class="mask mask-star-2 bg-warning"
                  checked
                />
                <input
                  type="radio"
                  name="rating-2"
                  class="mask mask-star-2 bg-warning"
                />
                <input
                  type="radio"
                  name="rating-2"
                  class="mask mask-star-2 bg-warning"
                />
                <input
                  type="radio"
                  name="rating-2"
                  class="mask mask-star-2 bg-warning"
                />
              </div>
              <p>{description}</p>
              <div class="card-actions justify-end">
                <div class="badge badge-outline capitalize">{category}</div>
              </div>
              <div className=" w-full">
                <h3 className="text-2xl  text-primary2">${price}</h3>
              </div>
              <div class="card-actions justify-end my-2">
                <button class="btn bg-orange2 text-superwhite">
                  Put to cart
                </button>
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
};

export default Card;
