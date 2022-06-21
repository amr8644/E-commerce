import React from "react";
import Image from "next/image";

const Card = () => {
  return (
    <section className="mt-5">
      <article>
        <Image src="/Iphone.jpg" alt="Iphone" height={100} width={100} />
      </article>
      <article>
        <div>
          <h2>Iphone 12</h2>
          <p>Apple</p>
        </div>
      </article>
    </section>
  );
};

export default Card;
