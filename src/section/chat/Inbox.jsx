import React from "react";

import user01 from "../../images/user/user-01.png";
import { DotsThree, PaperPlaneTilt } from "@phosphor-icons/react";

export default function Inbox() {
  return (
    <div className="flex h-full flex-col border-2 border-stroke dark:border-strokedark xl:w-3/4">
      {/* Chat Header */}
      <div className="sticky flex items-center flex-row justify-between border-b border-stroke dark:border-strokedark px-6 py-4.5">
        <div className="flex items-center">
          <div className="mr-4.5 h-13 w-full max-w-13 overflow-hidden rounded-full">
            <img
              src={user01}
              alt="avatar"
              className="h-full w-full object-cover object-center"
            />
          </div>

          <div>
            <h5 className="font-medium text-black dark:text-white">
              Ankit Bhomik
            </h5>
            <p className="text-sm">reply of Message</p>
          </div>
        </div>

        <div>
          <DotsThree weight="bold" size={24} />
        </div>
      </div>

      {/* List of Messages*/}

      <div className="max-h-full space-y-3.5 overflow-auto no-scrollbar px-6 py-7.5 grow">
        {" "}
      </div>

      {/* Chat Input */}
      <div className="sticky bottom-0 border-t border-stroke bg-white px-6 py-5 dark:border-strokedark dark:bg-boxdark">
        <form className="flex items-center justify-between space-x-4.5">
          <div className="relative w-full">
          <input
            type="text"
            placeholder="Type a message..."
            className="h-13 w-full rounded-md border border-stroke bg-gray pl-5 pr-19 text-black placeholder:body outline-none focus:border-primary dark:border-strokedark dark:bg-boxdark-2 dark:text-white"
          />

          
          </div>

            <button className=" flex items-center justify-center h-13 max-w-13 w-full rounded-md bg-primary text-white hover:bg-opacity-90"> 
                <PaperPlaneTilt size={24} weight="bold"/> 
            </button>

        </form>
      </div>
    </div>
  );
}
