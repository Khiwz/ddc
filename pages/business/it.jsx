import React from "react";
import HeaderModel from "../../components/model/header";
import Navbar from "../../components/sections/navbar";
import Footer from "../../components/sections/footer";
import { listNavbarData } from "../../constant/language-navbar";
import { useSelector } from "react-redux";
import { fnReadFileSync } from "../../util/function";
import ITBusiness from "../../components/business/it";

function ITBusinessPage({ headerData, businessData }) {
  const { languageStore } = useSelector((state) => state.language);

  return (
    <div>
      <HeaderModel
        title={headerData.itPage.title}
        metaContent={headerData.itPage.metaContent}
      />
      <Navbar />
      <ITBusiness
        dataset={businessData.it[languageStore]}
        menus={listNavbarData[languageStore]}
      />

      <Footer />
    </div>
  );
}

export default ITBusinessPage;

export async function getStaticProps(context) {
  const headerData = fnReadFileSync("header-info.json");
  const businessData = fnReadFileSync("business-info.json");
  return {
    props: { headerData, businessData },
  };
}
