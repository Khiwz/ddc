import React from "react";
import { BsSearch } from "react-icons/bs";

function SubsidiaryCard({ image, title, subtitle, link }) {
  return (
    <div className="subsi-image-container group shadow-lg rounded-sm overflow-hidden bg-white">
      <img
        src={image}
        alt=""
        className="absolute inset-0 w-full h-full object-cover z-0 rounded-sm transition-all duration-1000"
      />
      <div className="image-overlay-hover-subsi z-10" />

      <div className="image-overlay-hover-subsi-text z-20 flex flex-col justify-center items-center">
        <a
          href={link}
          className="px-3 py-2 w-fit rounded-sm capitalize cursor-pointer text-white border hover:bg-web-yellow hover:text-white hover:border-web-yellow mb-5"
        >
          <BsSearch fontSize={18} />
        </a>
        <p className="text-sm font-bold uppercase text-white text-center">
          {title}
        </p>
        <div className="flex items-center justify-center space-x-3 text-web-yellow font-semibold">
          <p>{subtitle}</p>
        </div>
      </div>
    </div>
  );
}

export default SubsidiaryCard;
