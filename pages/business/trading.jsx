import React from "react";
import HeaderModel from "../../components/model/header";
import Navbar from "../../components/sections/navbar";
import Footer from "../../components/sections/footer";
import { listNavbarData } from "../../constant/language-navbar";
import { useSelector } from "react-redux";
import { fnReadFileSync } from "../../util/function";
import TradeBusiness from "../../components/business/trading";

function TradeBusinessPage({ headerData, businessData }) {
  const { languageStore } = useSelector((state) => state.language);

  return (
    <div>
      <HeaderModel
        title={headerData.tradePage.title}
        metaContent={headerData.tradePage.metaContent}
      />
      <Navbar />
      <TradeBusiness
        dataset={businessData.trade[languageStore]}
        menus={listNavbarData[languageStore]}
      />

      <Footer />
    </div>
  );
}

export default TradeBusinessPage;

export async function getStaticProps(context) {
  const headerData = fnReadFileSync("header-info.json");
  const businessData = fnReadFileSync("business-info.json");
  return {
    props: { headerData, businessData },
  };
}
