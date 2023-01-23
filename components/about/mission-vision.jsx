import { Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import { BsEyeFill } from "react-icons/bs";
import { FiTarget, FiChevronsRight } from "react-icons/fi";
import { GiCutDiamond } from "react-icons/gi";
import NavbarSubmenu from "../model/navbar-submenu-about";
import { useSelector } from "react-redux";
import BannerSubpage from "../sections/banner-subpage";

function MissionVision({ path, dataset, menus }) {
  const { languageStore } = useSelector((state) => state.language);
  // console.log("dataset", menus);

  return (
    <div className="">
      {/* <div className="about-ddc-background-image h-400" /> */}
      <BannerSubpage />
      <NavbarSubmenu path={path} aboutMenuList={menus[languageStore]} />

      {/* ========= VISION ======== */}
      <div className="section-padding-model">
        <Container maxWidth="lg">
          <div className="flex flex-col space-y-3 sm:space-y-0 sm:flex-row sm:space-x-5">
            <div className="flex-1">
              <div className="flex items-center space-x-3">
                <BsEyeFill fontSize={35} className="text-web-yellow" />
                <p className="text-lg lg:text-2xl font-bold uppercase">
                  {dataset[languageStore].title["vision"]}
                </p>
              </div>
              <div className="pt-5 lg:text-lg lg:pr-10">
                {dataset[languageStore].vision.map((item, index) => (
                  <p key={index} className="text-center">
                    {item}
                  </p>
                ))}
              </div>
            </div>

            <div className="flex-1 h-48 md:h-64 w-full">
              <img
                src="/images/mission-vision/vision.jpg"
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
            {/* <div className="flex-1 flex justify-end">
              <img
                src="/images/mission-vision/vision.jpg"
                alt=""
                className="h-64 object-contain"
              />
            </div> */}
          </div>
        </Container>
      </div>

      {/* ========= MISSION ======== */}
      <div className="section-padding-model">
        <Container maxWidth="lg">
          <div className="flex flex-col space-y-3 sm:space-y-0 sm:flex-row sm:space-x-5">
            <div className="hidden sm:block flex-1 h-48 md:h-64 w-full">
              <img
                src="/images/mission-vision/mission.jpg"
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-3">
                <FiTarget fontSize={30} className="text-web-yellow" />
                <p className="text-lg lg:text-2xl font-bold uppercase">
                  {dataset[languageStore].title["mission"]}
                </p>
              </div>
              <div>
                <div className="pt-5 lg:text-lg lg:pl-8">
                  {dataset[languageStore].mission.map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <FiChevronsRight className="text-web-yellow h-5 w-8 mt-1" />
                      <p key={index} className="flex-1">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="sm:hidden flex-1 h-48 md:h-64 w-full">
              <img
                src="/images/mission-vision/mission.jpg"
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </Container>
      </div>

      {/* ========= VALUES ======== */}
      <div className="section-padding-model bg-gray-50">
        <Container maxWidth="lg">
          <div className="flex flex-col space-y-3 sm:space-y-0 sm:flex-row sm:space-x-5">
            <div className="flex-1">
              <div className="flex items-center space-x-3">
                <GiCutDiamond fontSize={30} className="text-web-yellow" />
                <p className="text-lg lg:text-2xl font-bold uppercase">
                  {dataset[languageStore].title["values"]}
                </p>
              </div>
              <div>
                <div className="pt-5 lg:text-lg">
                  {dataset[languageStore].values.map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <FiChevronsRight className="text-web-yellow h-5 w-8 mt-1" />
                      <p key={index} className="flex-1">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex-1 h-48 md:h-64 w-full">
              <img
                src="/images/mission-vision/value.jpg"
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </Container>
      </div>

      {/* ========= STRATEGY ======== */}
      <div className="section-padding-model bg-gray-50">
        <Container maxWidth="lg">
          <div className="flex flex-col space-y-3 sm:space-y-0 sm:flex-row sm:space-x-5">
            <div className="hidden md:block flex-1 h-64 w-full">
              <img
                src="/images/mission-vision/strategy.jpg"
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-3">
                <BsEyeFill fontSize={30} className="text-web-yellow" />
                <p className="text-lg lg:text-2xl font-bold uppercase">
                  {dataset[languageStore].title["strategy"]}
                </p>
              </div>
              <div>
                <div className="pt-5 lg:text-lg lg:pl-8">
                  {dataset[languageStore].strategy.map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <FiChevronsRight className="text-web-yellow h-5 w-8 mt-1" />
                      <p key={index} className="flex-1">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="md:hidden flex-1 h-48 md:h-64 w-full">
              <img
                src="/images/mission-vision/strategy.jpg"
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </Container>
      </div>

      {/* ========= SLOGAN ======== */}
      <div className="section-padding-model bg-gray-50">
        <Container maxWidth="md">
          <div className="flex justify-center">
            <div className="border-8 border-web-yellow h-16 md:h-24 md:mx-32 w-full sm:w-80 md:w-96 flex justify-center">
              <div className="flex flex-col items-center space-y-1 md:space-y-3 text-xl md:text-3xl font-semibold text-neutral-700 -translate-y-10 w-max px-10 bg-gray-50">
                {dataset[languageStore].slogan.map((item, index) => (
                  <p key={index}>{item}</p>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default MissionVision;
