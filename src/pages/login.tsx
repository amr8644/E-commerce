import React, { useState } from "react";
import { getCsrfToken, getSession, useSession } from "next-auth/react";
import { signIn } from "next-auth/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";
import Loader from "./components/Loader";
import Router from "next/router";

const Login = ({ csrfToken }: any) => {
  const { status } = useSession();

  
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const handleChange = (e: any) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  if (status === "loading") {
    return <Loader />;
  }

  if (status === "authenticated") {
    Router.push("/");
  }

  return (
    <section className=" bg-darkBlue h-screen text-superwhite font-PTSans">
      <div className="w-full lg:w-4/12 px-4 mx-auto pt-6">
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
          <div className="rounded-t mb-0 px-6 py-6">
            <div className="text-center mb-3">
              <h6 className="text-blueGray-500 text-sm font-bold">
                Login in with
              </h6>
            </div>
            <div className="btn-wrapper text-center">
              <button className="btn bg-facebook text-superwhite font-PTSans rounded-lg flex items-center justify-center">
                <FontAwesomeIcon icon={faFacebookF} className="mr-3 w-[16px]" />
                Facebook
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  signIn("google");
                }}
                className="btn bg-google text-superwhite font-PTSans rounded-lg flex items-center justify-center"
              >
                <FontAwesomeIcon icon={faGoogle} className="mr-3 w-[16px]" />
                Google
              </button>
            </div>
          </div>
          <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
            <div className="text-blueGray-400 text-center mb-3 font-bold">
              <small>Or login with credentials</small>
            </div>
            <form method="post" action="/api/auth/callback/credentials">
              <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Email
                </label>
                <input
                  type="email"
                  className="border-0 px-3 py-3  text-blueGray-600  bg-otherBlue rounded text-sm shadow focus:outline-none focus:ring w-full focus:ring-orange2 ease-linear transition-all duration-150"
                  placeholder="Email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                />
              </div>
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Password
                </label>
                <input
                  type="password"
                  className="border-0 px-3 py-3  text-blueGray-600  bg-otherBlue rounded text-sm shadow focus:outline-none focus:ring w-full focus:ring-orange2 ease-linear transition-all duration-150"
                  placeholder="Password"
                  name="password"
                  value={password}
                  onChange={handleChange}
                />
              </div>

              <div className="text-center mt-6">
                <button
                  className=" bg-orange2 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                  type="submit"
                  onClick={(e) => {
                    e.preventDefault();
                    signIn("credentials", {
                      email,
                      password,
                    });
                  }}
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

Login.getInitialProps = async (context: any) => {
  const { req, res } = context;
  const session = await getSession({ req });

  if (session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    session,
    csrfToken: await getCsrfToken(context),
  };
};

export default Login;
