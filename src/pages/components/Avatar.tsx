import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { useSession } from "next-auth/react";

import Image from "next/image";
import Link from "next/link";

const Avatar = () => {
  const { data: session } = useSession();

  return (
    <div className="sm:hidden h-full lg:flex w-1/3  flex items-center justify-end ">
      <FontAwesomeIcon
        icon={faHeart}
        className="text-white py-[11px] px-3 w-[40px] rounded-lg border-none cursor-pointer hover:bg-orange2 hover:text-darkBlue duration-500 mx-3"
      />

      <div className="indicator  relative">
        <span className="indicator-item indicator-middle indicator-center badge badge-error absolute top-0 left-0 text-superwhite">
          8
        </span>
        <Link href={"/checkout"}>
          <FontAwesomeIcon
            icon={faShoppingCart}
            className="grid  place-items-center text-white py-[11px] w-[40px] rounded-lg border-none cursor-pointer hover:bg-orange2 hover:text-darkBlue duration-500 "
          />
        </Link>
      </div>
      <div className="avatar">
        <div className="w-10 h-10 rounded-full ring  ring-orange2 ring-offset-base-100  cursor-pointer mx-3">
          {session?.user?.image && (
            <Image
              className="h-10 w-10 rounded-full"
              src={`${session.user.image ? session.user.image : "/Avatar.jpg"}`}
              alt="Avatar"
              width={100}
              height={100}
              layout="intrinsic"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Avatar;
