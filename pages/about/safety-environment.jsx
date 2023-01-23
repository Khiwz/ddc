import { useRouter } from "next/router";
import React, { useState } from "react";
import SafetyEnvironment from "../../components/about/safety-environment";
import HeaderModel from "../../components/model/header";
import Footer from "../../components/sections/footer";
import Navbar from "../../components/sections/navbar";
import { listNavbarData } from "../../constant/language-navbar";
import { fnReadFileSync } from "../../util/function";

function SafetyEnvironmentPage({ headerData, safetyEnvironmentData }) {
  const route = useRouter();
  const [path, setPath] = useState(route.pathname);

  return (
    <div>
      <HeaderModel
        title={headerData.safetyEnvironmentPage.title}
        metaContent={headerData.safetyEnvironmentPage.metaContent}
      />

      <Navbar />
      <SafetyEnvironment
        path={path}
        dataset={safetyEnvironmentData}
        menus={listNavbarData}
      />
      <Footer />
    </div>
  );
}

export default SafetyEnvironmentPage;

export async function getStaticProps(context) {
  const headerData = fnReadFileSync("header-info.json");
  const safetyEnvironmentData = fnReadFileSync("safety-environment-info.json");
  return {
    props: { headerData, safetyEnvironmentData },
  };
}
