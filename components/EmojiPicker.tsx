import React, { useEffect, useRef, useState } from "react";
import { PickerProps } from "emoji-mart";
import data from "@emoji-mart/data/sets/14/twitter.json";

const EmojiPicker = (props: PickerProps) => {
  const [mounted, setMounted] = useState(false);
  const pickerRef = useRef<HTMLDivElement>(null);
  const executedRef = useRef(false);
  useEffect(() => {
    if (executedRef.current) return;
    import("emoji-mart").then(
      ({ Picker }) => new Picker({ ...props, data, ref: pickerRef })
    );
    executedRef.current = true;
  }, []);

  return <div ref={pickerRef} />;
};

export default EmojiPicker;
