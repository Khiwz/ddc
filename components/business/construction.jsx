import { Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import BusinessExpansion from "../model/business-expansion";
import BusinessSubCard from "../model/business-sub-card";
import NavbarSubmenuBusiness from "../model/navbar-submenu-business";
import BannerSubpage from "../sections/banner-subpage";

// Import Swiper React function
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation } from "swiper";
import SectionHeader from "../model/section-header";
import BusinessProjectDetailConstruction from "../model/business-project-detail-construction";
import { useSelector } from "react-redux";

function ConstructionBusiness({ dataset, menus }) {
  const [expanded, setExpanded] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState();
  const [data, setData] = useState();
  const [selectedItem, setSelectedItem] = useState("");
  const { languageStore } = useSelector((state) => state.language);

  // useEffect(() => {
  //   setData(
  //     dataset?.find(
  //       (item) => item.index.toLowerCase() === selectedIndex?.toLowerCase()
  //     )
  //   );
  // }, [selectedIndex, languageStore]);

  // console.log("data:", dataset);

  return (
    <div>
      {/* <div className="about-ddc-background-image h-500" /> */}
      <BannerSubpage />
      <NavbarSubmenuBusiness menuData={menus?.menu[2]} />

      {/* main content */}
      <div className="section-padding-model">
        <Container maxWidth="lg">
          {/* big screen */}
          {/* <div className="hidden lg:flex space-x-3 h-80">
            <Swiper
              slidesPerView={4}
              spaceBetween={5}
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
              {dataset?.map((item, index) => (
                <SwiperSlide key={index}>
                  <BusinessSubCard
                    item={item}
                    expanded={expanded}
                    setExpanded={setExpanded}
                    setSelectedIndex={setSelectedIndex}
                    setSelectedItem={setSelectedItem}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div> */}

          {/* small screen */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 mb-5">
            {dataset?.map((item, index) => (
              <BusinessSubCard
                key={index}
                item={item}
                expanded={expanded}
                setExpanded={setExpanded}
                setSelectedIndex={setSelectedIndex}
                setSelectedItem={setSelectedItem}
              />
            ))}
          </div>

          <div className="mb-10">
            <BusinessProjectDetailConstruction
              expanded={expanded}
              data={dataset.find(
                (item) =>
                  item.index.toLowerCase() === selectedIndex?.toLowerCase()
              )}
            />
          </div>
        </Container>
      </div>
    </div>
  );
}

export default ConstructionBusiness;
