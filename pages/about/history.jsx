import { useRouter } from "next/router";
import React, { useState } from "react";
import History from "../../components/about/history";
import HeaderModel from "../../components/model/header";
import Footer from "../../components/sections/footer";
import Navbar from "../../components/sections/navbar";
import { listNavbarData } from "../../constant/language-navbar";
import { fnReadFileSync } from "../../util/function";

function HistoryPage({ headerData, historyData }) {
  const route = useRouter();
  const [path, setPath] = useState(route.pathname);

  return (
    <div>
      <HeaderModel
        title={headerData.managementPage.title}
        metaContent={headerData.managementPage.metaContent}
      />

      <Navbar />
      <History path={path} dataset={historyData} menus={listNavbarData} />
      <Footer />
    </div>
  );
}

export default HistoryPage;

export async function getStaticProps(context) {
  const headerData = fnReadFileSync("header-info.json");
  const historyData = fnReadFileSync("history-info.json");
  return {
    props: { headerData, historyData },
  };
}
