import { Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import BusinessExpansion from "../model/business-expansion";
import BusinessSubCard from "../model/business-sub-card";
import NavbarSubmenuBusiness from "../model/navbar-submenu-business";

// Import Swiper React function
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation } from "swiper";
import BusinessProjectDetailSmartCity from "../model/business-project-detail-smart-city";
import { useSelector } from "react-redux";
import BannerSubpage from "../sections/banner-subpage";

function SmartCityBusiness({ dataset, menus }) {
  const [expanded, setExpanded] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState("nongphean-smart-city");
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

  // console.log("data:", data);

  return (
    <div>
      {/* <div className="about-ddc-background-image h-500" /> */}
      <BannerSubpage />
      <NavbarSubmenuBusiness menuData={menus?.menu[2]} />

      {/* main content */}
      <div className="section-padding-model">
        <Container maxWidth="lg">
          {/* <div className="flex space-x-3 h-80">
            <Swiper
              slidesPerView={3}
              spaceBetween={10}
              slidesPerGroup={1}
              loop={false}
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

          <div className="mb-10">
            <BusinessProjectDetailSmartCity
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

export default SmartCityBusiness;
