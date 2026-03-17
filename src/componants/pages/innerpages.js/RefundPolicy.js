import { Grid } from "@mui/material";
import React from "react";
import Header from "../../common/Header";
import Footer from "../../common/Footer";
import HeaderSec from "../../common/HeaderSec";

import RefundPolicySection from "../sections/RefundPolicySection";

const RefundPolicy = () => {
  return (
    <Grid>
      <Header />
      <HeaderSec />
      <RefundPolicySection />

      <Footer />
    </Grid>
  );
};

export default RefundPolicy;
