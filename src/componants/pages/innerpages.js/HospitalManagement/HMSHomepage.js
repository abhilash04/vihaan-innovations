import React from "react";
import { Box } from "@mui/material";

import HMSHero from "./HMSHero";
import HMSWhoThisIsFor from "./HMSWhoThisIsFor";
import HMSProblem from "./HMSProblem";
import HMSWhatWeBuild from "./HMSWhatWeBuild";
import HMSModules from "./HMSModules";
import HMSPatientJourney from "./HMSPatientJourney";
import HMSDepartments from "./HMSDepartments";
import HMSCompliance from "./HMSCompliance";
import HMSProcess from "./HMSProcess";
import HMSResults from "./HMSResults";
import HMSIntegrations from "./HMSIntegrations";
import HMSWhyUs from "./HMSWhyUs";
import HMSTestimonialFAQ from "./HMSTestimonialFAQ";
import HMSCTA from "./HMSCTA";
import Header from "../../../common/HeaderSec";
import FooterAndPopup from "../../../common/Footer";

const HMSHomepage = () => {
  return (
    <Box sx={{ bgcolor: "#FFFFFF", overflow: "hidden" }}>
      <Header />
      <Box sx={{ mt: { xs: "64px", md: "80px" } }}>
        <HMSHero />
        <HMSWhoThisIsFor />
        <HMSProblem />
        <HMSWhatWeBuild />
        <HMSModules />
        <HMSPatientJourney />
        <HMSDepartments />
        <HMSCompliance />
        <HMSProcess />
        <HMSResults />
        <HMSIntegrations />
        <HMSWhyUs />

        <HMSTestimonialFAQ />
        <HMSCTA />
      </Box>
      <FooterAndPopup />
    </Box>
  );
};

export default HMSHomepage;
