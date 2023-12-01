import { TrashIcon } from "@heroicons/react/outline";
import { TextField } from "@mui/material";
import { TimePicker } from "@mui/x-date-pickers";
import moment from "moment";
import React, { useState } from "react";
import EmojiDropdown from "./Transition/EmojiDropdown";

function EventInput({
  emoji,
  setEmoji,
  title,
  setTitle,
  time,
  setTime,
  endTime,
  index,
  deleteEvent,
}: any) {
  return (
    <div className="group flex h-12 w-full cursor-pointer flex-row items-center justify-start space-x-3 rounded-md">
      <div className="relative flex h-12 flex-row items-center rounded-md border">
        <EmojiDropdown
          activeEmoji={emoji}
          onEmojiSelect={(emoji: any) => setEmoji(emoji.native, index)}
        />
        <input
          id="Event Title"
          className="h-full w-full border-r px-4 focus:border-gray-300 focus:outline-0"
          type="text"
          placeholder="Event Title"
          value={title}
          onChange={(e) => setTitle(e.target.value, index)}
        />
        <div className="w-full">
          <TimePicker
            minTime={moment()}
            maxTime={endTime}
            value={time}
            onChange={(newTime) => {
              setTime(newTime, index);
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                color="secondary"
                sx={{
                  height: 48,
                }}
              />
            )}
          />
        </div>
        <div
          onClick={() => deleteEvent(index)}
          className="flex h-full !w-36 items-center justify-center border-l bg-gray-50"
        >
          <TrashIcon className="2-5 h-5 text-red-400" />
        </div>
      </div>
    </div>
  );
}

export default EventInput;
