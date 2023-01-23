import React, { useState } from "react";
import NavbarSubmenu from "../model/navbar-submenu-about";
import { Container } from "@mui/material";
import { useSelector } from "react-redux";
import SectionHeader from "../model/section-header";
import EffectCoverflowComponent from "../model/effect-coverflow";
import { FaPlus } from "react-icons/fa";
import CountUp, { useCountUp } from "react-countup";
import BannerSubpage from "../sections/banner-subpage";

function OperationAward({ path, dataset, menus }) {
  const { languageStore } = useSelector((state) => state.language);
  const [imageSelected, setImageSelected] = useState(
    "/images/operation-award/award-7.jpg"
  );

  //   console.log("data", dataset[languageStore]?.imageOperation);
  return (
    <div className="">
      {/* <div className="about-ddc-background-image h-500" /> */}
      <BannerSubpage />
      <NavbarSubmenu path={path} aboutMenuList={menus[languageStore]} />

      {/* operation */}
      <div className="section-padding-model">
        <Container maxWidth="lg">
          <div className="">
            <SectionHeader
              title={dataset.titleOperation[languageStore]}
              description=""
            />
            {dataset.descriptionOperation[languageStore]?.map((item, i) => (
              <p key={i} className="text-justify mb-5 text-sm md:text-base">
                {item}
              </p>
            ))}
          </div>
        </Container>
      </div>

      {/* number of operation */}
      <div className="section-padding-model operation-background-image">
        <Container maxWidth="lg">
          <div className="flex flex-row flex-wrap justify-center space-x-1 text-white">
            {dataset?.resultOperation?.map((item, i) => (
              <div
                key={i}
                className="w-fit sm:flex-1 flex flex-col items-center border-r border-r-gray-500 last:border-r-0 pr-2 mb-10 lg:mb-0"
              >
                <div className="flex items-center">
                  <p className="text-5xl font-bold">
                    <CountUp
                      start={0}
                      end={item.number}
                      //   duration={3}
                      separator="."
                      enableScrollSpy={true}
                      scrollSpyDelay={300}
                    />
                  </p>
                  <FaPlus fontSize={20} className="text-web-yellow" />
                </div>
                <p className="uppercase text-xxs lg:text-sm text-center">
                  {item.name[languageStore]}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* award */}
      <div className="section-padding-model">
        <Container maxWidth="lg">
          <div className="flex flex-col lg:flex-row space-x-5 mb-20">
            <div className="flex-1">
              <SectionHeader
                title={dataset?.titleAward[languageStore]}
                description=""
              />
              {dataset?.descriptionAward[languageStore]?.map((item, i) => (
                <p key={i} className="text-justify mb-5 text-sm sm:text-base">
                  {item}
                </p>
              ))}
            </div>
            <div className="flex-1 hidden sm:block">
              <img src={imageSelected} alt="" className="w-full object-cover" />
            </div>
          </div>
          <div className="h-96">
            <EffectCoverflowComponent
              images={dataset.imageAward}
              setImageSelected={setImageSelected}
              handleOpenModal={() => {}}
            />
          </div>
        </Container>
      </div>
    </div>
  );
}

export default OperationAward;
