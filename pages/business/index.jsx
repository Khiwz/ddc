import React, { useState } from "react";
import HeaderModel from "../../components/model/header";
import Navbar from "../../components/sections/navbar";
import { useRouter } from "next/dist/client/router";
import Footer from "../../components/sections/footer";
import { listNavbarData } from "../../constant/language-navbar";
import Business from "../../components/business/business";
import { fnReadFileSync } from "../../util/function";

function BusinessPage({ headerData, businessData }) {
  const route = useRouter();
  const [path, setPath] = useState(route.pathname);

  return (
    <div>
      <HeaderModel
        title={headerData.businessPage.title}
        metaContent={headerData.businessPage.metaContent}
      />
      <Navbar />
      <Business menus={listNavbarData} businessData={businessData} />

      <Footer />
    </div>
  );
}

export default BusinessPage;

export async function getStaticProps(context) {
  const headerData = fnReadFileSync("header-info.json");
  const businessData = fnReadFileSync("section-business-info.json");
  return {
    props: { headerData, businessData },
  };
}
