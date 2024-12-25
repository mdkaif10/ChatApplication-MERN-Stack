import { Chat, Clock, DotsThreeVertical, VideoCamera, X } from "@phosphor-icons/react";
import React from "react";

export default function UserInfo(handleToggleUserInfo) {
  return (
    <div className="border-1 flex flex-col h-full border-stroke dark:border-strokedark">
      <div className="sticky border-b border-stroke dark:border-strokedark flex flex-row items-center justify-between w-full px-6 py-7.5">
        <div className="text-black dark:text-white font-semibold text-lg">
          Profile
        </div>

        <button onClick={handleToggleUserInfo}>
          <X size={24} />
        </button>
      </div>

      <div className="mx-auto my-8">
        <img
          src="https://media.istockphoto.com/id/1451587807/vector/user-profile-icon-vector-avatar-or-person-icon-profile-picture-portrait-symbol-vector.jpg?s=612x612&w=0&k=20&c=yDJ4ITX1cHMh25Lt1vI1zBn2cAKKAlByHBvPJ8gEiIg="
          className="w-44 h-44 rounded-lg object-cover object-center"
        />
      </div>

      <div className="px-6 space-y-1">
        <div className="text-black dark:text-white text-xl font-medium">
          this is my profile
        </div>
        <span className="text-body text-md"> Software developer</span>
      </div>

      <div className="px-6 my-6">
        <div className="flex flex-row items-center space-x-2">
          <Clock size={20} />
          <div> 10:20 AM local Time</div>
        </div>
      </div>

      <div className="px-6 flex flex-row space-x-2">
        <button className="w-full border border-stroke dark:border-strokedark flex flex-row items-center justify-center">
          <Chat size={20} className="mr-3" />
          Message
        </button>
        <button className="w-full border border-stroke dark:border-strokedark flex flex-row items-center justify-center">
          <VideoCamera size={20} className="mr-3" />
          Video
        </button>
        <button className=" border border-stroke dark:border-strokedark flex flex-row items-center justify-center">
          <DotsThreeVertical size={20} />
        </button>
      </div>
    </div>
  );
}
