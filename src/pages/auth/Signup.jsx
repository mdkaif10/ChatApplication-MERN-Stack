import React from "react";
import Logo from "../../components/Logo";
import { Link } from "react-router-dom";
import SignupIllusturation from "../../images/auth/chat-login.svg";
import iconMK from "../../images/auth/icon.png";
import { EnvelopeSimple, Keyhole, SignIn, User } from "@phosphor-icons/react";

export default function signup() {
  return (
    <div className="border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark h-screen">
      <div className=" flex flex-wrap items-center h-full">
        <div className="hidden w-full xl:block xl:w-1/2">
          <div className="py-17.5 px-26 text-center">
            <Link to="/" className="mb-5.5 inline-block">
              <img
                src={iconMK}
                alt="icon"
                className="h-25 w-auto object-center"
              />{" "}
              <Logo />
            </Link>

            <p className="2xl:px-20">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <span className="mt-15 inline-block">
              <img
                src={SignupIllusturation}
                alt="Signup"
                className="h-115 w-auto object-cover object-center"
              />
            </span>
          </div>
        </div>

        <div className="w-full border-stroke dark:border-strokedark xl:w-1/2 xl:border-1-2  xl:px-44">
          <div className="w-full p-4 sm:p-12.5 xl:p-17.5">
            <span className=" mb-1.5 block font-medium">Start your Chat </span>
            <h2 className="mb-9 text-2xl font-bold text-black dark:text-white sm:text-title-xl2">
              SignUp to TriConvo
            </h2>
            <form action="">
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block mb-2.5 font-medium text-black dark:text-white "
                >
                  Name
                </label>

                <div className="relative">
                  <input
                    type="text"
                    placeholder="Enter your Full Name"
                    className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary "
                  />
                  <span className="absolute right-4 top-4">
                    <User size={24} />
                  </span>
                </div>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block mb-2.5 font-medium text-black dark:text-white "
                >
                  Email
                </label>

                <div className="relative">
                  <input
                    type="email"
                    placeholder="Enter your Email"
                    className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary "
                  />
                  <span className="absolute right-4 top-4">
                    <EnvelopeSimple size={24} />
                  </span>
                </div>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block mb-2.5 font-medium text-black dark:text-white "
                >
                  Password
                </label>

                <div className="relative">
                  <input
                    type="password"
                    placeholder="Enter your Password"
                    className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary "
                  />
                  <span className="absolute right-4 top-4">
                    <Keyhole size={24} />
                  </span>
                </div>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block mb-2.5 font-medium text-black dark:text-white "
                >
                  Re-Type Password
                </label>

                <div className="relative">
                  <input
                    type="password"
                    placeholder="Re-Enter your Password"
                    className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary "
                  />
                  <span className="absolute right-4 top-4">
                    <Keyhole size={24} />
                  </span>
                </div>
              </div>

              <div className="mb-5">
                <input
                  type="Submit"
                  Value="Sign Up"
                  className="w-full cursor-pointer border border-primary bg-primary p-4 rounded-lg text-white transation hover:bg-opacity-90"
                />
              </div>

              <button className="flex w-full items-center justify-center gap-3.5 border border-stroke bg-gray p-4 rounded-lg hover:bg-opacity-50 dark:border-strokedark dark:bg-meta-4 dark-hover:bg-opacity-50">
                <span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_191_13499)">
                      <path
                        d="M19.999 10.2217C20.0111 9.53428 19.9387 8.84788 19.7834 8.17737H10.2031V11.8884H15.8266C15.7201 12.5391 15.4804 13.162 15.1219 13.7195C14.7634 14.2771 14.2935 14.7578 13.7405 15.1328L13.7209 15.2571L16.7502 17.5568L16.96 17.5774C18.8873 15.8329 19.9986 13.2661 19.9986 10.2217"
                        fill="#4285F4"
                      />
                      <path
                        d="M10.2055 19.9999C12.9605 19.9999 15.2734 19.111 16.9629 17.5777L13.7429 15.1331C12.8813 15.7221 11.7248 16.1333 10.2055 16.1333C8.91513 16.1259 7.65991 15.7205 6.61791 14.9745C5.57592 14.2286 4.80007 13.1801 4.40044 11.9777L4.28085 11.9877L1.13101 14.3765L1.08984 14.4887C1.93817 16.1456 3.24007 17.5386 4.84997 18.5118C6.45987 19.4851 8.31429 20.0004 10.2059 19.9999"
                        fill="#34A853"
                      />
                      <path
                        d="M4.39899 11.9777C4.1758 11.3411 4.06063 10.673 4.05807 9.99996C4.06218 9.32799 4.1731 8.66075 4.38684 8.02225L4.38115 7.88968L1.19269 5.4624L1.0884 5.51101C0.372763 6.90343 0 8.4408 0 9.99987C0 11.5589 0.372763 13.0963 1.0884 14.4887L4.39899 11.9777Z"
                        fill="#FBBC05"
                      />
                      <path
                        d="M10.2059 3.86663C11.668 3.84438 13.0822 4.37803 14.1515 5.35558L17.0313 2.59996C15.1843 0.901848 12.7383 -0.0298855 10.2059 -3.6784e-05C8.31431 -0.000477834 6.4599 0.514732 4.85001 1.48798C3.24011 2.46124 1.9382 3.85416 1.08984 5.51101L4.38946 8.02225C4.79303 6.82005 5.57145 5.77231 6.61498 5.02675C7.65851 4.28118 8.9145 3.87541 10.2059 3.86663Z"
                        fill="#EB4335"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_191_13499">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                Sign Up with Google
              </button>

              <div className="mt-6 text-center">
                <p>
                  You already have an account?{" "}
                  <Link to="/auth/login" className="text-primary">
                    Sign In
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
