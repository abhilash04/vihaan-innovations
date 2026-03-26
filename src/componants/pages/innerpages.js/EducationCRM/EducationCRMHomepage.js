import React from "react";
import { Box } from "@mui/material";
import Header from "../../../common/Header";
import HeaderSec from "../../../common/HeaderSec";
import FooterAndPopup from "../../../common/Footer";
import EducationBanner from "./EducationBanner";
import EducationWhoThisIsFor from "./EducationWhoThisIsFor";
import EducationProblem from "./EducationProblem";
import EducationFeatures from "./EducationFeatures";
import EducationPlatformModules from "./EducationPlatformModules";
import EducationVisualFlow from "./EducationVisualFlow";
import EducationDeliveryProcess from "./EducationDeliveryProcess";
import EducationTechnology from "./EducationTechnology";
import EducationProvenImpact from "./EducationProvenImpact";
import EducationWhyUs from "./EducationWhyUs";
import EducationCTA from "./EducationCTA";

const EducationCRMHomepage = () => {
  return (
    <Box sx={{ minHeight: "100vh" }}>
      {/* <Header /> */}
      <HeaderSec />
      <Box sx={{ pt: 10 }}> {/* Offset for Navbar */}
        <EducationBanner />
        <EducationWhoThisIsFor />
        <EducationProblem />
        <EducationFeatures />
        <EducationPlatformModules />
        <EducationVisualFlow />
        <EducationDeliveryProcess />
        <EducationTechnology />
        <EducationProvenImpact />


        <EducationWhyUs />
        <EducationCTA />
      </Box>
      <FooterAndPopup />
    </Box>
  );
};

export default EducationCRMHomepage;
