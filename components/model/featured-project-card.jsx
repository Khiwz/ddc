import React from "react";
import { BsSearch } from "react-icons/bs";

function FeaturedProjectCard({ image, title, business, type, link }) {
  return (
    <div className="featured-project-image-container group shadow-sm">
      <img
        src={image}
        alt=""
        className="absolute inset-0 w-full h-full object-cover z-0 rounded-sm"
      />
      <div className="image-overlay-hover-featured-project z-10" />

      <div className="image-overlay-hover-featured-project-text z-20 flex flex-col justify-center items-center">
        <a
          href={link}
          className="px-3 py-2 w-fit rounded-sm capitalize text-white border hover:bg-web-yellow hover:text-white hover:border-web-yellow mb-5"
        >
          <BsSearch fontSize={18} />
        </a>
        <p className="text-lg font-semibold uppercase text-white mb-5">
          {title}
        </p>
        <div className="flex items-start justify-center text-web-yellow font-semibold w-full">
          <p className="flex-1 text-center px-5">{business}</p>
          <p className="flex-1 text-center px-5 border-l-2">{type}</p>
        </div>
      </div>
    </div>
  );
}

export default FeaturedProjectCard;
