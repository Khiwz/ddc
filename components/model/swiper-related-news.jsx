import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Pagination } from "swiper";
import { listNewsData } from "../../constant/language-news";
import { fnFirstImage } from "../../util/function";
import { useSelector } from "react-redux";
import { BsEyeFill } from "react-icons/bs";
import Link from "next/link";

export default function RelatedNewsCard() {
  const { languageStore } = useSelector((state) => state.language);

  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {listNewsData.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="h-72 border relative group">
              <div className="absolute bottom-0 left-0 z-20 bg-black w-full h-1/4 bg-opacity-60 text-white text-sm p-2 group-hover:h-full transition-all duration-200">
                <p>{item.title[languageStore]}</p>
              </div>
              <div className="absolute top-0 left-0 z-30 w-full h-full flex justify-center items-center text-white scale-0 group-hover:scale-100 transition-all duration-300">
                <Link href={`/news/${item.id}`}>
                  <BsEyeFill className="w-10 h-10 p-2 border rounded-md hover:bg-web-yellow hover:border-web-yellow cursor-pointer" />
                </Link>
              </div>
              <img
                src={fnFirstImage(item.imageId)}
                alt=""
                className="h-full object-cover z-10"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
