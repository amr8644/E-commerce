import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
// import { faHeart, faBell } from "@fortawesome/free-regular-svg-icons";
import Image from "next/image";
import { useSession } from "next-auth/react";

const Avatar2 = () => {
  const { data: session, loading } = useSession();
  return (
    <div className="py-5 flex w-full items-center justify-center flex-col ">
      <div class="avatar h-1/2 w-full flex justify-start">
        <div class="w-12 h-12 rounded-full ring  ring-orange2 ring-offset-base-100  cursor-pointer mx-3">
          <Image
            className=" h-14 w-14 rounded-full"
            src={!session.user.image && "/public/Avatar.jpg"}
            alt="Avatar"
            width={100}
            height={100}
            layout="intrinsic"
          />
        </div>
        <h2 className="text-white font-bold text-base mt-3">
          {!session.user.name && "Name"}
        </h2>
      </div>

      {/* <div className="flex w-full items-start  justify-start">
        <FontAwesomeIcon
          icon={faHeart}
          className="text-white py-[11px] px-3 w-[40px] rounded-lg border-none cursor-pointer hover:bg-orange2 hover:text-darkBlue duration-500 mx-3"
        />
        <FontAwesomeIcon
          icon={faShoppingCart}
          className="text-white py-[11px] px-3 w-[40px] rounded-lg border-none cursor-pointer hover:bg-orange2 hover:text-darkBlue duration-500 mx-3"
        />
        <FontAwesomeIcon
          icon={faBell}
          className="text-white py-[11px] px-3 w-[40px] rounded-lg border-none cursor-pointer hover:bg-orange2 hover:text-darkBlue duration-500 mx-3"
        />
      </div> */}
    </div>
  );
};

export default Avatar2;
