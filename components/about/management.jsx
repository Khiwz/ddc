import React from "react";
import SectionHeader from "../model/section-header";
import NavbarSubmenu from "../model/navbar-submenu-about";
import { Container } from "@mui/material";
import { useSelector } from "react-redux";
import BannerSubpage from "../sections/banner-subpage";

function Management({ path, dataset, menus }) {
  const { languageStore } = useSelector((state) => state.language);

  return (
    <div>
      {/* <div className="about-ddc-background-image h-500" /> */}
      <BannerSubpage />
      <NavbarSubmenu path={path} aboutMenuList={menus[languageStore]} />

      <div className="section-padding-model">
        <Container maxWidth="lg">
          <SectionHeader
            title={dataset[languageStore].titleManagement.title}
            description=""
          />

          {/* <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center lg:items-end">
            <div className="flex-1 flex flex-col items-center justify-end">
              <div className="w-36 sm:w-40">
                <img
                  src="/images/management/khamphaiy.jpg"
                  alt=""
                  className="w-full object-contain"
                />
              </div>
              {languageStore !== "lao" && (
                <div className="flex flex-col items-center text-sm uppercase">
                  <p className="text-neutral-700 font-semibold">
                    {dataset[languageStore].president.name}
                  </p>
                  <p className="text-neutral-700 text-xs">
                    {dataset[languageStore].president.position}
                  </p>
                </div>
              )}
            </div>

            <div className="flex flex-col lg:flex-row">
              <div className="flex flex-row justify-around items-end space-x-8 sm:mr-8">
                <div className="flex flex-col items-center">
                  <div className="w-28 sm:w-32 md:w-36">
                    <img
                      src="/images/management/axing.jpg"
                      alt=""
                      className="w-full object-contain"
                    />
                  </div>
                  {languageStore !== "lao" && (
                    <div className="flex flex-col items-center text-xxs md:text-sm uppercase">
                      <p className="text-neutral-700 font-semibold">
                        {dataset[languageStore].vicePresident1.name}
                      </p>
                      <p className="text-neutral-700 text-xxs">
                        {dataset[languageStore].vicePresident1.position}
                      </p>
                    </div>
                  )}
                </div>

                <div className="flex flex-col items-center">
                  <div className="w-28 sm:w-32 md:w-36">
                    <img
                      src="/images/management/khamming.jpg"
                      alt=""
                      className="w-full object-contain"
                    />
                  </div>
                  {languageStore !== "lao" && (
                    <div className="flex flex-col items-center text-xxs md:text-sm uppercase">
                      <p className="text-neutral-700 font-semibold">
                        {dataset[languageStore].vicePresident2.name}
                      </p>
                      <p className="text-neutral-700 text-xxs">
                        {dataset[languageStore].vicePresident2.position}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex flex-row justify-around items-end space-x-8">
                <div className="flex flex-col items-center">
                  <div className="w-28 sm:w-32 md:w-36">
                    <img
                      src="/images/management/soulixay.jpeg"
                      alt=""
                      className="w-full object-contain"
                    />
                  </div>
                  {languageStore !== "lao" && (
                    <div className="flex flex-col items-center text-xxs md:text-sm uppercase">
                      <p className="text-neutral-700 font-semibold">
                        {dataset[languageStore].vicePresident3.name}
                      </p>
                      <p className="text-neutral-700 text-xxs">
                        {dataset[languageStore].vicePresident3.position}
                      </p>
                    </div>
                  )}
                </div>

                <div className="flex flex-col items-center">
                  <div className="w-28 sm:w-32 md:w-36">
                    <img
                      src="/images/management/khampien.jpg"
                      alt=""
                      className="w-full object-contain"
                    />
                  </div>
                  {languageStore !== "lao" && (
                    <div className="flex flex-col items-center text-xxs md:text-sm uppercase">
                      <p className="text-neutral-700 font-semibold">
                        {dataset[languageStore].vicePresident4.name}
                      </p>
                      <p className="text-neutral-700 text-xxs">
                        {dataset[languageStore].vicePresident4.position}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div> */}

          <div className="flex flex-col items-center justify-center mb-3">
            <div className="w-44">
              <img
                src="/images/management/khampaiy.png"
                alt=""
                className="w-full object-contain"
              />
            </div>
            <div className="flex flex-col items-center text-sm uppercase">
              <p className="text-neutral-700 font-semibold">
                {dataset[languageStore].president.name}
              </p>
              <p className="text-neutral-700 text-xs">
                {dataset[languageStore].president.position}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 md:grid-cols-5 sm:gap-4">
            <div className="flex flex-col items-center">
              <div className="w-36">
                <img
                  src="/images/management/axing.png"
                  alt=""
                  className="w-full object-contain"
                />
              </div>
              <div className="flex flex-col items-center text-xs lg:text-sm uppercase">
                <p className="text-neutral-700 font-semibold">
                  {dataset[languageStore].vicePresident1.name}
                </p>
                <p className="text-neutral-700 capitalize lg:text-xs">
                  {dataset[languageStore].vicePresident1.position}
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-36">
                <img
                  src="/images/management/khamming.png"
                  alt=""
                  className="w-full object-contain"
                />
              </div>
              <div className="flex flex-col items-center text-xs lg:text-sm uppercase">
                <p className="text-neutral-700 font-semibold">
                  {dataset[languageStore].vicePresident2.name}
                </p>
                <p className="text-neutral-700 capitalize lg:text-xs">
                  {dataset[languageStore].vicePresident2.position}
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-36">
                <img
                  src="/images/management/soulixay.png"
                  alt=""
                  className="w-full object-contain"
                />
              </div>
              <div className="flex flex-col items-center text-xs lg:text-sm uppercase">
                <p className="text-neutral-700 font-semibold">
                  {dataset[languageStore].vicePresident3.name}
                </p>
                <p className="text-neutral-700 capitalize lg:text-xs">
                  {dataset[languageStore].vicePresident3.position}
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-36">
                <img
                  src="/images/management/khampien.png"
                  alt=""
                  className="w-full object-contain"
                />
              </div>
              <div className="flex flex-col items-center text-xs lg:text-sm uppercase">
                <p className="text-neutral-700 font-semibold">
                  {dataset[languageStore].vicePresident4.name}
                </p>
                <p className="text-neutral-700 capitalize lg:text-xs">
                  {dataset[languageStore].vicePresident4.position}
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-36">
                <img
                  src="/images/management/khoun.png"
                  alt=""
                  className="w-full object-contain"
                />
              </div>
              <div className="flex flex-col items-center text-xs lg:text-sm uppercase">
                <p className="text-neutral-700 font-semibold">
                  {dataset[languageStore].vicePresident5.name}
                </p>
                <p className="text-neutral-700 capitalize lg:text-xs">
                  {dataset[languageStore].vicePresident5.position}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Management;
