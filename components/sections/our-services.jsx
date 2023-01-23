import React from "react";
import { Container } from "@mui/material";
import { titleServicesSection } from "../../constant/list-info";
import SectionHeader from "../model/section-header";
import BusinessCard from "../model/business-card";
import { useSelector } from "react-redux";
import { listNavbarData } from "../../constant/language-navbar";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";

const pageInfo = {
  buttonAllBusiness: {
    lao: "ທຸລະກິດ ທັງໝົດ",
    english: "All Business",
    chiness: "所有業務",
  },
};

function OurServices({ businessData }) {
  const { languageStore } = useSelector((state) => state.language);
  const route = useRouter();

  return (
    <div className="section-padding-model">
      <SectionHeader
        title={businessData.title[languageStore]}
        description={businessData.description[languageStore]}
      />

      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        {/* <div className="flex flex-wrap justify-between"> */}
        <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-5 lg:gap-10">
          {listNavbarData[languageStore]?.menu[2]?.subMenu.map(
            (item, index) => (
              <BusinessCard
                key={index}
                image={item.image}
                title={item.text}
                link={item.link}
              />
            )
          )}
        </div>
      </Container>

      <div className="flex justify-center mb-4"></div>

      {route.pathname.toLowerCase() !== "/business" && (
        <div className="text-center">
          <Link href="/business">
            <a className="button-style-classic-small">
              {pageInfo.buttonAllBusiness[languageStore]}
            </a>
          </Link>
        </div>
      )}
    </div>
  );
}

export default OurServices;
