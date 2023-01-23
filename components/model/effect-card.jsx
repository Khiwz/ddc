import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import "../../styles/EffectCard.module.css";

// import required modules
import { EffectCards } from "swiper";

export default function EffectCard({ images }) {
  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        {images.map((item, index) => (
          <SwiperSlide key={index}>
            <img
              src={`/images/operation-award/${item}`}
              alt=""
              className="w-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
