import React from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";

const Avatar2 = () => {
  const { data: session } = useSession();
  return (
    <>
      <div className="flex w-full items-center justify-center flex-col ">
        <div className="avatar  w-full flex  items-center">
          <div className="w-12 h-12 rounded-full ring  ring-orange2 ring-offset-base-100  cursor-pointer mx-3">
            {session?.user?.image && (
              <Image
                className="h-10 w-10 rounded-full"
                src={`${
                  session.user.image ? session.user.image : "/Avatar.jpg"
                }`}
                alt="Avatar"
                width={100}
                height={100}
                layout="intrinsic"
              />
            )}
          </div>
          <div>
            {session?.user?.name && (
              <h2 className="text-white font-bold text-base mt-10">
                {session.user.name ? session.user.name : "User"}
              </h2>
            )}
            {session?.user?.email && (
              <h3 className="text-gray font-bold text-base">
                {session.user.email ? session.user.email : "User"}
              </h3>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Avatar2;
