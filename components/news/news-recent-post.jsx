import React from "react";
import { useSelector } from "react-redux";
import { listNewsData } from "../../constant/language-news";
import { fnFirstImage } from "../../util/function";

const pageInfo = {
  resentPost: {
    lao: "ຂ່າວລ້າສຸດ",
    english: "Recent Post",
    chiness: "最近貼文",
  },
  date: { lao: "ລົງວັນທີ: ", english: "Date posted: ", chiness: "發布日期: " },
  relatedNews: {
    lao: "ຂ່າວສານທີ່ກ່ຽວຂ້ອງ",
    english: "Related News",
    chiness: "相關新聞",
  },
};

function NewsRecentPost() {
  const { languageStore } = useSelector((state) => state.language);
  return (
    <div className="w-80">
      <div className="sticky top-20 left-0">
        <div>
          <p className="uppercase text-xl">
            {pageInfo.resentPost[languageStore]}
          </p>
          <div className="h-1 w-20 bg-web-yellow" />
          {listNewsData.map((item, index) => {
            if (index <= 4) {
              return (
                <div
                  key={index}
                  className="border-b flex space-x-3 py-5 hover:shadow-sm hover:bg-gray-50/50 cursor-pointer transition-all duration-200"
                >
                  <img
                    src={fnFirstImage(item.imageId)}
                    alt=""
                    className="w-24 h-20"
                  />
                  <div>
                    <p className="text-neutral-700">
                      {item.title[languageStore]}
                    </p>
                    <p className="text-neutral-400">{item.date}</p>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default NewsRecentPost;
