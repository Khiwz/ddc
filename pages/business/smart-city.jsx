import React from "react";
import HeaderModel from "../../components/model/header";
import Navbar from "../../components/sections/navbar";
import Footer from "../../components/sections/footer";
import { listNavbarData } from "../../constant/language-navbar";
import { useSelector } from "react-redux";
import SmartCityBusiness from "../../components/business/smart-city";
import { fnReadFileSync } from "../../util/function";

function TimberBusinessPage({ headerData, businessData }) {
  const { languageStore } = useSelector((state) => state.language);

  return (
    <div>
      <HeaderModel
        title={headerData.smartCityPage.title}
        metaContent={headerData.smartCityPage.metaContent}
      />
      <Navbar />
      <SmartCityBusiness
        dataset={businessData.smartCity[languageStore]}
        menus={listNavbarData[languageStore]}
      />

      <Footer />
    </div>
  );
}

export default TimberBusinessPage;

export async function getStaticProps(context) {
  const headerData = fnReadFileSync("header-info.json");
  const businessData = fnReadFileSync("business-info.json");
  return {
    props: { headerData, businessData },
  };
}
