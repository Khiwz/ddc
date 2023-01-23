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
import { listBannerSlide } from "../../constant/list-info";
import { Container } from "@mui/material";
import { useSelector } from "react-redux";

export default function BannerSlide({ bannerData }) {
  const [seconds, setSeconds] = useState(0);
  const { languageStore } = useSelector((state) => state.language);
  const [isMobileHorizontal, setIsMobileHorizontal] = useState();

  // console.log("bannerData", bannerData);

  useEffect(() => {
    var interval = setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // check screen width

    const onResize = () => {
      setIsMobileHorizontal(window.innerHeight);
    };

    onResize();

    window.addEventListener("resize", onResize);
  }, [isMobileHorizontal]);

  // console.log("hight", isMobileHorizontal);

  return (
    <div className={`${isMobileHorizontal > 400 ? "h-450" : "h-80"}`}>
      <Swiper
        spaceBetween={0}
        // centeredSlides={true}
        effect={"fade"}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[EffectFade, Autoplay, Pagination, Navigation]}
        className="mySwiper"
        onSlideChange={() => setSeconds(0)}
      >
        {bannerData.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="h-full w-full relative">
              <img
                src={`/images/banner/${item.image}`}
                alt=""
                className="object-cover"
              />
              <div className="absolute top-0 left-0 h-full w-full z-10 bg-black bg-opacity-40" />
            </div>

            <div className="absolute bottom-0 left-0 h-full w-full z-20 flex flex-col justify-end pb-8">
              <Container maxWidth="lg">
                <div className={`relative w-full h-10 lg:h-14 overflow-hidden`}>
                  <p
                    className={`absolute ${
                      (index + 1) % 3 === 1
                        ? "left-1/2 -translate-x-1/2"
                        : (index + 1) % 3 === 2
                        ? "left-0"
                        : "right-0"
                    } ${
                      seconds >= 2 && seconds <= 8 ? "top-0" : "top-full"
                    } transition-all duration-300 text-sm md:text-lg lg:text-xl xl:text-2xl text-white font-bold uppercase`}
                  >
                    {item.desc1[languageStore]}
                  </p>
                </div>
              </Container>
              <Container maxWidth="lg">
                <div className="relative w-full h-10 lg:h-14 overflow-hidden">
                  <p
                    className={`absolute ${
                      (index + 1) % 3 === 1
                        ? "left-1/2 -translate-x-1/2 w-full"
                        : (index + 1) % 3 === 2
                        ? "left-0"
                        : "right-0"
                    } ${
                      seconds >= 2 && seconds <= 8 ? "top-0" : "top-full"
                    } transition-all duration-500 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white font-extrabold uppercase`}
                  >
                    {item.desc2[languageStore]}
                  </p>
                </div>
              </Container>
              <Container maxWidth="lg">
                <div className="relative w-full h-14 overflow-hidden">
                  <p
                    className={`absolute ${
                      (index + 1) % 3 === 1
                        ? "left-1/2 -translate-x-1/2 w-full"
                        : (index + 1) % 3 === 2
                        ? "left-0"
                        : "right-0"
                    } ${
                      seconds >= 2 && seconds <= 8 ? "top-0" : "top-full"
                    } transition-all duration-500 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white font-extrabold uppercase`}
                  >
                    {item.desc3[languageStore]}
                  </p>
                </div>
              </Container>
              {/* <br /> */}
              <Container maxWidth="lg">
                <div className="relative w-full h-10 overflow-hidden">
                  <div
                    className={`absolute ${
                      (index + 1) % 3 === 1
                        ? "left-1/2 -translate-x-1/2"
                        : (index + 1) % 3 === 2
                        ? "left-0"
                        : "right-0"
                    } ${
                      seconds >= 2 && seconds <= 8 ? "top-0" : "top-full"
                    } transition-all duration-500 text-white font-extrabold uppercase py-1`}
                  >
                    <a href={item.link} className="button-style-classic-small">
                      {item.text[languageStore]}
                    </a>
                  </div>
                </div>
              </Container>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
