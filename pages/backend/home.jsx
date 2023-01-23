import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";
import { useState } from "react";
import BackendBanner from "../../components/backend/banner";
import MiniDrawer from "../../components/backend/drawer";
import { fnGetBannerDocs } from "../../util/banner-firebase";

function BackendHomePage({ bannerData }) {
  const [selectedSection, setSelectedSection] = useState("");
  return (
    <MiniDrawer>
      <FormControl sx={{ m: 1, minWidth: 150 }} size="small">
        <InputLabel>Select Section</InputLabel>
        <Select
          value={selectedSection}
          label="Select Section"
          onChange={(event) => setSelectedSection(event.target.value)}
        >
          <MenuItem value="banner">Banner</MenuItem>
          <MenuItem value="lao">Lao</MenuItem>
          <MenuItem value="english">English</MenuItem>
          <MenuItem value="chiness">Chinese</MenuItem>
        </Select>
      </FormControl>
      {selectedSection === "banner" && <BackendBanner data={bannerData} />}
    </MiniDrawer>
  );
}

export default BackendHomePage;

export async function getStaticProps(context) {
  const bannerData = await fnGetBannerDocs();
  return {
    props: { bannerData },
  };
}
