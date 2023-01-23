import { Collapse, Container } from "@mui/material";
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
];

function BusinessProjectDetailSmartCity({ expanded, data }) {
  return (
    <div className="text-neutral-600">
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        {/* <SectionHeader title={data?.title} description="" color="" /> */}
        <div className="mb-10">
          {data?.description?.map((item, index) => (
            <div key={index}>
              {item.indicator === "title" ? (
                <p className="font-bold mt-2">{item.desc}</p>
              ) : item.indicator === "sub" ? (
                <div>
                  {item.desc.map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <BsChevronDoubleRight className="text-web-yellow w-3 h-3" />
                      <p className="flex-1 text-sm">{item}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="mb-4 text-sm">{item.desc}</div>
              )}
            </div>
          ))}
        </div>

        {data?.listItem?.map((item, index) => (
          <Container
            key={index}
            maxWidth="lg"
            style={{ padding: "0px", margin: "0px" }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              <div className="w-full text-sm">
                <div className="flex-1 overflow-hidden">
                  <p className="text-xs lg:text-lg font-bold uppercase">
                    {item.name}
                  </p>
                  <div className="mb-3">
                    <div className="h-1 w-20 bg-web-yellow" />
                  </div>
                  <ImageGallery
                    items={item.images.map((img) => ({
                      original: img,
                      thumbnail: img,
                    }))}
                  />
                </div>
              </div>

              <div className="">
                <iframe
                  width="100%"
                  height="100%"
                  src={item.video.src}
                  title={item.video.title}
                  allowFullScreen
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
              </div>
            </div>
          </Container>
        ))}
      </Collapse>
    </div>
  );
}

export default BusinessProjectDetailSmartCity;
