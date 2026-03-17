import { Grid } from "@mui/material";
import React from "react";

import Header from "../../../common/Header";
import HeaderSec from "../../../common/HeaderSec";
import FooterAndPopup from "../../../common/Footer";
import TrustStrip from "./TrustStrip";
import OrganicaBestSellers from "./OrganicaBestSellers";
import OrganicaCommunity from "./OrganicaCommunity";
import OrganicaContent from "./OrganicaContent";
import OrganicaExtras from "./OrganicaExtras";

const OrganicaHomePage = () => {
  return (
    <Grid>
      <Header />
      <HeaderSec />
      <TrustStrip />
      <OrganicaBestSellers />
      <OrganicaExtras />
      <OrganicaContent />
      <OrganicaCommunity />
      <FooterAndPopup />
    </Grid>
  );
};

export default OrganicaHomePage;
