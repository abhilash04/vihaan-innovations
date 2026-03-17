import React from "react";
import { Box } from "@mui/material";
import Header from "../../../common/Header";
import HeaderSec from "../../../common/HeaderSec";
import FooterAndPopup from "../../../common/Footer";
import RealEstateBanner from "./RealEstateBanner";
import RealEstateProblem from "./RealEstateProblem";
import RealEstateSolution from "./RealEstateSolution";
import RealEstatePlatformModules from "./RealEstatePlatformModules";
import RealEstateProcess from "./RealEstateProcess";
import RealEstateTechnology from "./RealEstateTechnology";
import RealEstateProvenImpact from "./RealEstateProvenImpact";
import RealEstateWhyUs from "./RealEstateWhyUs";
import RealEstateCTA from "./RealEstateCTA";

const RealEstateCRMHomepage = () => {
  return (
    <Box sx={{ bgcolor: "#F8FAFC", minHeight: "100vh" }}>
      {/* <Header /> */}
      <HeaderSec />
      <Box sx={{ pt: 10 }}> {/* Offset for Navbar */}
        <RealEstateBanner />
        <RealEstateProblem />
        <RealEstateSolution />
        <RealEstatePlatformModules />
        <RealEstateProcess />
        <RealEstateTechnology />
        <RealEstateProvenImpact />
        <RealEstateWhyUs />
        <RealEstateCTA />
      </Box>
      <FooterAndPopup />
    </Box>
  );
};

export default RealEstateCRMHomepage;
