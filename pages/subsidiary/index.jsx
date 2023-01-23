import React from "react";
import HeaderModel from "../../components/model/header";
import Navbar from "../../components/sections/navbar";
import { listHeaderModel } from "../../constant/list-info";
import Footer from "../../components/sections/footer";
import Subsidiaries from "../../components/subsidiary/subsidiaries";
import { fnReadFileSync } from "../../util/function";

function SubsidiaryPage({ headerData }) {
  return (
    <div>
      <HeaderModel
        title={headerData.subsidiaryPage.title}
        metaContent={headerData.subsidiaryPage.metaContent}
      />
      <Navbar />
      <Subsidiaries />

      <Footer />
    </div>
  );
}

export default SubsidiaryPage;

export async function getStaticProps(context) {
  const headerData = fnReadFileSync("header-info.json");
  return {
    props: { headerData },
  };
}
