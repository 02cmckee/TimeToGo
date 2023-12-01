import React, { useState, useRef, useEffect } from "react";
import {
  ExclamationCircleIcon,
  DocumentTextIcon,
} from "@heroicons/react/solid";
import Transition from "./Transition";
import { closeOnClickOutside, closeOnEscape } from "./TransitionUtils";
import EmojiPicker from "../EmojiPicker";
import Twemoji from "../Twemoji";

const EmojiDropdown = ({
  activeEmoji,
  onEmojiSelect,
}: {
  activeEmoji: string;
  onEmojiSelect: any;
}) => {
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

  const trigger = useRef<HTMLButtonElement>(null);
  const dropdown = useRef<HTMLDivElement>(null);

  // close on click outside
  useEffect(() => {
    closeOnClickOutside({
      elementOpen: dropdownOpen,
      setElementOpen: setDropdownOpen,
      elementRef: dropdown,
      triggerRef: trigger,
    });
  });

  // close if the esc key is pressed
  useEffect(() => {
    closeOnEscape({
      elementOpen: dropdownOpen,
      setElementOpen: setDropdownOpen,
    });
  });

  return (
    <div className="relative ">
      <button
        type="button"
        ref={trigger}
        className={`flex aspect-square h-12 items-center justify-center rounded-l-md border border-l-0 bg-gray-50 transition-colors hover:bg-gray-100`}
        aria-haspopup="true"
        onClick={() => setDropdownOpen(!dropdownOpen)}
        aria-expanded={dropdownOpen}
      >
        <div className="h-7 w-7">
          <Twemoji emoji={activeEmoji} />
        </div>
      </button>

      <Transition
        addEndListener={(node: HTMLElement, done: () => void) => {
          node.addEventListener("transitionend", done, false);
        }}
        className="min-w-44 border-dk-gray-200 absolute bottom-full left-0 z-10 mt-1 origin-top-left overflow-hidden rounded-lg bg-white shadow-lg"
        show={dropdownOpen}
        enter="transition ease-out duration-200 transform"
        enterStart="opacity-0 -translate-y-2"
        enterEnd="opacity-100 translate-y-0"
        leave="transition ease-out duration-200"
        leaveStart="opacity-100"
        leaveEnd="opacity-0"
      >
        <div
          ref={dropdown}
          onFocus={() => setDropdownOpen(true)}
          onBlur={() => setDropdownOpen(false)}
        >
          <EmojiPicker
            set="twitter"
            showSkinTones={false}
            onEmojiSelect={(emoji) => {
              console.log(emoji);
              onEmojiSelect(emoji);
              setDropdownOpen(false);
            }}
            showPreview={false}
          />
        </div>
      </Transition>
    </div>
  );
};

export default EmojiDropdown;
