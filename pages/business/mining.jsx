import React from "react";
import HeaderModel from "../../components/model/header";
import Navbar from "../../components/sections/navbar";
import Footer from "../../components/sections/footer";
import { listNavbarData } from "../../constant/language-navbar";
import { useSelector } from "react-redux";
import MiningBusiness from "../../components/business/mining";
import { fnReadFileSync } from "../../util/function";

function AgricultureBusinessPage({ headerData, businessData }) {
  const { languageStore } = useSelector((state) => state.language);

  return (
    <div>
      <HeaderModel
        title={headerData.miningPage.title}
        metaContent={headerData.miningPage.metaContent}
      />
      <Navbar />
      <MiningBusiness
        dataset={businessData.mining[languageStore]}
        menus={listNavbarData[languageStore]}
      />

      <Footer />
    </div>
  );
}

export default AgricultureBusinessPage;

export async function getStaticProps(context) {
  const headerData = fnReadFileSync("header-info.json");
  const businessData = fnReadFileSync("business-info.json");
  return {
    props: { headerData, businessData },
  };
}
