import React from "react";
import Logo from "../../components/Logo";
import { Link } from "react-router-dom";
import LoginIllusturation from "../../images/auth/chat-login.svg";
import iconMK from "../../images/auth/icon.png";

export default function Login() {
  return (
    <div className="border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark h-screen">
    <div className=" flex flex-wrap items-center h-full">
        <div className="hidden w-full xl:block xl:w-1/2">
         <div className="py-17.5 px-26 text-center"> 
            <Link className="mb-5.5 inline-block">
            <img src= {iconMK} alt="icon" className="h-25 w-auto object-center" />   <Logo /> 
            </Link>

            <p className="2xl:px-20">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <span className="mt-0 inline-block"> 
            <img src= {LoginIllusturation} alt="Login" className="h-115 w-auto object-center" />
            
          </span></div>
        </div>
      </div>
    </div>
  );
}
