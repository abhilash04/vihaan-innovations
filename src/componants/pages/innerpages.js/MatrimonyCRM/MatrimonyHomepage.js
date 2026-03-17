import React from "react";
import { Box } from "@mui/material";
import Header from "../../../common/Header";
import HeaderSec from "../../../common/HeaderSec";
import FooterAndPopup from "../../../common/Footer";
import MatrimonyBanner from "./MatrimonyBanner";
import MatrimonyWhoThisIsFor from "./MatrimonyWhoThisIsFor";
import MatrimonyProblem from "./MatrimonyProblem";
import MatrimonyFeatures from "./MatrimonyFeatures";
import MatrimonyPlatformModules from "./MatrimonyPlatformModules";
import MatrimonyVisualFlow from "./MatrimonyVisualFlow";
import MatrimonyPrivacyTrust from "./MatrimonyPrivacyTrust";
import MatrimonyDeliveryProcess from "./MatrimonyDeliveryProcess";
import MatrimonyProvenImpact from "./MatrimonyProvenImpact";
import MatrimonyIntegrations from "./MatrimonyIntegrations";
import MatrimonyWhyUs from "./MatrimonyWhyUs";
import MatrimonyFAQ from "./MatrimonyFAQ";
import MatrimonyCTA from "./MatrimonyCTA";

const MatrimonyHomepage = () => {
  return (
    <Box sx={{ minHeight: "100vh" }}>
      <Header />
      <HeaderSec />
      <Box sx={{ pt: 10 }}> {/* Offset for Navbar */}
        <MatrimonyBanner />
        <MatrimonyWhoThisIsFor />
        <MatrimonyProblem />
        <MatrimonyFeatures />
        <MatrimonyPlatformModules />
        <MatrimonyVisualFlow />
        <MatrimonyPrivacyTrust />
        <MatrimonyDeliveryProcess />
        <MatrimonyProvenImpact />
        <MatrimonyIntegrations />
        <MatrimonyWhyUs />
        <MatrimonyFAQ />
        <MatrimonyCTA />
      </Box>
      <FooterAndPopup />
    </Box>
  );
};

export default MatrimonyHomepage;
