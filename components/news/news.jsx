import { Container, Pagination, Skeleton, Stack } from "@mui/material";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { BsSearch } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import { useSelector } from "react-redux";
import { readMore } from "../../constant/list-info";
import { fnFirstImage } from "../../util/function";
import SectionHeader from "../model/section-header";
import SocialShare from "../model/social-share";
import BannerSubpage from "../sections/banner-subpage";
import EmbededFacebook from "./embeded-facebook";
import HighlightNewsSlide from "./highlight-news";
import NewsRecentPost from "./news-recent-post";

const pageInfo = {
  search: { lao: "ຄົ້ນຫາ", english: "Search", chiness: "搜索" },
  title: {
    lao: "ຂ່າວສານທັງໝົດ",
    english: "All News",
    chiness: "所有新聞",
  },
  description: {
    lao: "ຂ່າວສານ ແລະ ກິດຈະກຳການເຄື່ອນໄຫວ ທັງໝົດຂອງບໍລິສັດ ກຸ່ມດວງຈະເລີນພັດທະນາ ກໍ່ສ້າງ",
    english:
      "All the news and activities of Duang Charoen Development and Construction Group",
    chiness: "",
  },
};

function News({ dataset, nPage }) {
  const { languageStore } = useSelector((state) => state.language);
  const route = useRouter();
  const [fullURL, setFullURL] = useState("");
  const [newsData, setNewsData] = useState(dataset);
  const [allNewsData, setAllNewsData] = useState(dataset);
  const [page, setPage] = useState(1);
  const [isMobileHorizontal, setIsMobileHorizontal] = useState();

  useEffect(() => {
    const onResize = () => {
      setIsMobileHorizontal(window.innerHeight);
    };
    onResize();
    window.addEventListener("resize", onResize);
  }, [isMobileHorizontal]);

  const handleChange = async (event, value) => {
    setPage(value);
    setNewsData([]);
    setAllNewsData([]);

    // fetch data here
    const hostname = process.env.NEXT_PUBLIC_SITE_URL;
    const result = await fetch(`${hostname}/api/news?page=${value}`);
    const resultData = await result.json();
    if (resultData) {
      setNewsData(resultData.result);
      setAllNewsData(resultData.result);
    }
  };

  useEffect(() => {
    setFullURL(window.location.href);
  }, [route]);

  const searchHandler = (e) => {
    const text = e.target.value;

    if (text === "") {
      setNewsData(allNewsData);
    } else {
      setNewsData(
        allNewsData.filter((item) =>
          item[languageStore].title.toLowerCase().includes(text.toLowerCase())
        )
      );
    }
  };

  // console.log("totalRecord", totalRecord);

  return (
    <div>
      {/* <div className="about-ddc-background-image h-500" /> */}
      {/* <BannerSubpage /> */}
      <div
        className={`w-full mb-3 ${
          isMobileHorizontal > 400 ? "h-72 sm:h-450" : "h-64"
        }`}
      >
        <HighlightNewsSlide dataset={dataset} />
      </div>
      <div className="section-padding-model">
        <Container maxWidth="lg">
          {/* <SectionHeader title={pageInfo.title[languageStore]} description="" /> */}

          <div className="flex flex-col space-x-0 lg:flex-row space-y-10 lg:space-y-0 lg:space-x-16">
            <div className="flex-1">
              {route.pathname === "/news" && (
                <div className="h-12 flex items-center mb-10">
                  <input
                    placeholder={`${pageInfo.search[languageStore]}...`}
                    className="h-full pl-3 outline-none w-full border focus:border-web-yellow"
                    onChange={searchHandler}
                  />
                  <div className="w-16 h-full bg-gray-400 hover:bg-web-yellow text-white cursor-pointer flex items-center justify-center transition-colors duration-150">
                    <FaSearch fontSize={20} />
                  </div>
                </div>
              )}

              {newsData.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 sm:gap-5">
                  {newsData.map((item, index) => (
                    <div key={index} className={`flex flex-col border-b pb-10`}>
                      <div
                        className={`relative shrink-0 w-full group shadow-sm mb-5 h-56`}
                      >
                        <img
                          src={
                            item.imagesInfo.length > 0
                              ? item.imagesInfo[0].url
                              : "/images/logo/ddc-logo-small.png"
                          }
                          alt=""
                          className="absolute inset-0 w-full h-full object-cover z-0 rounded-sm"
                        />
                        <div className="news-image-overlay-hover z-10 group-hover:h-full group-hover:opacity-40 translate-y-1" />

                        <div className="news-image-overlay-hover-text z-20 flex justify-center items-center group-hover:h-full group-hover:opacity-100 translate-y-1">
                          <a
                            href={`/news/${item.id}`}
                            className="px-5 py-2 w-fit rounded-sm cursor-pointer text-white border hover:bg-web-yellow hover:border-web-yellow flex items-center"
                          >
                            <BsSearch fontSize={18} />
                          </a>
                        </div>
                      </div>
                      <div className="mb-2">
                        <a
                          href={`/news/${item.id}`}
                          className=" text-neutral-600 font-bold hover:text-web-blue"
                        >
                          {item.data[languageStore].title.length > 60
                            ? item.data[languageStore].title.substring(0, 60) +
                              "..."
                            : item.data[languageStore].title}
                        </a>
                      </div>
                      <div className="flex justify-between items-end text-neutral-400 text-sm ">
                        <p className="h-full">
                          {new Date(item.data.postedDate).toLocaleDateString(
                            "en-GB"
                          )}
                        </p>
                        <a href={`/news/${item.id}`}>
                          <p className="italic font-semibold text-web-blue">
                            {readMore[languageStore] + "..."}
                          </p>
                        </a>
                      </div>
                    </div>
                  ))}
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

              <div className="flex justify-center mt-10 mb-5">
                {/* <Stack spacing={2}>
                  <Pagination
                    count={nPage}
                    page={page}
                    shape="rounded"
                    onChange={handleChange}
                  />
                </Stack> */}
              </div>

              <div className="flex justify-end">
                <SocialShare url={fullURL} />
              </div>
            </div>
            <EmbededFacebook />
            {/* <NewsRecentPost /> */}
          </div>
        </Container>
      </div>
    </div>
  );
}

export default News;
