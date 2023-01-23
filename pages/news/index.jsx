import React from "react";
import HeaderModel from "../../components/model/header";
import Navbar from "../../components/sections/navbar";
import Footer from "../../components/sections/footer";
import { listNavbarData } from "../../constant/language-navbar";
import { useSelector } from "react-redux";
import News from "../../components/news/news";
import { listNewsData } from "../../constant/language-news";
import { fnReadFileSync } from "../../util/function";
import {
  fnGetAllNewsDocs,
  fnGetNewsImageStorage,
} from "../../util/news-firebase";

function NewsPage({ headerData, newsData }) {
  // console.log("newsData =>", newsData);

  return (
    <div>
      <HeaderModel
        title={headerData.newsPage.title}
        metaContent={headerData.newsPage.metaContent}
      />
      <Navbar />
      <News dataset={newsData} nPage="{newsData.nPage}" />

      <Footer />
    </div>
  );
}

export default NewsPage;

export async function getServerSideProps(context) {
  const headerData = fnReadFileSync("header-info.json");

  // // ==== mongoDB
  // // Fetch data from external API
  // const initialPage = 1;
  // const hostname = process.env.NEXT_PUBLIC_SITE_URL;
  // const result = await fetch(`${hostname}/api/news?page=${initialPage}`);
  // const newsData = await result.json();
  // // console.log("News", newsData);

  // ==== Firebase
  const newsCollection = process.env.NEXT_PUBLIC_NEWS_COLLECTION;
  const newsData = await fnGetAllNewsDocs(newsCollection);
  // console.log("new Data", newsData);

  var arrData = [];
  for (let index = 0; index < newsData.length; index++) {
    const element = newsData[index];
    // console.log("element Data", element.imagesInfo);

    var arrURL = [];
    for (let index = 0; index < element.data.imagesInfo.length; index++) {
      const item = element.data.imagesInfo[index];
      const url = await fnGetNewsImageStorage(item.fullPath);
      // console.log("url Data", url);
      arrURL.push({ ...item, url });
    }

    arrData.push({ ...element, imagesInfo: arrURL });
  }

  // console.log("array Data", arrData);
  return { props: { headerData, newsData: arrData } };
}
