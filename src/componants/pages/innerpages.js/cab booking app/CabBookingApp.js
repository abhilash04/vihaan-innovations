import { Grid } from "@mui/material";
import React from "react";

import CarAnimationBanner from "./CarAnimationBanner";
import HeaderSec from "../../../common/HeaderSec";
import FooterAndPopup from "../../../common/Footer";

// Section Components
import HowItWorks from "./HowItWorks";
import KeyFeatures from "./KeyFeatures";
import AppShowcase from "./AppShowcase";
import WhyChooseUs from "./WhyChooseUs";
import CarCategories from "./CarCategories";
import Testimonials from "./Testimonials";
import StatsBand from "./StatsBand";
import BusinessRentals from "./BusinessRentals";
import FAQSection from "./FAQSection";
import FinalCTA from "./FinalCTA";
import CARCTA from "./CARCTA";

const CabBookingApp = () => {
  return (
    <Grid sx={{ background: "#ffffff" }}> {/* Global light theme alignment */}
      <HeaderSec />
      <CarAnimationBanner />

      {/* Sections 3-12 */}
      <HowItWorks />
      <KeyFeatures />
      <AppShowcase />
      <WhyChooseUs />
      <CarCategories />
      <Testimonials />
      <StatsBand />
      <BusinessRentals />
      <FAQSection />
      <FinalCTA />
      <CARCTA />
      <FooterAndPopup />
    </Grid>
  );
};

export default CabBookingApp;

