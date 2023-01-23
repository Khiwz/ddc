import React, { Component, useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { listPartner, titlePartnerSection } from "../../constant/list-info";
import SectionHeader from "../model/section-header";
import { Container } from "@mui/material";

function Partner() {
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
      Number(isMobile) > 900
        ? 10
        : Number(isMobile) > 800
        ? 8
        : Number(isMobile) > 640
        ? 6
        : 3,
    slidesToScroll: 1,
    speed: 5000,
    //   autoplaySpeed: 500,
    autoplay: true,
    cssEase: "linear",
  };

  return (
    <div className="section-padding-model">
      <SectionHeader
        title={titlePartnerSection.title}
        description={titlePartnerSection.description}
      />

      <div className="mb-5" />

      <Container maxWidth={false}>
        <div className="px-2">
          <Slider {...settings}>
            {listPartner.map((item, index) => (
              <div key={index} className="h-16">
                <img
                  src={`/images/partner/${item.image}`}
                  alt={item.name}
                  className="object-contain h-full"
                />
              </div>
            ))}
          </Slider>
        </div>
      </Container>
    </div>
  );
}

export default Partner;
