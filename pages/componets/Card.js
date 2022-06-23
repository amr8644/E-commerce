import React from "react";
// import Image from "next/image";

const Card = () => {
  return (
    <section class=" card-compact w-80 shadow-xl text-darkBlue">
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
        <div class="card-actions justify-end my-2">
          <button class="btn bg-orange2 text-superwhite">Put to cart</button>
        </div>
      </div>
    </section>
  );
};

export default Card;
