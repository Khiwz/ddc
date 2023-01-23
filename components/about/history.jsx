import React, { useEffect, useState } from "react";
import NavbarSubmenu from "../model/navbar-submenu-about";
import { Container } from "@mui/material";
import { useSelector } from "react-redux";
import SectionHeader from "../model/section-header";
import { BsFillCaretDownSquareFill } from "react-icons/bs";
import BannerSubpage from "../sections/banner-subpage";

function History({ path, dataset, menus }) {
  const { languageStore } = useSelector((state) => state.language);
  const [isMobile, setIsMobile] = useState();

  useEffect(() => {
    // check screen width
    const onResize = () => {
      setIsMobile(window.innerWidth);
    };
    onResize();
    window.addEventListener("resize", onResize);
  }, [isMobile]);

  return (
    <div className="">
      {/* <div className="about-ddc-background-image h-500" /> */}
      <BannerSubpage />
      <NavbarSubmenu path={path} aboutMenuList={menus[languageStore]} />

      <div className="section-padding-model">
        <Container maxWidth="lg">
          <SectionHeader
            title={dataset[languageStore].titleHistory}
            description=""
          />
          <div className="relative mb-20">
            <div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/3 w-1 h-full bg-neutral-100 z-10" />
            <div className="w-full">
              {dataset[languageStore].stage.map((item, index) => {
                if (index % 2 === 0) {
                  return (
                    <div
                      key={index}
                      className="flex flex-col md:flex-row mb-24"
                    >
                      <div className="flex-1">
                        <p className="text-end uppercase text-lg text-web-yellow font-bold mb-3">
                          {dataset[languageStore].stage[index].year}
                        </p>
                        <div className="w-full h-60 flex justify-end">
                          <img
                            src={dataset[languageStore].stage[index].image}
                            alt=""
                            className="h-full object-contain"
                          />
                        </div>
                      </div>

                      {/* <div className="w-5 h-5 rounded-full bg-web-yellow z-20 mt-2 mx-10"></div> */}
                      <div className="hidden md:block w-5 h-5 z-20 mt-1 mx-10">
                        <BsFillCaretDownSquareFill
                          fontSize={20}
                          className="w-full h-full text-web-yellow"
                        />
                      </div>

                      <div className="flex-1">
                        <p className="text-start uppercase text-lg text-neutral-700 font-bold mb-3 mt-5 md:mt-0">
                          {dataset[languageStore].stage[index].title}
                        </p>
                        <p className="text-neutral-700 text-justify text-sm md:text-base">
                          {dataset[languageStore].stage[index].description}
                        </p>
                      </div>
                    </div>
                  );
                } else {
                  return (
                    <div
                      key={index}
                      className="flex flex-col md:flex-row mb-24"
                    >
                      <div className="md:hidden flex-1">
                        <p className="text-start uppercase text-xl text-web-yellow font-bold mb-3">
                          {dataset[languageStore].stage[index].year}
                        </p>
                        <div className="w-full h-60 flex justify-end">
                          <img
                            src={dataset[languageStore].stage[index].image}
                            alt=""
                            className="h-full object-contain"
                          />
                        </div>
                      </div>

                      <div className="flex-1">
                        <p className="text-end uppercase text-lg text-neutral-700 font-bold mb-3 mt-5 md:mt-0">
                          {dataset[languageStore].stage[index].title}
                        </p>
                        <p className="text-neutral-700 text-justify text-sm md:text-base">
                          {dataset[languageStore].stage[index].description}
                        </p>
                      </div>

                      {/* <div className="w-5 h-5 rounded-full bg-web-yellow z-20 mt-2 mx-10"></div> */}
                      <div className="hidden md:block w-5 h-5 z-20 mt-1 mx-10">
                        <BsFillCaretDownSquareFill
                          fontSize={20}
                          className="w-full h-full text-web-yellow"
                        />
                      </div>

                      <div className="hidden md:block flex-1">
                        <p className="text-start uppercase text-xl text-web-yellow font-bold mb-3">
                          {dataset[languageStore].stage[index].year}
                        </p>
                        <div className="w-full h-60 flex">
                          <img
                            src={dataset[languageStore].stage[index].image}
                            alt=""
                            className="h-full object-contain"
                          />
                        </div>
                      </div>
                    </div>
                  );
                }
              })}
            </div>
          </div>

          <div className="flex justify-center">
            <iframe
              width={isMobile ? "100%" : "80%"}
              height="480px"
              src="https://www.youtube.com/embed/RAqPktefQbU"
              title="Duangchaleun Group"
              // frameborder="1"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              // allowfullscreen
            ></iframe>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default History;
