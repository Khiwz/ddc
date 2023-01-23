import { Container } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import NavbarSubmenuBusiness from "../model/navbar-submenu-business";
import BannerSubpage from "../sections/banner-subpage";
import OurServices from "../sections/our-services";

function Business({ menus, businessData }) {
  const { languageStore } = useSelector((state) => state.language);

  return (
    <div>
      {/* <div className="about-ddc-background-image h-500" /> */}
      <BannerSubpage />
      <NavbarSubmenuBusiness menuData={menus[languageStore]?.menu[2]} />

      {/* main content */}
      <OurServices businessData={businessData} />
      {/* <Container maxWidth="xl">
      </Container> */}
    </div>
  );
}

export default Business;
