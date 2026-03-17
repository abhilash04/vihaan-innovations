import { Grid } from "@mui/material";
import React from "react";

import Header from "../../../common/Header";
import HeaderSec from "../../../common/HeaderSec";
import FooterAndPopup from "../../../common/Footer";
import JobSection from "./JobSection";
import InnerPageBanner from "../../sections/InnerPageBanner";
const CareerHomepage = () => {
  return (
    <Grid>
      <Header />
      <HeaderSec />
      <InnerPageBanner />
      <JobSection />
      <FooterAndPopup />
    </Grid>
  );
};

export default CareerHomepage;
