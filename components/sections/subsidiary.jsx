import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { listSubsidiaryCard } from "../../constant/list-info";
import SectionHeader from "../model/section-header";
import SubsidiaryCard from "../model/subsidiary-card";
import { Container } from "@mui/material";
import { useSelector } from "react-redux";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsSearch } from "react-icons/bs";

const pageInfo = {
  sectionTitle: {
    lao: "ບໍລິສັດໃນເຄືອ",
    english: "SUBSIDIARIES",
    chiness: "子公司",
  },
  sectionDescription: {
    lao: "",
    english: "",
    chiness: "",
  },
  buttonAllSubsi: {
    lao: "ບໍລິສັດໃນເຄືອທັງໝົດ",
    english: "All Subsidiaries",
    chiness: "所有子公司",
  },
};

function Subsidiary() {
  const route = useRouter();
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
        ? 7
        : Number(isMobile) > 900
        ? 6
        : Number(isMobile) > 700
        ? 5
        : Number(isMobile) > 640
        ? 4
        : 2,
    slidesToScroll: 1,
    speed: 10000,
    autoplaySpeed: 6000,
    autoplay: true,
    cssEase: "linear",
  };

  return (
    <div className="section-padding-model">
      <SectionHeader
        title={pageInfo.sectionTitle[languageStore]}
        description={pageInfo.sectionDescription[languageStore]}
      />

      {route.pathname === "/" ? (
        <>
          <Container maxWidth={false}>
            <div className="px-2">
              <Slider {...settings}>
                {listSubsidiaryCard.map((item, i) => (
                  <div key={i} className="relative group shadow-sm w-20 h-28">
                    <img
                      src={item.image}
                      alt=""
                      className="absolute h-full w-full object-cover z-0 rounded-sm"
                    />
                    <Link href={item.link}>
                      <a className="absolute top-0 left-0 z-10 w-full h-full flex justify-center items-center bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-colors duration-200 cursor-pointer" />
                    </Link>
                  </div>
                ))}
              </Slider>
            </div>
          </Container>

          <div className="flex justify-center mt-3">
            <div className="button-style-classic-small">
              <Link href="/subsidiary">
                {pageInfo.buttonAllSubsi[languageStore]}
              </Link>
            </div>
          </div>
        </>
      ) : (
        <Container maxWidth="lg">
          <div className="flex justify-center mb-10">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 w-fit">
              {listSubsidiaryCard.map((item, index) => (
                <SubsidiaryCard
                  key={index}
                  image={item.image}
                  title={item.title[languageStore]}
                  subtitle={item.subtitle[languageStore]}
                  link={item.link}
                />
              ))}
            </div>
          </div>
        </Container>
      )}
    </div>
  );
}

export default Subsidiary;
