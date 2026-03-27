import React, { useEffect } from "react";
import { Box } from "@mui/material";
import HeaderSec from "../../../common/HeaderSec";
import Footer from "../../../common/Footer";
import PortfolioHero from "./PortfolioHero";
import PortfolioShowcase from "./PortfolioShowcase";
import PortfolioTechStack from "./PortfolioTechStack";
import PortfolioTestimonials from "./PortfolioTestimonials";
import PortfolioCTA from "./PortfolioCTA";

const PortfolioHomepage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box sx={{ overflowX: "hidden", background: "#ffffff" }}>
      <HeaderSec />
      <PortfolioHero />
      <PortfolioShowcase />
      <PortfolioTechStack />
      <PortfolioTestimonials />
      <PortfolioCTA />
      <Footer />
    </Box>
  );
};

export default PortfolioHomepage;

