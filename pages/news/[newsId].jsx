import { Container, Skeleton } from "@mui/material";
import { useRouter } from "next/router";
import Link from "next/link";
import React, { useState } from "react";
import { useEffect } from "react";
import { BsChevronRight } from "react-icons/bs";
import { useSelector } from "react-redux";
import HeaderModel from "../../components/model/header";
import Navbar from "../../components/sections/navbar";
import { listNewsData, listNewsImage } from "../../constant/language-news";
import { listHeaderModel } from "../../constant/list-info";
import NewsRecentPost from "../../components/news/news-recent-post";
import SectionHeader from "../../components/model/section-header";
import RelatedNewsCard from "../../components/model/swiper-related-news";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import Footer from "../../components/sections/footer";
import EmbededFacebook from "../../components/news/embeded-facebook";
import SocialShare from "../../components/model/social-share";
import { fnReadFileSync } from "../../util/function";
import {
  fnGetNewsImageStorage,
  fnGetSingleNewsDoc,
} from "../../util/news-firebase";
import BannerSubpage from "../../components/sections/banner-subpage";

const pageInfo = {
  homePage: { lao: "ໜ້າຫຼັກ", english: "Home", chiness: "主頁: " },
  news: { lao: "ຂ່າວສານ", english: "News", chiness: "消息" },
  date: { lao: "ລົງວັນທີ: ", english: "Date posted: ", chiness: "發布日期: " },
  relatedNews: {
    lao: "ຂ່າວສານທີ່ກ່ຽວຂ້ອງ",
    english: "Related News",
    chiness: "相關新聞",
  },
};
function NewsSpecificId({ headerData, newsData }) {
  const route = useRouter();
  const [news, setNews] = useState();
  const [images, setImages] = useState();
  const [fullURL, setFullURL] = useState("");
  const { languageStore } = useSelector((state) => state.language);

  useEffect(() => {
    const newsId = route.query.newsId;
    setNews(listNewsData.find((item) => item.id === newsId));
    setImages(listNewsImage.find((item) => item.id === newsId));
    setFullURL(window.location.href);
  }, [route]);

  // console.log("newsData", newsData);

  return (
    <div>
      <HeaderModel
        title={headerData.newsPage.title}
        metaContent={headerData.newsPage.metaContent}
      />
      <Navbar />
      {/* <div className="about-ddc-background-image h-500" /> */}
      <BannerSubpage />

      {/* sub header */}
      <div className="bg-gray-100 h-10 w-full">
        <Container maxWidth="lg" sx={{ height: "100%" }}>
          <div className="flex items-center h-full space-x-2 text-neutral-600">
            <Link href="/">
              <p className="hover:text-web-yellow uppercase cursor-pointer">
                {pageInfo.homePage[languageStore]}
              </p>
            </Link>
            <BsChevronRight />
            <Link href="/news">
              <p className="hover:text-web-yellow uppercase cursor-pointer">
                {pageInfo.news[languageStore]}
              </p>
            </Link>
            <div className="hidden lg:block">
              <BsChevronRight />
            </div>
            <p className="hidden lg:block">{newsData[languageStore].title}</p>
          </div>
        </Container>
      </div>

      {/* {news === undefined && images === undefined ? (
        <div className="flex justify-around">
          <Skeleton />
          <Skeleton animation="wave" />
          <Skeleton animation={false} />
        </div>
      ) : (
      )} */}
      <div className="section-padding-model">
        <Container maxWidth="lg">
          <div className="flex flex-col lg:flex-row space-y-10 lg:space-y-0 lg:space-x-10">
            <div className="flex-1">
              {/* <p className="text-xl font-semibold text-neutral-600 my-3">
                {newsData[languageStore].title}
              </p> */}

              <div className="overflow-hidden">
                <Container maxWidth="sm">
                  <ImageGallery
                    items={newsData.imagesInfo.map((img) => ({
                      original: img.url,
                      thumbnail: img.url,
                    }))}
                  />
                </Container>
              </div>
              {/* <img
                src={
                  newsData.imagesInfo.length > 0
                    ? newsData.imagesInfo[0].url
                    : "/images/logo/ddc-logo-small.png"
                }
                alt="News image"
              /> */}
              <pre className="TextDescription">
                {newsData[languageStore].description}
              </pre>

              <p className="flex justify-end text-neutral-500 mb-10">
                {pageInfo.date[languageStore]}
                {new Date(newsData.postedDate).toLocaleDateString("en-GB")}
              </p>

              <div className="flex justify-end">
                <SocialShare url={fullURL} />
              </div>
            </div>
            <EmbededFacebook />
            {/* <NewsRecentPost /> */}
          </div>
        </Container>
      </div>

      {/* related news */}
      {/* <div className="section-padding-model">
        <Container maxWidth="lg">
          <SectionHeader
            title={pageInfo.relatedNews[languageStore]}
            description=""
          />

          <RelatedNewsCard />
        </Container>
      </div> */}

      <Footer />
    </div>
  );
}

export default NewsSpecificId;

export async function getServerSideProps(context) {
  const headerData = fnReadFileSync("header-info.json");

  // // ==== mongoDB
  // const hostname = process.env.NEXT_PUBLIC_SITE_URL;
  // const newsId = context.query.newsId;
  // // console.log("context", context.query.newsId);

  // // Fetch data from external API
  // const result = await fetch(`${hostname}/api/${newsId}`);
  // const newsData = await result.json();
  // // console.log("News", newsData);

  // ==== firebase
  const newsCollection = process.env.NEXT_PUBLIC_NEWS_COLLECTION;
  const newsId = context.query.newsId;
  var newsData = await fnGetSingleNewsDoc(newsCollection, newsId);
  // console.log("news", newsData);

  var arrURL = [];
  for (let index = 0; index < newsData.imagesInfo.length; index++) {
    const element = newsData.imagesInfo[index];
    const url = await fnGetNewsImageStorage(element.fullPath);
    arrURL.push({ ...element, url });
  }

  newsData = { ...newsData, imagesInfo: arrURL };
  console.log("Data", newsData);

  return { props: { headerData, newsData } };
}
