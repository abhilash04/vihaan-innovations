import React from "react";
import { Box } from "@mui/material";
import Header from "../../../common/Header";
import HeaderSec from "../../../common/HeaderSec";
import FooterAndPopup from "../../../common/Footer";
import HotelBanner from "./HotelBanner";
import HotelWhoThisIsFor from "./HotelWhoThisIsFor";
import HotelProblem from "./HotelProblem";
import HotelFeatures from "./HotelFeatures";
import HotelPlatformModules from "./HotelPlatformModules";
import HotelChannelManager from "./HotelChannelManager";
import HotelGuestJourney from "./HotelGuestJourney";
import HotelDirectVsOTA from "./HotelDirectVsOTA";
import HotelDeliveryProcess from "./HotelDeliveryProcess";
import HotelOperationsStaff from "./HotelOperationsStaff";
import HotelRevenueManagement from "./HotelRevenueManagement";
import HotelImpact from "./HotelImpact";
import HotelGuestCRM from "./HotelGuestCRM";
import HotelIntegrations from "./HotelIntegrations";
import HotelWhyUs from "./HotelWhyUs";
import HotelTestimonial from "./HotelTestimonial";
import HotelCTA from "./HotelCTA";

const HotelHomepage = () => {
  return (
    <Box sx={{ minHeight: "100vh" }}>
      {/* <Header /> */}
      <HeaderSec />
      <Box sx={{ pt: 10 }}>
        <HotelBanner />
        <HotelWhoThisIsFor />
        <HotelProblem />
        <HotelFeatures />
        <HotelPlatformModules />
        <HotelChannelManager />
        <HotelGuestJourney />
        <HotelDirectVsOTA />
        <HotelDeliveryProcess />
        <HotelOperationsStaff />
        <HotelRevenueManagement />
        <HotelImpact />
        <HotelGuestCRM />
        <HotelIntegrations />
        <HotelWhyUs />
        <HotelCTA />
        <HotelTestimonial />
      </Box>
      <FooterAndPopup />
    </Box>
  );
};

export default HotelHomepage;
