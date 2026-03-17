import { Grid } from "@mui/material";
import React from "react";
import Header from "../../common/Header";
import Footer from "../../common/Footer";
import HeaderSec from "../../common/HeaderSec";

import PrivacyPolicySection from "../sections/PrivacyPolicySection";

const PrivacyPolicy = () => {
  return (
    <Grid>
      <Header />
      <HeaderSec />
      <PrivacyPolicySection />
      <Footer />
    </Grid>
  );
};

export default PrivacyPolicy;
