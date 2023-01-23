import React, { useState } from "react";
import MissionVision from "../../components/about/mission-vision";
import HeaderModel from "../../components/model/header";
import Navbar from "../../components/sections/navbar";
import { useRouter } from "next/dist/client/router";
import Footer from "../../components/sections/footer";
import { listNavbarData } from "../../constant/language-navbar";
import { fnReadFileSync } from "../../util/function";

function MissionVisionPage({ headerData, visionMissionData }) {
  const route = useRouter();
  const [path, setPath] = useState(route.pathname);

  return (
    <div>
      <HeaderModel
        title={headerData.missionVisionPage.title}
        metaContent={headerData.missionVisionPage.metaContent}
      />

      <Navbar />
      <MissionVision
        path={path}
        dataset={visionMissionData}
        menus={listNavbarData}
      />

      <Footer />
    </div>
  );
}

export default MissionVisionPage;

export async function getStaticProps(context) {
  const headerData = fnReadFileSync("header-info.json");
  const visionMissionData = fnReadFileSync("vision-mission-info.json");
  return {
    props: { headerData, visionMissionData },
  };
}
