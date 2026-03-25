import React from "react";
import { Box } from "@mui/material";
import Header from "../../../common/Header";
import HeaderSec from "../../../common/HeaderSec";
import FooterAndPopup from "../../../common/Footer";
import LMSBanner from "./LMSBanner";
import LMSWhoThisIsFor from "./LMSWhoThisIsFor";
import LMSProblem from "./LMSProblem";
import LMSFeatures from "./LMSFeatures";
import LMSPlatformModules from "./LMSPlatformModules";
import LMSLearningJourney from "./LMSLearningJourney";
import LMSEngagement from "./LMSEngagement";
import LMSDeliveryProcess from "./LMSDeliveryProcess";
import LMSImpact from "./LMSImpact";
import LMSCorporate from "./LMSCorporate";
import LMSMonetisation from "./LMSMonetisation";
import LMSIntegrations from "./LMSIntegrations";
import LMSWhyUs from "./LMSWhyUs";
import LMSTestimonial from "./LMSTestimonial";
import LMSFAQ from "./LMSFAQ";
import LMSCTA from "./LMSCTA";

const LMSHomepage = () => {
  return (
    <Box sx={{ minHeight: "100vh" }}>
      {/* <Header /> */}
      <HeaderSec />
      <Box sx={{ pt: 10 }}>
        <LMSBanner />
        <LMSWhoThisIsFor />
        <LMSProblem />
        <LMSFeatures />
        <LMSPlatformModules />
        <LMSLearningJourney />
        <LMSEngagement />
        <LMSDeliveryProcess />
        <LMSImpact />
        <LMSCorporate />
        <LMSMonetisation />
        <LMSIntegrations />
        <LMSWhyUs />
        <LMSCTA />
        <LMSFAQ />
        <LMSTestimonial />
      </Box>
      <FooterAndPopup />
    </Box>
  );
};

export default LMSHomepage;
