import React from "react";
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

const pageInfo = {
  buttonAllProjects: {
    lao: "ໂຄງການ ທັງໝົດ",
    english: "All Projects",
    chiness: "所有項目",
  },
};

function FeaturedProject() {
  const { languageStore } = useSelector((state) => state.language);
  return (
    <div className="featured-background-image h-600 section-padding-model">
      <SectionHeader
        title={titleFeaturedProjectSection.title[languageStore]}
        description={titleFeaturedProjectSection.description[languageStore]}
        color="white"
      />

      <Container
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
      </Container>

      <div className="text-center">
        <a className="button-style-classic">
          {pageInfo.buttonAllProjects[languageStore]}
        </a>
      </div>
    </div>
  );
}

export default FeaturedProject;
