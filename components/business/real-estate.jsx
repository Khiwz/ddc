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
import { useSelector } from "react-redux";
import BusinessProjectDetailRealEstate from "../model/business-project-detail-real-estate";
import BannerSubpage from "../sections/banner-subpage";

function RealEstateBusiness({ dataset, menus }) {
  const [expanded, setExpanded] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState("land-house-allotment");
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
          {/* big screen */}
          {/* <div className="hidden lg:flex space-x-3 h-80">
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

          {/* small screen */}
          <div className="section-padding-model">
            <Container maxWidth="lg">
              {/* <div className="flex space-x-5">
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
          </div> */}

              <div className="mb-10">
                <BusinessProjectDetailRealEstate
                  expanded={expanded}
                  data={dataset.find(
                    (item) =>
                      item.index.toLowerCase() === selectedIndex?.toLowerCase()
                  )}
                />
              </div>
            </Container>
          </div>
          {/* <div className="lg:hidden flex flex-col items-center space-y-3">
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

          <div className="my-10">
            <Container maxWidth="lg">
              <BusinessProjectDetailRealEstate
                expanded={expanded}
                data={dataset.find(
                  (item) =>
                    item.index.toLowerCase() === selectedIndex?.toLowerCase()
                )}
              />
            </Container>
          </div> */}
        </Container>
      </div>
    </div>
  );
}

export default RealEstateBusiness;
