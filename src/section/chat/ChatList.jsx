import React from "react";

export default function ChatList() {
  return (
    <div className="hidden h-full flex-col xl:flex w-1/4">
      <div className="sticky border-b border-stroke dark:border-strokedark px-6 py-7.5">
        <h3 className="text-lg font-medium text-black dark:text-white 2xl;text-xl">
          Active Conversations
        </h3>
        <span className="rounded-md border-[.5px] border-stroke dark:border-strokedark bg-gray px-2 py-0.5 text-base font-medium text-black dark:bg-boxdark-2 dark:text-white 2xl:ml-4"></span>
      </div>
    </div>
  );
}
