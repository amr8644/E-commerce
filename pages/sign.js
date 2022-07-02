import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";

const Sign = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(null);

  const signInUser = async () => {
    const res = await fetch("/sign", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, email, password }),
    });
    let data = await res.json();

    if (data.message) {
      setMessage(data.message);
    }

    if (data.message === "Register successfully") {
      let options = { redirect: false, email, password };
      const res = signIn("credentials", options);
      setMessage(null);
      if (res?.error) {
        setMessage(res.error);
      }
      console.log(res);
      console.log(email, password);
    }
  };

  return (
    <section class=" bg-darkBlue sm:h-full md:h-screen text-superwhite font-PTSans">
      <div class="w-full lg:w-4/12 px-4 mx-auto h-full">
        <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
          <div class="rounded-t mb-0 px-6 py-6">
            <div class="text-center mb-3">
              <h6 class="text-blueGray-500 text-sm font-bold">Sign in with</h6>
            </div>
            <div class="btn-wrapper text-center">
              <button className="btn bg-facebook text-superwhite font-PTSans rounded-lg flex items-center justify-center">
                <FontAwesomeIcon icon={faFacebookF} className="mr-3 w-[16px]" />
                Facebook
              </button>
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
            </div>
          </div>
          <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
            <div class="text-blueGray-400 text-center mb-3 font-bold">
              <small>Or sign in with credentials</small>
            </div>
            <form method="post" action="/sign">
              <div class="relative w-full mb-3">
                <label
                  class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  for="grid-password"
                >
                  Username
                </label>
                <input
                  type="text"
                  class="border-0 px-3 py-3  text-blueGray-600  bg-otherBlue rounded text-sm shadow focus:outline-none focus:ring w-full focus:ring-orange2 ease-linear transition-all duration-150"
                  placeholder="Username"
                  name="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div class="relative w-full mb-3">
                <label
                  class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  for="grid-password"
                >
                  Email
                </label>
                <input
                  type="email"
                  class="border-0 px-3 py-3  text-blueGray-600  bg-otherBlue rounded text-sm shadow focus:outline-none focus:ring w-full focus:ring-orange2 ease-linear transition-all duration-150"
                  placeholder="Email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div class="relative w-full mb-3">
                <label
                  class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  for="grid-password"
                >
                  Password
                </label>
                <input
                  type="password"
                  class="border-0 px-3 py-3  text-blueGray-600  bg-otherBlue rounded text-sm shadow focus:outline-none focus:ring w-full focus:ring-orange2 ease-linear transition-all duration-150"
                  placeholder="Password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div>
                <label class="inline-flex items-center cursor-pointer">
                  <input
                    id="customCheckLogin"
                    type="checkbox"
                    class="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                  />
                  <span class="ml-2 text-sm font-semibold text-blueGray-600">
                    Remember me
                  </span>
                </label>
              </div>
              <div class="text-center mt-6">
                <button
                  class=" bg-orange2 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                  type="submit"
                  onClick={(e) => signInUser()}
                >
                  Sign In
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sign;
