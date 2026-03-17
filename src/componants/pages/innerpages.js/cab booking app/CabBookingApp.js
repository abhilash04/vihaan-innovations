import { Grid } from "@mui/material";
import React from "react";

import CarAnimationBanner from "./CarAnimationBanner";
import Header from "../../../common/Header";
import HeaderSec from "../../../common/HeaderSec";
import FooterAndPopup from "../../../common/Footer";
import GetTheApp from "./GetTheApp";
import InfoSection from "./InfoSection";
import AppScreenshotSection from "./AppScreenshotSection";
import AIIntegration from "./AIIntegration";

const CabBookingApp = () => {
  return (
    <Grid>
      <Header />
      <HeaderSec />
      <CarAnimationBanner />
      <GetTheApp />
      <AppScreenshotSection />
      {/* <AIIntegration /> */}
      <InfoSection />
      <FooterAndPopup />
    </Grid>
  );
};

export default CabBookingApp;
