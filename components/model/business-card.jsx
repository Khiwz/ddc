import React from "react";
import { BsSearch } from "react-icons/bs";
import { FiChevronRight } from "react-icons/fi";

function BusinessCard({ image, title, link }) {
  // console.log("first", route.pathname);
  return (
    <div className="service-image-container w-36 sm:w-48 md:w-56 lg:w-64 h-32 sm:h-40 md:h-44 group shadow-sm">
      <img
        src={`/images/services/${image}`}
        alt=""
        className="absolute inset-0 w-full h-full object-cover z-0 rounded-sm"
      />
      <div className="image-overlay-hover w-full h-0 z-10" />

      <div className="image-overlay-hover-text w-full h-0 z-20 flex justify-center items-center">
        <a
          href={link}
          className="px-5 py-2 w-fit rounded-sm cursor-pointer text-white border hover:bg-web-yellow hover:border-web-yellow flex items-center"
        >
          <BsSearch fontSize={18} />
          {/* <span className="ml-2 uppercase">detail</span> */}
        </a>
      </div>
      <div className="absolute z-20 h-8 sm:h-10 w-36 sm:w-full bg-gray-100 bottom-0">
        <div className="flex items-center h-full">
          <a
            href={link}
            className="flex-1 text-xs md:text-sm font-semibold sm:pl-5 capitalize text-gray-600"
          >
            {title}
          </a>
          <div className="w-10 sm:w-16 h-full bg-gray-300 flex justify-center items-center text-gray-600 group-hover:bg-yellow-400 group-hover:text-white transition-all duration-500">
            <FiChevronRight fontSize={22} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BusinessCard;
