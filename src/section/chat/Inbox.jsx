import React from "react";

import user01 from "../../images/user/user-01.png";
import {
  DotsThree,
  LinkSimple,
  PaperPlaneTilt,
  Smiley,
} from "@phosphor-icons/react";

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
        <div className="max-w-125">
          <p className="mb-2.5 text-sm font-medium">Andri thomas</p>
          <div className="mb-2.5 rounded-2xl rounded-tl-none bg-gray px-5 py-3 dark:bg-boxdark-2">
            <p>i am a student of assam down town university</p>
          </div>
          <p className="text-xs">6:20pm</p>
        </div>

        <div className="max-w-125 ml-auto">
          <div className="mb-2.5 rounded-2xl rounded-br-none bg-primary px-5 py-3 ">
            <p className="text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              saepe deserunt nisi at unde ab est reprehenderit repellendus
              cumque. Eaque.
            </p>
          </div>
          <p className="text-xs">7:00pm</p>
        </div>

        <div className="max-w-125">
          <p className="mb-2.5 text-sm font-medium">Andri thomas</p>
          <div className="mb-2.5 rounded-2xl rounded-tl-none bg-gray px-5 py-3 dark:bg-boxdark-2">
            <p>i am a student of assam down town university</p>
          </div>
          <p className="text-xs">6:20pm</p>
        </div>

        <div className="max-w-125 ml-auto">
          <div className="mb-2.5 rounded-2xl rounded-br-none bg-primary px-5 py-3 ">
            <p className="text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              saepe deserunt nisi at unde ab est reprehenderit repellendus
              cumque. Eaque.
            </p>
          </div>
          <p className="text-xs">7:00pm</p>
        </div>
        <div className="max-w-125">
          <p className="mb-2.5 text-sm font-medium">Andri thomas</p>
          <div className="mb-2.5 rounded-2xl rounded-tl-none bg-gray px-5 py-3 dark:bg-boxdark-2">
            <p>i am a student of assam down town university</p>
          </div>
          <p className="text-xs">6:20pm</p>
        </div>

        <div className="max-w-125 ml-auto">
          <div className="mb-2.5 rounded-2xl rounded-br-none bg-primary px-5 py-3 ">
            <p className="text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              saepe deserunt nisi at unde ab est reprehenderit repellendus
              cumque. Eaque.
            </p>
          </div>
          <p className="text-xs">7:00pm</p>
        </div>
        <div className="max-w-125">
          <p className="mb-2.5 text-sm font-medium">Andri thomas</p>
          <div className="mb-2.5 rounded-2xl rounded-tl-none bg-gray px-5 py-3 dark:bg-boxdark-2">
            <p>i am a student of assam down town university</p>
          </div>
          <p className="text-xs">6:20pm</p>
        </div>

        <div className="max-w-125 ml-auto">
          <div className="mb-2.5 rounded-2xl rounded-br-none bg-primary px-5 py-3 ">
            <p className="text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              saepe deserunt nisi at unde ab est reprehenderit repellendus
              cumque. Eaque.
            </p>
          </div>
          <p className="text-xs">7:00pm</p>
        </div>
        <div className="max-w-125">
          <p className="mb-2.5 text-sm font-medium">Andri thomas</p>
          <div className="mb-2.5 rounded-2xl rounded-tl-none bg-gray px-5 py-3 dark:bg-boxdark-2">
            <p>i am a student of assam down town university</p>
          </div>
          <p className="text-xs">6:20pm</p>
        </div>

        <div className="max-w-125 ml-auto">
          <div className="mb-2.5 rounded-2xl rounded-br-none bg-primary px-5 py-3 ">
            <p className="text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              saepe deserunt nisi at unde ab est reprehenderit repellendus
              cumque. Eaque.
            </p>
          </div>
          <p className="text-xs">7:00pm</p>
        </div>
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

            <div className="absolute right-5 top-1/2 -translate-y-1/2 items-center justify-end space-x-4">
              <button className="hover:text-primary">
                <LinkSimple size={20} />
              </button>
              <button className="hover:text-primary">
                <Smiley size={20} />
              </button>
            </div>
          </div>

          <button className=" flex items-center justify-center h-13 max-w-13 w-full rounded-md bg-primary text-white hover:bg-opacity-90">
            <PaperPlaneTilt size={24} weight="bold" />
          </button>
        </form>
      </div>
    </div>
  );
}
