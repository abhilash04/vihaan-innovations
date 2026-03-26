import { Grid, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import HeaderSec from "../common/HeaderSec";
import Footer from "../common/Footer";
import ITServiceSection from "./ItServiceSection";
import ScrollFormComponent from "./ScrollFormComponent";
import TipsAndTricks from "./TipsAndTricks";
import SwitchingCards from "./SwitchingCards";
import WorkingRoadmap from "./WorkingRoadmap";
import SpecializingSection from "./SpecializingSection";
import OurExpert from "./OurExpert";
import MobileHomePage from "./MobileHomePage";

const HomePage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  if (isMobile) {
    return <MobileHomePage />;
  }

  return (
    <Grid>
      {/* <Header /> */}
      <HeaderSec />
      <ScrollFormComponent />
      <ITServiceSection />
      <SpecializingSection />
      <WorkingRoadmap />
      <SwitchingCards />
      <TipsAndTricks />
      <OurExpert />

      <Footer />
    </Grid>
  );
};

export default HomePage;
