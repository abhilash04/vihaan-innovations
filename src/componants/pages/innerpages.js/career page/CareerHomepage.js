import React, { useEffect } from "react";
import { Box } from "@mui/material";
import HeaderSec from "../../../common/HeaderSec";
import Footer from "../../../common/Footer";
import CareerHero from "./CareerHero";
import LifeAtVihan from "./LifeAtVihan";
import CurrentVacancies from "./CurrentVacancies";
import OurBeliefs from "./OurBeliefs";
import CareerCTA from "./CareerCTA";

const CareerHomepage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box sx={{ overflowX: "hidden", background: "#ffffff" }}>
      <HeaderSec />
      <CareerHero />
      <LifeAtVihan />
      <CurrentVacancies />
      <OurBeliefs />
      <CareerCTA />
      <Footer />
    </Box>
  );
};

export default CareerHomepage;

