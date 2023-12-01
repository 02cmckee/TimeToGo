import React from "react";
import { ExternalLinkIcon } from "@heroicons/react/outline";
import AnimateInView from "./AnimateInView";

function ProjectCard({
  backgroundColor,
  title,
  image,
  link,
  color,
  comingSoon,
  description,
}: {
  backgroundColor: string;
  title: string;
  image: any;
  link: string;
  color?: string;
  comingSoon?: boolean;
  description?: string;
}) {
  return (
    <a
      href={link}
      target="_blank"
      className="w-full transition duration-300 hover:-translate-y-2"
      rel="noreferrer"
    >
      <AnimateInView
        delay={0}
        duration={0.5}
        noShift
        className={`group relative h-96 w-full cursor-pointer overflow-hidden rounded-md`}
        style={{ backgroundColor }}
      >
        {comingSoon && (
          <div className="absolute inset-0 z-10 flex h-full w-full items-center justify-center bg-black/0 transition group-hover:bg-black/50">
            <p className="text-white opacity-0 transition group-hover:opacity-100">
              Coming Soon
            </p>
          </div>
        )}
        <div className="relative flex h-full w-1/2 items-end py-6 pl-6">
          <p
            className="w-full text-xl font-semibold text-white transition sm:group-hover:-translate-y-5"
            style={{ color }}
          >
            {title}
          </p>
          <p
            className="absolute left-6 bottom-3 w-full text-sm text-white opacity-0 transition sm:group-hover:-translate-y-3 sm:group-hover:opacity-100"
            style={{ color }}
          >
            {description}
          </p>
        </div>
        <div className="absolute top-5 right-5">
          <ExternalLinkIcon
            color={color}
            className={`h-5 w-5 ${
              !color && "text-white"
            } opacity-0 transition group-hover:translate-x-[3px] group-hover:-translate-y-[3px] group-hover:opacity-100`}
            strokeWidth={1.5}
          />
        </div>
        <div className="absolute top-5 -right-[2px] h-full w-[75%] sm:w-[60%] ">
          <img
            className="h-full w-full bg-no-repeat object-cover object-left"
            src={image.src}
            alt={title}
          />
        </div>
      </AnimateInView>
    </a>
  );
}

export default ProjectCard;
