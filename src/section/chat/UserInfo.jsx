import { X } from "@phosphor-icons/react";
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
    </div>
  );
}
