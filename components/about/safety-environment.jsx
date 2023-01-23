import React from "react";
import NavbarSubmenu from "../model/navbar-submenu-about";
import { Container } from "@mui/material";
import { useSelector } from "react-redux";
import SectionHeader from "../model/section-header";
import { BsCaretRightSquareFill, BsChevronDoubleRight } from "react-icons/bs";
import { MdPictureAsPdf } from "react-icons/md";
import BannerSubpage from "../sections/banner-subpage";

const pageInfo = {
  buttonDownload: {
    lao: "ດາວໂຫຼດ",
    english: "Download",
    chiness: "下載",
  },
};

function SafetyEnvironment({ path, dataset, menus }) {
  const { languageStore } = useSelector((state) => state.language);

  //   console.log("data", dataset[languageStore]);
  return (
    <div className="">
      {/* <div className="about-ddc-background-image h-500" /> */}
      <BannerSubpage />
      <NavbarSubmenu path={path} aboutMenuList={menus[languageStore]} />

      {/* safety policy */}
      <div className="section-padding-model">
        <Container maxWidth="lg">
          <SectionHeader
            title={dataset[languageStore].titleSatety}
            description=""
          />
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/3">
              {dataset[languageStore]?.descriptionSatety?.map((item, index) => (
                <p
                  key={index}
                  className="text-justify mb-5 text-sm md:text-base"
                >
                  {item}
                </p>
              ))}
            </div>
            <div className="flex-1 flex justify-center">
              <div className="ml-5">
                <img
                  src={`/images/safety-environment/safety-policy-lao.jpg`}
                  alt=""
                  className="w-full object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Environment policy */}
      <div className="section-padding-model">
        <Container maxWidth="lg">
          <SectionHeader
            title={dataset[languageStore].titleEnvironment}
            description=""
          />
          <p className="text-justify mb-10 text-sm md:text-base">
            {dataset[languageStore]?.descriptionEnvironment?.length > 0 &&
              dataset[languageStore]?.descriptionEnvironment[0]}
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-3 mb-10">
            {dataset[languageStore]?.subDescriptionEnvironment?.map(
              (item, index) => (
                <div key={index} className="mb-10 lg:mb-0">
                  <div className="flex items-center space-x-3">
                    <BsCaretRightSquareFill className="text-web-yellow" />
                    <p className="text-lg font-semibold">{item.name}</p>
                  </div>
                  {item.desc.map((desc, i) => (
                    <div key={i} className="flex space-x-3 pl-6">
                      <BsChevronDoubleRight className="text-web-yellow w-3 h-3 mt-1" />
                      <p className="flex-1 text-sm md:text-base">{desc}</p>
                    </div>
                  ))}
                </div>
              )
            )}
          </div>

          <p className="text-justify text-sm md:text-base">
            {dataset[languageStore]?.descriptionEnvironment?.length > 0 &&
              dataset[languageStore]?.descriptionEnvironment[1]}
          </p>
        </Container>
      </div>

      {/* Environment policy */}
      <div className="section-padding-model bg-gray-50">
        <Container maxWidth="md">
          <SectionHeader
            title={dataset[languageStore]?.document?.title}
            description=""
          />

          {dataset[languageStore]?.document?.listDocument?.map(
            (item, index) => (
              <div
                key={index}
                className="flex flex-col lg:flex-row lg:justify-between lg:items-center"
              >
                <div className="flex items-center space-x-3">
                  <BsCaretRightSquareFill className="text-web-yellow" />
                  <p className="text-xl font-semibold">{item.title}</p>
                </div>
                <div className="flex lg:justify-center">
                  <a
                    href={item.file}
                    target="_blank"
                    rel="noreferrer"
                    className="button-style-classic-small flex space-x-3 items-center"
                  >
                    <span className="w-8 h-8">
                      <MdPictureAsPdf fontSize={30} />
                    </span>
                    {pageInfo.buttonDownload[languageStore]}
                  </a>
                </div>
              </div>
            )
          )}
        </Container>
      </div>
    </div>
  );
}

export default SafetyEnvironment;
