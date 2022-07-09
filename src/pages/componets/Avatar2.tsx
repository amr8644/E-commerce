import React from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";

const Avatar2 = () => {
  const { data: session} = useSession();
  return (
    <>
    <div className="py-5 flex w-full items-center justify-center flex-col">
      <div className="avatar h-1/2 w-full flex justify-start">
        <div className="w-12 h-12 rounded-full ring  ring-orange2 ring-offset-base-100  cursor-pointer mx-3">
         {session?.user?.image &&(  <Image
            className="h-10 w-10 rounded-full"
            src={`${session.user.image ? session.user.image :"/Avatar.jpg" }`}
            alt="Avatar"
            width={100}
            height={100}
            layout="intrinsic"
          />)}
         
        </div>
        {session?.user?.name &&(<h2 className="text-white font-bold text-base mt-3">
          {session.user.name ? session.user.name : "User"}
        </h2>)}
      
      </div>
    </div>
    </>
  );
};

export default Avatar2;
