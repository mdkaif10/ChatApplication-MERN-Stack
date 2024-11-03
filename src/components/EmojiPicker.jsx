import { Smiley } from "@phosphor-icons/react";
import React, { useState} from "react";

import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";

export default function EmojiPicker() {
  const [pickerOpen, setPickerOpen ] = useState(false);

  const handleTrigger = (e) => {
    e.preventDefault();

    setPickerOpen((prev) => !prev);
  };

  return (
    <div className="relative flex">
      <button
        className="text-[#98A6AD] hover:text-body"
        onClick={handleTrigger}
      >
        <Smiley />
      </button>
    
      {pickerOpen && (
        <div className="absolute z-40 -top-115 right-0">
          <Picker data={data} onEmojiSelect={console.log} />
        </div>
      )}
    
    </div>
  );
}
