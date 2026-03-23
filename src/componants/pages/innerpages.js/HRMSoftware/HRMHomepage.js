import React from "react";
import { Box } from "@mui/material";
import Header from "../../../common/Header";
import HeaderSec from "../../../common/HeaderSec";
import FooterAndPopup from "../../../common/Footer";
import HRMBanner from "./HRMBanner";
import HRMAbout from "./HRMAbout";
import HRMFeatures from "./HRMFeatures";
import HRMProcess from "./HRMProcess";
import HRMWhyUs from "./HRMWhyUs";
import HRMTestimonials from "./HRMTestimonials";
import HRMFAQ from "./HRMFAQ";
import HRMCTA from "./HRMCTA";

const HRMHomepage = () => {
  return (
    <Box sx={{ width: "100%", overflowX: "hidden" }}>
      {/* <Header /> */}
      <HeaderSec />
      <Box>
        <HRMBanner />
        <HRMAbout />
        <HRMFeatures />
        <HRMProcess />
        <HRMWhyUs />

        <HRMFAQ />
        <HRMCTA />
        <HRMTestimonials />
      </Box>
      <FooterAndPopup />
    </Box>
  );
};

export default HRMHomepage;
