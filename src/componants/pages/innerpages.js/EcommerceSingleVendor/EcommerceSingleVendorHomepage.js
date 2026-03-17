import { Grid } from "@mui/material";
import React from "react";
import Header from "../../../common/Header";
import HeaderSec from "../../../common/HeaderSec";
import FooterAndPopup from "../../../common/Footer";
import EcommerceBanner from "./EcommerceBanner";
import LogosRow from "./LogosRow";
import EcommerceDashboard from "./EcommerceDashboard";
import CuttingEdgeSolutions from "./CuttingEdgeSolutions";
import DayFreeTrial from "./DayFreeTrial";
import ComparisonTable from "./ComparisonTable";
import OrderCycle from "./OrderCycle";
import SeeHowWeWork from "./SeeHowWeWork";
import PricingCards from "./PricingCards";
import BuildWebsites from "./BuildWebsites";
import WeHaveDone from "./WeHaveDone";
import EcommerceSingleRenderAboutUs from "./EcommerceSingleRenderAboutUs";

const EcommerceSingleVendorHomepage = () => {
  return (
    <Grid>
      {/* <Header /> */}
      <HeaderSec />
      <EcommerceBanner />
      <EcommerceSingleRenderAboutUs />
      <EcommerceDashboard />
      <CuttingEdgeSolutions />
      <OrderCycle />
      <ComparisonTable />
      <SeeHowWeWork />
      <PricingCards />
      <LogosRow />
      <WeHaveDone />
      <FooterAndPopup />
    </Grid>
  );
};

export default EcommerceSingleVendorHomepage;
