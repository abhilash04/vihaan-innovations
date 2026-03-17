import React from "react";
import { Box } from "@mui/material";
import HeaderSec from "../common/HeaderSec";
import Footer from "../common/Footer";
import MobileScrollForm from "./MobileScrollForm";
// To keep things simple and safe, we will render the sections in a stacked, single column for mobile
import MobileITService from "./MobileITService";
import SpecializingSection from "./SpecializingSection"; 
import MobileWorkingRoadmap from "./MobileWorkingRoadmap";
import SwitchingCards from "./SwitchingCards";
import TipsAndTricks from "./TipsAndTricks";
import OurExpert from "./OurExpert";

const MobileHomePage = () => {
  return (
    <Box sx={{ width: "100%", overflowX: "hidden" }}>
      <HeaderSec />
      <Box sx={{ mt: 8.5 }}>
        <MobileScrollForm />
        <MobileITService />
        <SpecializingSection sx={{ px: 2 }} />
        <MobileWorkingRoadmap />
        <SwitchingCards />
        <TipsAndTricks />
        <OurExpert />
      </Box>
      <Footer />
    </Box>
  );
};

export default MobileHomePage;
