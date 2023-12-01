import React from "react";
import resumeDoodle from "../assets/resume.png";

function PostItNote() {
  return (
    <div className="postit">
      <a
        href={require("../assets/DustinKarpResume2022.pdf")}
        target="_blank"
        download="Dustin Karp Resume"
        rel="noreferrer"
      >
        <div className="-mt-6 flex h-full w-full flex-col items-center justify-center">
          <p className="mb-4">Check out my resume!</p>

          <div className="hidden sm:flex">
            <img
              className="cursor-pointer"
              src={resumeDoodle.src}
              alt="resume doodle"
              height={85}
              width={85}
            />
          </div>
        </div>
      </a>
    </div>
  );
}

export default PostItNote;
