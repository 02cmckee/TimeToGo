// Twemoji.js
import React, { memo } from "react";

const isRequired = () => {
  throw new Error("You need to specify an emoji for the Twemoji component");
};

const Twemoji = ({ emoji = isRequired() }: any) => {
  const img = emoji.codePointAt(0).toString(16);

  return (
    <img
      src={`https://twemoji.maxcdn.com/v/latest/svg/${img}.svg`}
      height="72"
      width="72"
      alt={emoji}
    />
  );
};

export default memo(Twemoji);
