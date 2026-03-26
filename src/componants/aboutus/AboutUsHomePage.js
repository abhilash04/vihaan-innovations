import React, { useEffect } from "react";
import { Box } from "@mui/material";

import HeaderSec from "../common/HeaderSec";
import Footer from "../common/Footer";
import Banner from "./Banner";
import WhoWeAre from "./WhoWeAre";
import MissionVision from "./MissionVision";
import OurExpertise from "./OurExpertise";
import WhyChooseUs from "./WhyChooseUs";
import OurProcess from "./OurProcess";
import CTA from "./CTA";

export default function AboutUsHomePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box sx={{ fontFamily: "'Inter', sans-serif", overflowX: "hidden" }}>
      <HeaderSec />
      <Box>
        <Banner />
        <WhoWeAre />
        <MissionVision />
        <OurExpertise />
        <WhyChooseUs />
        <OurProcess />
        <CTA />
      </Box>
      <Footer />
    </Box>
  );
}