import { Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { listNews, titleNewsSection } from "../../constant/list-info";
import SectionHeader from "../model/section-header";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { listNewsData } from "../../constant/language-news";
import { fnFirstImage } from "../../util/function";
import Link from "next/link";
import { Skeleton } from "@mui/material";
import {
  fnGetAllNewsDocs,
  fnGetNewsImageStorage,
} from "../../util/news-firebase";

const pageInfo = {
  buttonAllNews: {
    lao: "ຂ່າວສານ ທັງໝົດ",
    english: "All News",
    chiness: "所有新聞",
  },
};

function News() {
  const { languageStore } = useSelector((state) => state.language);
  const [newsData, setNewsData] = useState([]);
  const hostname = process.env.NEXT_PUBLIC_SITE_URL;
  const [isMobile, setIsMobile] = useState();

  useEffect(() => {
    fetchNews();
  }, []);

  useEffect(() => {
    // check screen width

    const onResize = () => {
      setIsMobile(window.innerWidth);
    };

    onResize();

    window.addEventListener("resize", onResize);
  }, [isMobile]);

  async function fetchNews() {
    // // ====== mongoDB
    // const output = await fetch(`${hostname}/api/news?page=1`);
    // const outputData = await output.json();
    // if (outputData) {
    //   setNewsData(outputData.result);
    // }

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
    setNewsData(arrData);
  }

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    //   centerPadding: "60px",
    slidesToShow:
      Number(isMobile) > 1180
        ? 5
        : Number(isMobile) > 900
        ? 4
        : Number(isMobile) > 700
        ? 3
        : Number(isMobile) > 640
        ? 2
        : 1,
    slidesToScroll: 1,
    speed: 10000,
    autoplaySpeed: 6000,
    autoplay: true,
    cssEase: "linear",
  };

  // console.log("News Data", newsData);
  // console.log("screen width", isMobile);
  return (
    <div className="section-padding-model bg-gray-100">
      <SectionHeader
        title={titleNewsSection.title[languageStore]}
        description={titleNewsSection.description[languageStore]}
      />

      <Container maxWidth={false}>
        {newsData.length > 0 ? (
          <div className="px-2">
            <Slider {...settings}>
              {newsData.map((item, i) => (
                <div
                  key={i}
                  className="news-image-container group shadow-sm w-44 sm:w-48 md:w-56 lg:w-96 h-40"
                >
                  <img
                    // src={fnFirstImage(item.imageId)}
                    src={
                      item.imagesInfo.length > 0
                        ? item.imagesInfo[0].url
                        : "/images/logo/ddc-logo-small.png"
                    }
                    alt=""
                    className="absolute w-full h-full object-cover z-0 rounded-sm"
                  />
                  <div className="image-overlay-hover-news z-10" />

                  <div className="image-overlay-hover-news-text z-20 flex flex-col items-center justify-start">
                    <p className="text-xs md:text-sm uppercase text-white text-center px-3 pt-2">
                      {item.data[languageStore].title}
                    </p>
                    <a
                      href={`/news/${item.id}`}
                      className="px-1 py-1 w-fit rounded-sm capitalize cursor-pointer text-white border hover:bg-web-yellow hover:text-white hover:border-web-yellow mb-5 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2"
                    >
                      <BsSearch fontSize={12} />
                    </a>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        ) : (
          <div className="flex justify-between space-x-10">
            {[1, 2, 3].map((item, index) => (
              <div key={index} className="flex-1">
                <Skeleton
                  variant="rectangular"
                  width="100%"
                  height={118}
                  animation="wave"
                />
                <Skeleton width="60%" animation="wave" />
                <Skeleton animation="wave" />
              </div>
            ))}
          </div>
        )}
      </Container>

      <div className="flex justify-center mt-10">
        <Link href="/news">
          <a className="button-style-classic-small">
            {pageInfo.buttonAllNews[languageStore]}
          </a>
        </Link>
      </div>

      {/* <div className="flex justify-center my-12">
        <div className="button-style shadow-sm rounded-sm bg-gray-200 h-12 w-40 flex justify-center items-center group">
          <a
            href="#"
            className="absolute z-20 font-semibold text-lg group-hover:text-white transition-colors duration-300"
          >
            ALL NEWS
          </a>
          <div className="button-style-1 z-10" />
        </div>
      </div> */}
    </div>
  );
}

export default News;
