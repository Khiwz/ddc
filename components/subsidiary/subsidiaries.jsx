import { Container } from "@mui/material";
import React from "react";
import BannerSubpage from "../sections/banner-subpage";
import Subsidiary from "../sections/subsidiary";

function Subsidiaries() {
  return (
    <div>
      {/* <div className="about-ddc-background-image h-500" /> */}
      <BannerSubpage />
      <div className="bg-gray-50">
        <Container maxWidth="lg">
          <Subsidiary />
        </Container>
      </div>
    </div>
  );
}

export default Subsidiaries;
