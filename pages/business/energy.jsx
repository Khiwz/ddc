import React from "react";
import HeaderModel from "../../components/model/header";
import Navbar from "../../components/sections/navbar";
import Footer from "../../components/sections/footer";
import { listNavbarData } from "../../constant/language-navbar";
import EnergyBusiness from "../../components/business/energy";
import { useSelector } from "react-redux";
import { fnReadFileSync } from "../../util/function";

function EnergyBusinessPage({ headerData, businessData }) {
  const { languageStore } = useSelector((state) => state.language);

  // console.log("data props", data[languageStore]);
  return (
    <div>
      <HeaderModel
        title={headerData.energyPage.title}
        metaContent={headerData.energyPage.metaContent}
      />
      <Navbar />
      <EnergyBusiness
        // dataset={listBusinessData.energy[languageStore]}
        dataset={businessData.energy[languageStore]}
        menus={listNavbarData[languageStore]}
      />

      <Footer />
    </div>
  );
}

export default EnergyBusinessPage;

export async function getStaticProps(context) {
  const headerData = fnReadFileSync("header-info.json");
  const businessData = fnReadFileSync("business-info.json");
  return {
    props: { headerData, businessData },
  };
}
