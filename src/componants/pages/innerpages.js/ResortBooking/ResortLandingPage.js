import React from "react";
import { Box } from "@mui/material";
import HeaderSec from "../../../common/HeaderSec";
import FooterAndPopup from "../../../common/Footer";
import ResortHero from "./ResortHero";
import ResortFeatures from "./ResortFeatures";
import ResortComparison from "./ResortComparison";
import ResortProcess from "./ResortProcess";
import ResortBenefits from "./ResortBenefits";
import ResortAudience from "./ResortAudience";
import ResortVisualBreak from "./ResortVisualBreak";
import ResortFAQ from "./ResortFAQ";

const ResortLandingPage = () => {
  return (
    <Box sx={{ bgcolor: "#0A111E", color: "#F5F5F0", overflow: "hidden" }}>
      <HeaderSec />
      <ResortHero />
      <ResortFeatures />
      <ResortComparison />
      <ResortProcess />
      <ResortBenefits />
      <ResortAudience />
      <ResortVisualBreak />
      <ResortFAQ />
      <FooterAndPopup />
    </Box>
  );
};

export default ResortLandingPage;
