import { Collapse, Container, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import BusinessExpansion from "../model/business-expansion";
import BusinessProjectDetail from "../model/business-project-detail";
import BusinessSubCard from "../model/business-sub-card";
import NavbarSubmenuBusiness from "../model/navbar-submenu-business";
import BannerSubpage from "../sections/banner-subpage";

function EnergyBusiness({ dataset, menus }) {
  const [expanded, setExpanded] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState("water-energy");

  return (
    <div>
      {/* <div className="about-ddc-background-image h-500" /> */}
      <BannerSubpage />
      <NavbarSubmenuBusiness menuData={menus?.menu[2]} />

      {/* main content */}
      <div className="section-padding-model">
        <Container maxWidth="lg">
          {/* <div className="flex space-x-5">
            {dataset?.map((item, index) => (
              <BusinessSubCard
                key={index}
                item={item}
                expanded={expanded}
                setExpanded={setExpanded}
                setSelectedIndex={setSelectedIndex}
                setSelectedItem={setSelectedItem}
              />
            ))}
          </div> */}

          <div className="mb-10">
            <BusinessProjectDetail
              expanded={expanded}
              data={dataset.find(
                (item) =>
                  item.index.toLowerCase() === selectedIndex?.toLowerCase()
              )}
            />
          </div>
        </Container>
      </div>
    </div>
  );
}

export default EnergyBusiness;
