import { File, Image, Paperclip } from "@phosphor-icons/react";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";

export default function Attachment() {
  const dispatch = useDispatch();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const trigger = useRef(null);
  const dropdown = useRef(null);

  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!dropdown.current) return;

      if (
        !dropdown ||
        dropdown.current.contains(target) ||
        trigger.current.contains(target)
      ) {
        return;
      }
      setDropdownOpen(false);
    };

    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!dropdownOpen || keyCode !== 27) return; // Every key has a defined keycode or value esc key code is 27

      setDropdownOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <div className="relative flex">
      <button
        className="text-[#98A6AD] hover:text-body"
        ref={trigger}
        onClick={(e) => {
          e.preventDefault();
          setDropdownOpen((prev) => !prev);
        }}
      >
        <Paperclip weight="bold" size={20} />
      </button>

      <div
        ref={dropdown}
        onFocus={() => setDropdownOpen(true)}
        onBlur={() => setDropdownOpen(false)}
        className={`absolute right-0 -top-24 z-40 w-54 space-y-1 rounded-sm border border-stroke bg-white p-1.5 shadow-default dark:border-strokedark dark:bg-boxdark ${
          dropdownOpen === true ? "block" : "hidden"
        }`}
      >
        <button
          onClick={() => {
            dispatch(toggleMediaModal(true));
          }}
          className="flex w-full items-center gap-2 rounded-sm px-4 py-1.5 text-left text-sm hover:bg-gray dark:hover:bg-meta-40"
        >
          <Image size={20} />
          Images & Videos
        </button>

        <button className="flex w-full items-center gap-2 rounded-sm px-4 py-1.5 text-left text-sm hover:bg-gray dark:hover:bg-meta-40">
          <File size={20} />
          Files & Docs
        </button>
      </div>
    </div>
  );
}
