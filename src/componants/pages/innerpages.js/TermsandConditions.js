import { Grid } from "@mui/material";
import React from "react";
import Header from "../../common/Header";
import Footer from "../../common/Footer";
import HeaderSec from "../../common/HeaderSec";
import TermsandConditionSection from "../sections/TermsandConditionSection";

const TermsandConditions = () => {
  return (
    <Grid>
      {/* <Header /> */}
      <HeaderSec />
      <TermsandConditionSection />
      <Footer />
    </Grid>
  );
};

export default TermsandConditions;
