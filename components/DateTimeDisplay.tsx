import React, { useEffect, useState } from "react";

const DateTimeDisplay = ({ value, type, isDanger }: any) => {
  const [showVal, setShowVal] = useState(0);

  useEffect(() => {
    setShowVal(value);
  }, [value]);

  return (
    <div id="countdown" className={isDanger ? "countdown danger" : "countdown"}>
      <p id="countdownValue">{showVal}</p>
      <span id="countdownLabel">{type}</span>
    </div>
  );
};

export default DateTimeDisplay;
