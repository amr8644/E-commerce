import React, { useEffect, useState } from "react";

const Card = () => {
  const [data, setData] = useState([]);

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "6d47b7972emsha5bcdb005cde6b7p1c9062jsnee0862a69811",
      "X-RapidAPI-Host": "amazon24.p.rapidapi.com",
    },
  };

  const fetchData = async () => {
    const url =
      "https://amazon24.p.rapidapi.com/api/product?categoryID=aps&keyword=iphone&country=US&page=1";

    try {
      const resp = await fetch(url, options);
      const data = await resp.json();
      const dealsData = data.docs;
      setData(dealsData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log(data);

  return (
    // <>
    //   {data.map((e) => {
    //     const { product_detail_url, product_id } = e;
    //     console.log(product_id);
    //     console.log(e);
    //   })}
    // </>
    <section class=" card-compact w-80 mx-3 mt-2 shadow-xl text-darkBlue">
      <figure>
        <img
          src="https://api.lorem.space/image/shoes?w=400&h=225"
          alt="Shoes"
        />
      </figure>
      <div class="card-body">
        <h2 class="card-title">
          Shoes!
          <div class="badge badge-secondary">NEW</div>
        </h2>
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
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div class="card-actions justify-end">
          <div class="badge badge-outline">Fashion</div>
          <div class="badge badge-outline">Products</div>
        </div>
        <div className=" w-full">
          <h3 className="text-2xl  text-primary2">$233.45</h3>
          <h6 className="text-lg text-grey line-through">$300.77</h6>
        </div>
        <div class="card-actions justify-end my-2">
          <button class="btn bg-orange2 text-superwhite">Put to cart</button>
        </div>
      </div>
    </section>
  );
};

export default Card;
