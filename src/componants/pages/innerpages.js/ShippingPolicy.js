import { Grid } from "@mui/material";
import React from "react";
import Header from "../../common/Header";
import Footer from "../../common/Footer";
import HeaderSec from "../../common/HeaderSec";
import ShippingPolicySection from "../sections/ShippingPolicySection";

const ShippingPolicy = () => {
  return (
    <Grid>
      {/* <Header /> */}
      <HeaderSec />
      <ShippingPolicySection />
      <Footer />
    </Grid>
  );
};

export default ShippingPolicy;
