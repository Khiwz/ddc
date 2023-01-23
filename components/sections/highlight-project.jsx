import React, { useEffect, useState } from "react";
import SectionHeader from "../model/section-header";
import {
  listFeaturedProjectCard,
  titleFeaturedProjectSection,
} from "../../constant/list-info";
import { Container } from "@mui/material";
import FeaturedProjectCard from "../model/featured-project-card";

// Import Swiper React function
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsSearch } from "react-icons/bs";
import Link from "next/link";

const pageInfo = {
  buttonAllProjects: {
    lao: "ໂຄງການ ທັງໝົດ",
    english: "All Projects",
    chiness: "所有項目",
  },
};

function HighlightProject() {
  const { languageStore } = useSelector((state) => state.language);
  const [isMobile, setIsMobile] = useState();

  useEffect(() => {
    // check screen width
    const onResize = () => {
      setIsMobile(window.innerWidth);
    };
    onResize();
    window.addEventListener("resize", onResize);
  }, [isMobile]);

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    //   centerPadding: "60px",
    slidesToShow:
      Number(isMobile) > 1180
        ? 5
        : Number(isMobile) > 900
        ? 4
        : Number(isMobile) > 700
        ? 3
        : Number(isMobile) > 640
        ? 2
        : 1,
    slidesToScroll: 1,
    speed: 10000,
    autoplaySpeed: 6000,
    autoplay: true,
    cssEase: "linear",
  };

  return (
    <div className="featured-background-image h-96 section-padding-model">
      <SectionHeader
        title={titleFeaturedProjectSection.title[languageStore]}
        description={titleFeaturedProjectSection.description[languageStore]}
        color="white"
      />

      <Container maxWidth={false}>
        <div className="px-2">
          <Slider {...settings}>
            {listFeaturedProjectCard.map((item, index) => (
              <div
                key={index}
                className="news-image-container group shadow-sm w-44 sm:w-48 md:w-56 lg:w-96 h-40"
              >
                <img
                  src={item.image}
                  alt=""
                  className="absolute w-full h-full object-cover z-0 rounded-sm"
                />
                <div className="image-overlay-hover-news z-10" />

                <div className="image-overlay-hover-news-text z-20 flex flex-col items-center justify-center">
                  <a
                    href={item.link}
                    className="px-3 py-2 w-fit rounded-sm capitalize cursor-pointer text-white border hover:bg-web-yellow hover:text-white hover:border-web-yellow mb-5 opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-y-2"
                  >
                    <BsSearch fontSize={18} />
                  </a>
                  <p className="text-xs uppercase text-white -translate-y-4 text-center px-3">
                    {item.title[languageStore]}
                  </p>
                  <div className="text-xs w-full flex text-web-yellow opacity-0 group-hover:opacity-100 -translate-y-6 group-hover:translate-y-0 transition-all duration-500">
                    <p className="flex-1 text-center px-3 border-r-2">
                      {item.business[languageStore]}
                    </p>
                    <p className="flex-1 text-center px-3">
                      {item.type[languageStore]}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </Container>

      {/* <Container
        maxWidth
        sx={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "40px",
        }}
      >
        <Swiper
          slidesPerView={4}
          spaceBetween={10}
          slidesPerGroup={1}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {listFeaturedProjectCard.map((item, index) => (
            <SwiperSlide key={index}>
              <FeaturedProjectCard
                image={item.image}
                title={item.title[languageStore]}
                business={item.business[languageStore]}
                type={item.type[languageStore]}
                link={item.link}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container> */}

      <div className="text-center mt-10">
        <Link href="/business">
          <a className="button-style-classic-small">
            {pageInfo.buttonAllProjects[languageStore]}
          </a>
        </Link>
      </div>
    </div>
  );
}

export default HighlightProject;
