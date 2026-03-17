import { Grid } from "@mui/material";
import React from "react";

import Header from "../../../common/Header";
import HeaderSec from "../../../common/HeaderSec";
import FooterAndPopup from "../../../common/Footer";
import FoodOrdering from "./FoodOrdering";
import CustomersWant from "./CustomersWant";
import ThirdPartyApps from "./ThirdPartyApps";
import FoodBookingPhoneCarousel from "./FoodBookingPhoneCarousel";
import FoodDiscovery from "./FoodDiscovery";
import FoodBanner from "./FoodBanner";
import FoodReviews from "./FoodReviews";

const FoodBookingHomepage = () => {
  return (
    <Grid>
      <Header />
      <HeaderSec />
      <FoodBanner />
      <FoodOrdering />
      <CustomersWant />
      <ThirdPartyApps />
      <FoodBookingPhoneCarousel />
      <FoodDiscovery />
      <FoodReviews />
      <FooterAndPopup />
    </Grid>
  );
};

export default FoodBookingHomepage;
