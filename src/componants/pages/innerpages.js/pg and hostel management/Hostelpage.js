import { Grid } from "@mui/material";
import React from "react";

import Header from "../../../common/Header";
import HeaderSec from "../../../common/HeaderSec";
import FooterAndPopup from "../../../common/Footer";
import RentManagementLayout from "./RentManagementLayout";
import PgFaqs from "./PgFaqs";
import SoftwareSolution from "./SoftwareSolution";
import Booking from "./Booking";
import Benefits from "./Benefits";
import AutomationComparisonTable from "./AutomationComparisonTable";
import ManagementFeatures from "./ManagementFeatures";
import PgBanner from "./PgBanner";

const Hostelpage = () => {
  return (
    <Grid>
      {/* <Header /> */}
      <HeaderSec />
      <PgBanner />
      <ManagementFeatures />
      <AutomationComparisonTable />
      <Benefits />
      <Booking />
      <SoftwareSolution />
      <RentManagementLayout />
      <PgFaqs />
      <FooterAndPopup />
    </Grid>
  );
};

export default Hostelpage;
