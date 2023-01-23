import { Container } from "@mui/material";
import React from "react";
import { useState } from "react";
import { BsDiagram2Fill } from "react-icons/bs";
import { HiMail } from "react-icons/hi";
import { AiOutlineSend } from "react-icons/ai";
import { FaMapMarkedAlt, FaMobileAlt } from "react-icons/fa";
import { FiChevronsRight, FiTarget } from "react-icons/fi";
import { useSelector } from "react-redux";
import NavbarSubmenuSubsi from "../model/navbar-submenu-subsi";
import SectionHeader from "../model/section-header";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import OfficeLocation from "../model/office-location";
import BannerSubpage from "../sections/banner-subpage";

function SubsidiaryDetail({ pageInfo }) {
  const { languageStore } = useSelector((state) => state.language);
  const [tabOpenned, setTabOpenned] = useState("about");

  const changeTabHandler = (item) => {
    setTabOpenned(item);
  };

  return (
    <div>
      {/* <div className="about-ddc-background-image h-500" /> */}
      <BannerSubpage />
      <NavbarSubmenuSubsi />
      <div className="">
        <div className="">
          {/* ======= about sub page ======= */}
          <div className="section-padding-model">
            <Container maxWidth="lg">
              <div className="flex justify-center">
                <SectionHeader
                  title={pageInfo.subsiName[languageStore]}
                  description={pageInfo.subsiDescription[languageStore]}
                />
              </div>

              {/* <div className="mb-20">
                <div className="flex space-x-3 items-center">
                  <FiTarget fontSize={20} className="text-web-yellow" />
                  <p className="text-xl font-bold text-neutral-700 uppercase">
                    {pageInfo.mission[languageStore]}
                  </p>
                </div>

                {pageInfo?.missionDescription[languageStore]?.map(
                  (item, index) => (
                    <div
                      key={index}
                      className="flex space-x-2 space-y-2 items-start"
                    >
                      <FiChevronsRight className="text-web-yellow h-6 w-6 ml-8 translate-y-2" />
                      <p className="flex-1">{item}</p>
                    </div>
                  )
                )}
              </div> */}

              {/* <div>
                <div className="flex space-x-3 items-center">
                  <BsDiagram2Fill fontSize={20} className="text-web-yellow" />
                  <p className="text-xl font-bold text-neutral-700 uppercase">
                    {pageInfo.organizeChart[languageStore]}
                  </p>
                </div>

                <img
                  src={pageInfo.organizeChartImg}
                  alt="organizational chart"
                />
              </div> */}
            </Container>

            <Container maxWidth="sm">
              <div className="flex flex-col items-center justify-center overflow-hidden">
                {/* <SectionHeader
                  title={pageInfo.subsiGallery[languageStore]}
                  description=""
                /> */}

                <ImageGallery
                  items={pageInfo.subsiImage.map((item) => ({
                    original: item.img,
                    thumbnail: item.img,
                    // description: item.description[languageStore],
                  }))}
                />
              </div>
            </Container>
          </div>

          {/* ======= contact sub page ======= */}
          <div className="section-padding-model bg-gray-50/60">
            <Container maxWidth="lg">
              <div className="flex justify-center">
                <SectionHeader
                  title={pageInfo.subsiContact[languageStore]}
                  description={pageInfo.subsiContactDesc[languageStore]}
                />
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                <div className="flex flex-col items-center py-8 px-5 bg-gray-100 rounded-md shadow-sm text-neutral-500 hover:shadow-md transition-all duration-150">
                  <FaMobileAlt fontSize={50} className="text-web-yellow mb-5" />
                  <p className="text-neutral-700 font-semibold">
                    (+856)-20 22498777
                  </p>
                  <p className="text-neutral-700 font-semibold">
                    {pageInfo.fax[languageStore]}: (+856)-21 221902
                  </p>
                  <p className="mt-3 text-sm">
                    {pageInfo.support[languageStore]}
                  </p>
                </div>
                <div className="flex flex-col items-center py-8 px-5 bg-gray-100 rounded-md shadow-sm text-neutral-500 hover:shadow-md transition-all duration-150">
                  <FaMapMarkedAlt
                    fontSize={50}
                    className="text-web-yellow mb-5"
                  />
                  <p className="text-neutral-700 font-semibold text-center">
                    {pageInfo.address[languageStore]}
                  </p>
                  <p className="mt-3 text-sm">
                    {pageInfo.workingHour[languageStore]}
                  </p>
                  <p className="text-sm">
                    {pageInfo.nonWorkingHour[languageStore]}
                  </p>
                </div>
                <div className="flex flex-col items-center py-8 px-5 bg-gray-100 rounded-md shadow-sm text-neutral-500 hover:shadow-md transition-all duration-150">
                  <HiMail fontSize={50} className="text-web-yellow mb-5" />
                  <p className="text-neutral-700 font-semibold">
                    info@ddcgroup.la
                  </p>
                  <a
                    href="mailto:info@ddcgroup.la"
                    className="text-sm border mt-2 px-5 py-2 hover:bg-web-yellow transition-colors duration-200 rounded-sm hover:border-web-yellow"
                  >
                    {pageInfo.mailUsNow[languageStore]}
                  </a>
                </div>
              </div>

              <div className="flex flex-col lg:flex-row mt-16">
                <div className="flex flex-col space-y-5 w-full lg:w-1/3 lg:pr-3 mb-10 lg:mb-0">
                  <input
                    placeholder={pageInfo.name[languageStore]}
                    className="border outline-none py-3 px-5 bg-gray-100"
                  />
                  <input
                    placeholder={pageInfo.email[languageStore]}
                    className="border outline-none py-3 px-5 bg-gray-100"
                  />
                  <textarea
                    rows={8}
                    placeholder={pageInfo.yourMessage[languageStore]}
                    className="border outline-none py-3 px-5 bg-gray-100"
                  />
                  <a
                    href="#"
                    className="relative flex items-center justify-center py-3 border bg-web-yellow text-white group"
                  >
                    <p className="text-xl uppercase mr-3 z-10">
                      {pageInfo.send[languageStore]}
                    </p>
                    <AiOutlineSend fontSize={25} className="z-10" />
                    <div className="absolute z-0 h-1 w-full bg-blue-900 opacity-0 group-hover:opacity-100 group-hover:h-full transition-all duration-150" />
                  </a>
                </div>
                <div className="flex-1 border ml-2">
                  <OfficeLocation />
                </div>
              </div>
            </Container>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubsidiaryDetail;
