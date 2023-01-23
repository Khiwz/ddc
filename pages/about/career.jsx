import React from "react";
import Career from "../../components/about/career";
import HeaderModel from "../../components/model/header";
import Footer from "../../components/sections/footer";
import Navbar from "../../components/sections/navbar";
import { fnGetAllDocs, fnGetFileStorage } from "../../util/career-firebase";
import { fnReadFileSync } from "../../util/function";

function CareerPage({ headerData, careerData }) {
  // console.log("documents =>", careerData);
  return (
    <div>
      <HeaderModel
        title={headerData.careerPage.title}
        metaContent={headerData.careerPage.metaContent}
      />

      <Navbar />
      <Career dataset={careerData} />
      <Footer />
    </div>
  );
}

export default CareerPage;

export async function getServerSideProps(context) {
  const headerData = fnReadFileSync("header-info.json");

  // // ==== mongoDB
  // const hostname = process.env.NEXT_PUBLIC_SITE_URL;
  // const result = await fetch(`${hostname}/api/career`);
  // const careerData = await result.json();
  // // console.log("Found documents =>", careerData);

  // ==== Firebase
  const careerCollection = process.env.NEXT_PUBLIC_CAREER_COLLECTION;
  const careerData = await fnGetAllDocs(careerCollection);

  var arrData = [];
  for (let index = 0; index < careerData.length; index++) {
    const element = careerData[index];
    let url;
    if (element.fileInfo === undefined) {
      url = null;
    } else {
      url = await fnGetFileStorage(element.fileInfo.fullPath);
    }
    arrData.push({ ...element, fileInfo: { ...element.fileInfo, url } });
  }

  // console.log("array Data", arrData);
  return { props: { headerData, careerData: arrData } };
}
