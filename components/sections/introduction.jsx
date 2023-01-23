import React from "react";
import { FiLayers } from "react-icons/fi";
import { Container } from "@mui/material";
import {
  listIntroduceSection,
  titleIntroduceSection,
} from "../../constant/list-info";
import SectionHeader from "../model/section-header";
import { useSelector } from "react-redux";
import Link from "next/link";
import { TbArrowsMinimize, TbCalendarStats } from "react-icons/tb";
import { BsAward } from "react-icons/bs";
import { VscOrganization } from "react-icons/vsc";

const pageInfo = {
  aboutUs: {
    lao: "ກ່ຽວກັບ ພວກເຮົາ",
    english: "About Us",
    chiness: "關於我們",
  },
  icons: [
    <TbArrowsMinimize
      key={1}
      fontSize={35}
      className="text-yellow-400 group-hover:text-white transition-colors duration-500"
    />,
    <BsAward
      key={2}
      fontSize={35}
      className="text-yellow-400 group-hover:text-white transition-colors duration-500"
    />,
    <TbCalendarStats
      key={3}
      fontSize={35}
      className="text-yellow-400 group-hover:text-white transition-colors duration-500"
    />,
    <VscOrganization
      key={4}
      fontSize={35}
      className="text-yellow-400 group-hover:text-white transition-colors duration-500"
    />,
  ],
};

function Introduction({ introduceData }) {
  const { languageStore } = useSelector((state) => state.language);

  // console.log("introduceData", introduceData);

  return (
    <div className="section-padding-model bg-gray-50">
      <SectionHeader
        title={introduceData.title[languageStore]}
        description={introduceData.description[languageStore]}
      />

      <Container maxWidth="lg">
        <div className="flex flex-wrap justify-between">
          {introduceData.list.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center w-36 sm:w-40 lg:w-64 xl:w-72 p-2 lg:pb-8 lg:px-5 group cursor-pointer mb-3"
            >
              <div className="p-3 lg:p-5 rounded-full bg-gray-100 group-hover:bg-yellow-400 transition-colors duration-500 shadow-sm mb-5">
                {pageInfo.icons[index]}
              </div>
              <p className="text-sm md:text-lg lg:text-xl font-bold sm:font-semibold text-gray-600 mb-1">
                {item.title[languageStore]}
              </p>
              <div className="w-16 border-b-2 mb-3" />
              <p className="text-center text-xs sm:text-sm lg:text-lg text-gray-500">
                {item.desc[languageStore]}
              </p>
            </div>
          ))}
        </div>
      </Container>

      <div className="text-center">
        <Link href="/about/operation-award">
          <a className="button-style-classic-small">
            {pageInfo.aboutUs[languageStore]}
          </a>
        </Link>
      </div>
    </div>
  );
}

export default Introduction;
