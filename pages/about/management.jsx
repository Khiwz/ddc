import { useRouter } from "next/router";
import React, { useState } from "react";
import Management from "../../components/about/management";
import HeaderModel from "../../components/model/header";
import Footer from "../../components/sections/footer";
import Navbar from "../../components/sections/navbar";
import { listNavbarData } from "../../constant/language-navbar";
import { fnReadFileSync } from "../../util/function";

function ManagementPage({ headerData, managementData }) {
  const route = useRouter();
  const [path, setPath] = useState(route.pathname);

  return (
    <div>
      <HeaderModel
        title={headerData.managementPage.title}
        metaContent={headerData.managementPage.metaContent}
      />

      <Navbar />
      <Management path={path} dataset={managementData} menus={listNavbarData} />
      <Footer />
    </div>
  );
}

export default ManagementPage;

export async function getStaticProps(context) {
  const headerData = fnReadFileSync("header-info.json");
  const managementData = fnReadFileSync("management-info.json");
  return {
    props: { headerData, managementData },
  };
}
