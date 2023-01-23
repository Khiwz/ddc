import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

export default function EffectCoverflowComponent({
  images,
  setImageSelected,
  handleOpenModal,
}) {
  const fnImageSelectedHandler = (item) => {
    setImageSelected(item);
    handleOpenModal();
  };

  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        initialSlide={Math.floor(images?.length / 2)}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {images?.map((item, index) => (
          <SwiperSlide
            key={index}
            className="swiper-slice-replace cursor-pointer"
            onClick={() => fnImageSelectedHandler(item)}
          >
            <img src={`${item}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
