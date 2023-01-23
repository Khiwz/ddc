import React from "react";
import { BsFillCheckSquareFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import { listWelcomeSection } from "../../constant/list-info";
import Link from "next/link";

const pageInfo = {
  buttonGetInTouch: {
    lao: "ລາຍລະອຽດເພີ່ມເຕີມ",
    english: "Get In Touch",
    chiness: "保持聯繫",
  },
};

function Welcome({ welcomeData }) {
  const { languageStore } = useSelector((state) => state.language);

  return (
    <div className="flex flex-col lg:flex-row bg-gray-100">
      <div className="flex-1">
        <img
          src="/images/welcome/image-1.jpg"
          alt="welcome"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1">
        <div className="mt-10 mx-5 lg:ml-16 2xl:mr-48 lg:mr-16 md:mr-12 sm:mr-18">
          <h1 className="text-3xl font-semibold text-gray-600 mb-5">
            {welcomeData.title[languageStore]}
          </h1>
          <div className="w-16 border-b-2 border-b-yellow-400 mb-5" />
          <p className="text-lg text-gray-500 mb-5">
            {welcomeData.description[languageStore]}
          </p>
          <div className="mb-8">
            {welcomeData.subDescription[languageStore].map((item, index) => (
              <div key={index} className="flex space-x-2">
                <BsFillCheckSquareFill
                  fontSize={16}
                  className="text-yellow-500 translate-y-1"
                />
                <p className="flex-1 text-gray-500 text-lg">{item}</p>
              </div>
            ))}
          </div>
          <div className="mb-10">
            <Link href="/about/mission-vision">
              <a className="button-style-classic">
                {pageInfo.buttonGetInTouch[languageStore]}
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
