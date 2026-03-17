import { Grid } from "@mui/material";
import React from "react";

import Header from "../../../common/Header";
import HeaderSec from "../../../common/HeaderSec";
import FooterAndPopup from "../../../common/Footer";
import SolutionSection from "./SolutionSection";
import InnerPageBanner from "../../sections/InnerPageBanner";

const PortfolioHomepage = () => {
  return (
    <Grid>
      <Header />
      <HeaderSec />
      <InnerPageBanner />
      <SolutionSection />
      <FooterAndPopup />
    </Grid>
  );
};

export default PortfolioHomepage;
