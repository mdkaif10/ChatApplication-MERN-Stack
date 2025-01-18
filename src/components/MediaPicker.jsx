import { X } from "@phosphor-icons/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMediaModal } from "../redux/slices/app";

export default function MediaPicker() {
  const modalRef = React.useRef(null);
  const dispatch = useDispatch();

  const { media } = useSelector((state) => state.app.modals);

  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!media || keyCode !== 27) return;

      dispatch(toggleMediaModal(false));
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <div
      className={`fixed left-0 top-0 z-999999 flex min-h-screen w-full items-center justify-center bg-black/90 px-4 py-5 ${
        media ? "block" : "hidden"
      }`}
    >
      <div
        ref={modalRef}
        className="md:px-17.5 w-full max-w-142.5 rounded-lg bg-white dark:bg-boxdark md:py-8 px-8 py-12"
      >
        <div className="flex flex-row items-center justify-between mb-8 space-x-2">
          <div className="text-md font-medium text-black dark:text-white">
            Choose a media to send
          </div>

          <button
            onClick={() => {
              dispatch(toggleMediaModal(false));
            }}
          >
            <X size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}
