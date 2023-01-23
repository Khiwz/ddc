import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { EffectFade, Autoplay, Pagination, Navigation } from "swiper";
import { useSelector } from "react-redux";

export default function HighlightNewsSlide({ dataset }) {
  const [seconds, setSeconds] = useState(0);
  const { languageStore } = useSelector((state) => state.language);

  useEffect(() => {
    var interval = setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-full w-full">
      <Swiper
        spaceBetween={0}
        // centeredSlides={true}
        effect={"fade"}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        navigation={true}
        modules={[EffectFade, Autoplay, Pagination, Navigation]}
        className="mySwiper"
        onSlideChange={() => setSeconds(0)}
      >
        {dataset.map((item, index) => {
          if (index <= 4) {
            return (
              <SwiperSlide key={index}>
                <div className="h-full w-full relative">
                  <img
                    src={
                      item.imagesInfo.length > 0
                        ? item.imagesInfo[0].url
                        : "/images/logo/ddc-logo-small.png"
                    }
                    alt=""
                    className="object-cover"
                  />
                  <div className="absolute top-0 left-0 h-16 md:h-[100px] w-full z-10 bg-gradient-to-b from-black/60 to-transparent/5 bg-opacity-30"></div>
                  <div className="absolute bottom-0 left-0 h-16 w-full z-10 bg-gradient-to-t from-black to-transparent">
                    <div className="relative w-full h-16 overflow-hidden">
                      <a
                        href={`/news/${item.id}`}
                        className={`px-10 w-full text-xs sm:text-sm md:text-base absolute ${
                          seconds >= 2 && seconds <= 9
                            ? "left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"
                            : "left-1/2 -translate-x-1/2 top-full translate-y-1/2"
                        } transition-all duration-150 text-white font-bold uppercase hover:text-web-yellow`}
                      >
                        {item.data[languageStore].title}
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          }
        })}
      </Swiper>
    </div>
  );
}
