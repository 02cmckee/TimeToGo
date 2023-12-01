import React from "react";
import workingSignature from "../assets/workingSignature.gif";

function NameTag() {
  return (
    <div className="static mb-10 flex h-auto w-[21em] -rotate-3 flex-col rounded-lg bg-white shadow-lg transition duration-200 hover:-rotate-1 sm:w-[23em]">
      <div className="flex w-full flex-col rounded-t-lg bg-gradient-to-tl from-red-500 to-red-600 py-2 pb-2 text-center text-white">
        <h1 className="text-4xl font-bold sm:text-5xl">HELLO</h1>
        <h2 className="text-md">my name is</h2>
      </div>
      <div className="flex w-full select-none flex-col bg-white px-4 text-center sm:py-1">
        <img src={workingSignature.src} />
      </div>
      <div className="flex w-full flex-col rounded-b-lg bg-gradient-to-tl from-red-500 to-red-600 py-2 text-center text-white sm:py-3" />
    </div>
  );
}

export default NameTag;
