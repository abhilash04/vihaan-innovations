import React from "react";
import { Box } from "@mui/material";
import Header from "../../../common/Header";
import HeaderSec from "../../../common/HeaderSec";
import FooterAndPopup from "../../../common/Footer";
import ListingBanner from "./ListingBanner";
import ListingWhoThisIsFor from "./ListingWhoThisIsFor";
import ListingProblem from "./ListingProblem";
import ListingFeatures from "./ListingFeatures";
import ListingPlatformModules from "./ListingPlatformModules";
import ListingPlatformJourney from "./ListingPlatformJourney";
import ListingSearchDiscovery from "./ListingSearchDiscovery";
import ListingMonetization from "./ListingMonetization";
import ListingSEO from "./ListingSEO";
import ListingMultiVertical from "./ListingMultiVertical";
import ListingDeliveryProcess from "./ListingDeliveryProcess";
import ListingIntegrations from "./ListingIntegrations";
import ListingWhyUs from "./ListingWhyUs";
import ListingFAQ from "./ListingFAQ";
import ListingCTA from "./ListingCTA";

const ListingHomepage = () => {
  return (
    <Box sx={{ minHeight: "100vh" }}>
      {/* <Header /> */}
      <HeaderSec />
      <Box sx={{ pt: 10 }}>
        <ListingBanner />
        <ListingWhoThisIsFor />
        <ListingProblem />
        <ListingFeatures />
        <ListingPlatformModules />
        <ListingPlatformJourney />
        <ListingSearchDiscovery />
        <ListingMonetization />
        <ListingSEO />
        <ListingMultiVertical />
        <ListingDeliveryProcess />
        <ListingIntegrations />
        <ListingWhyUs />
        <ListingFAQ />
        <ListingCTA />
      </Box>
      <FooterAndPopup />
    </Box>
  );
};

export default ListingHomepage;
