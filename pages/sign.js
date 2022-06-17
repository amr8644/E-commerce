import React from "react";
import { signIn, signOut } from "next-auth/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import Link from "next/link";

const Sign = () => {
  return (
    <div class=" w-full h-screen  bg-darkBlue p-10 font-PTSans">
      <div className="relative flex items-center justify-center">
        <Image
          src="/amazon-svgrepo-com (1).svg"
          alt="Logo"
          width={50}
          height={50}
          layout="intrinsic"
        />
      </div>
      <section class="absolute top-1/2 left-1/2 mx-auto max-w-sm -translate-x-1/2 -translate-y-1/2 transform space-y-4 text-center">
        <div x-show="isLoginPage" class="space-y-4">
          <header class="mb-3 text-2xl font-bold text-superwhite">
            Create your profile
          </header>

          <div class="w-full rounded-2xl px-4 ring-2  text-white  ring-orange2">
            <input
              type="text"
              placeholder="Name"
              class="my-3 w-full border-none bg-darkBlue outline-none focus:outline-none"
            />
          </div>

          <div class="w-full rounded-2xl px-4 ring-2  text-white  ring-orange2">
            <input
              type="email"
              placeholder="Email"
              class="my-3 w-full border-none bg-darkBlue outline-none focus:outline-none"
            />
          </div>

          <div class="w-full rounded-2xl px-4 ring-2  text-white  ring-orange2">
            <input
              type="password"
              placeholder="Password"
              class="my-3 w-full border-none bg-darkBlue outline-none focus:outline-none"
            />
          </div>
          <button class="w-full rounded-2xl border-b-4 border-b-blue-600  bg-orange2 py-3 font-bold text-white hover:bg-blue-400 active:translate-y-[0.125rem] active:border-b-blue-400">
            CREATE ACCOUNT
          </button>
        </div>

        <div class="flex items-center space-x-4">
          <hr class="w-full border border-white" />
          <div class="font-semibold text-white">OR</div>
          <hr class="w-full border border-white" />
        </div>

        <footer>
          <div class="grid grid-cols-2 gap-4">
            <button className="btn bg-facebook text-superwhite font-PTSans rounded-lg flex items-center justify-center">
              <FontAwesomeIcon icon={faFacebookF} className="mr-3 w-[16px]" />
              Facebook
            </button>
            <Link href="/api/auth/signin">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  signIn();
                }}
                className="btn bg-google text-superwhite font-PTSans rounded-lg flex items-center justify-center"
              >
                <FontAwesomeIcon icon={faGoogle} className="mr-3 w-[16px]" />
                Google
              </button>
            </Link>
          </div>

          <div class="mt-8 text-sm text-white">
            By signing in to ********, you agree to our
            <a href="#" class="font-medium text-white">
              Terms
            </a>
            and
            <a href="#" class="font-medium text-white">
              Privacy Policy
            </a>
            .
          </div>
        </footer>
      </section>
    </div>
  );
};

export default Sign;
