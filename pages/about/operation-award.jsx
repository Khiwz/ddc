import { useRouter } from "next/router";
import React, { useState } from "react";
import OperationAward from "../../components/about/operation-award";
import HeaderModel from "../../components/model/header";
import Footer from "../../components/sections/footer";
import Navbar from "../../components/sections/navbar";
import { listNavbarData } from "../../constant/language-navbar";
import { fnReadFileSync } from "../../util/function";

function OperationAwardPage({ headerData, operationAwardData }) {
  const route = useRouter();
  const [path, setPath] = useState(route.pathname);

  return (
    <div>
      <HeaderModel
        title={headerData.operationAwardPage.title}
        metaContent={headerData.operationAwardPage.metaContent}
      />

      <Navbar />
      <OperationAward
        path={path}
        dataset={operationAwardData}
        menus={listNavbarData}
      />
      <Footer />
    </div>
  );
}

export default OperationAwardPage;

export async function getStaticProps(context) {
  const headerData = fnReadFileSync("header-info.json");
  const operationAwardData = fnReadFileSync("operation-award-info.json");
  return {
    props: { headerData, operationAwardData },
  };
}
