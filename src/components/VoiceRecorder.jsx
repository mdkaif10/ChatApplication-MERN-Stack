import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleAudioModal } from "../redux/slices/app";

export default function VoiceRecorder() {
  const modalRef = React.useRef(null);
  const dispatch = useDispatch();
  const { audio } = useSelector((state) => state.app.modals);

  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!audio || keyCode !== 27) return;

      dispatch(toggleAudioModal(false));
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <div
      className={`fixed left-0 top-0 z-999999 flex min-h-screen w-full items-center justify-center bg-black/90 px-4 py-5 ${
        audio ? "block" : "hidden"
      }`}
    >
      <div
        ref={modalRef}
        className="md:px-17.5 w-full max-w-142.5 rounded-lg bg-white dark:bg-boxdark md:py-8 px-8 py-12"
      >
        <div className="flex flex-row items-center space-x-2 justify-between mt-4">
          {/* Add your voice recorder UI here */}
        </div>
      </div>
    </div>
  );
}
