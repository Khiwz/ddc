import { Collapse } from "@mui/material";
import React from "react";
import { BsChevronDoubleRight } from "react-icons/bs";
import SectionHeader from "./section-header";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

import {
  BsCurrencyDollar,
  BsFillPersonFill,
  BsFillPinMapFill,
  BsGearFill,
} from "react-icons/bs";
import { FaCalendarAlt, FaFileContract, FaPeopleArrows } from "react-icons/fa";
import { FiZap } from "react-icons/fi";
import {
  BiAnalyse,
  BiBoltCircle,
  BiCloudLightRain,
  BiShapeTriangle,
} from "react-icons/bi";

const itemDetail = [
  <BsFillPersonFill key="1" className="w-full h-full" />,
  <BsFillPinMapFill key="2" className="w-full h-full" />,
  <BsGearFill key="3" className="w-full h-full" />,
  <BsCurrencyDollar key="4" className="w-full h-full" />,
  <FaCalendarAlt key="5" className="w-full h-full" />,
  <BiAnalyse key="6" className="w-full h-full" />,
  <BiCloudLightRain key="7" className="w-full h-full" />,
  <BiShapeTriangle key="8" className="w-full h-full" />,
  // <FaFileContract key="10" className="w-full h-full" />,
  // <BiBoltCircle key="9" className="w-full h-full" />,
  // <FiZap key="8" className="w-full h-full" />,
  // <FaPeopleArrows key="12" className="w-full h-full" />,
];

function BusinessProjectDetailTimber({ expanded, data }) {
  return (
    <div className="text-neutral-600">
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <SectionHeader title={data?.title} description="" color="" />
        <div className="mb-20">
          {data?.description?.map((item, index) => (
            <div key={index}>
              {item.indicator === "title" ? (
                <p className="text-xl font-bold mt-5">{item.desc}</p>
              ) : item.indicator === "sub" ? (
                <div>
                  {item.desc.map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <BsChevronDoubleRight className="text-web-yellow w-3 h-3" />
                      <p className="flex-1">{item}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="mb-4 text-justify">{item.desc}</div>
              )}
            </div>
          ))}
        </div>

        {data?.listItem?.map((item, index) => (
          <div key={index} className="mb-28">
            <div className="flex w-full mb-10 text-sm space-x-10">
              <div className="w-96">
                <div className="mb-8">
                  <p className="text-3xl font-bold mb-2">{item.name}</p>
                  <div className="h-1 w-20 bg-web-yellow" />
                </div>
                {item?.itemDetail?.map((detail, i) => (
                  <div
                    key={i}
                    className="flex items-start space-x-3 py-3 border-b last:border-b-0"
                  >
                    <div className="w-4 h-4">{itemDetail[i]}</div>
                    <p className="w-32">{detail.title}</p>
                    <p className="flex-1 text-neutral-500">{detail.desc}</p>
                  </div>
                ))}
              </div>
              <div className="flex-1 flex items-end">
                <ImageGallery
                  items={item.images.map((img) => ({
                    original: img,
                    thumbnail: img,
                  }))}
                />
              </div>
            </div>

            {item?.video && (
              <div className="mt-20">
                <iframe
                  width="100%"
                  height="625"
                  src={item.video.src}
                  title={item.video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  // frameborder="0"
                  // allowfullscreen
                ></iframe>
              </div>
            )}
          </div>
        ))}
      </Collapse>
    </div>
  );
}

export default BusinessProjectDetailTimber;
