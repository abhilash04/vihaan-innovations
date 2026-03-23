import { Grid } from "@mui/material";
import React from "react";
import Header from "../../../common/Header";
import HeaderSec from "../../../common/HeaderSec";
import FooterAndPopup from "../../../common/Footer";
import VideoSection from "./VideoSection";
import OnlineStore from "./OnlineStore";
import MultiVendorMobileApps from "./MultiVendorMobileApps";
import MultiVendorComputer from "./MultiVendorComputer";
import MultiVendorAdmin from "./MultiVendorAdminPanel";
import PhoneCarousel from "./PhoneCarousel";
import TechnologyStack from "./TechnologyStack";
import OrderCycleMultiVendor from "./OrderCycleMultiVendor";
import ReviewsMultiVendor from "./ReviewsMultiVendor";

const EcommerceMultiVendorHomepage = () => {
  return (
    <Grid>
      {/* <Header /> */}
      <HeaderSec />
      <VideoSection />
      <MultiVendorMobileApps />
      <MultiVendorComputer />
      <MultiVendorAdmin />
      <OrderCycleMultiVendor />
      <PhoneCarousel />
      <TechnologyStack />
      <OnlineStore />
      <ReviewsMultiVendor />
      <FooterAndPopup />
    </Grid>
  );
};

export default EcommerceMultiVendorHomepage;
