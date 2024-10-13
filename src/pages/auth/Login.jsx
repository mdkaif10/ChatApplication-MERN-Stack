import React from "react";
import Logo from "../../components/Logo";
import { Link } from "react-router-dom";
import LoginIllusturation from "../../images/auth/chat-login.svg";
import iconMK from "../../images/auth/icon.png";
import { EnvelopeSimple, Keyhole } from "@phosphor-icons/react";

export default function Login() {
  return (
    <div className="border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark h-screen">
      <div className=" flex flex-wrap items-center h-full">
        <div className="hidden w-full xl:block xl:w-1/2">
          <div className="py-17.5 px-26 text-center">
            <Link className="mb-5.5 inline-block">
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
                src={LoginIllusturation}
                alt="Login"
                className="h-115 w-auto object-cover object-center"
              />
            </span>
          </div>
        </div>

        <div className="w-full border-stroke dark:border-strokedark xl:w-1/2 xl:border-1-2  xl:px-44">
          <div className="w-full p-4 sm:p-12.5 xl:p-17.5">
            <span className=" mb-1.5 block font-medium">Start your Chat </span>
            <h2 className="mb-9 text-2xl font-bold text-black dark:text-white sm:text-title-xl2">
              Welcome to TriConvo
            </h2>
            <form action="">
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
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
