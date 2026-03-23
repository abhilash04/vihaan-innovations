import { Grid } from "@mui/material";
import React from "react";

import Header from "../../../common/Header";
import HeaderSec from "../../../common/HeaderSec";
import FooterAndPopup from "../../../common/Footer";
import ContactSection from "./ContactSection";

const ContactHomepage = () => {
  return (
    <Grid>
      {/* <Header /> */}
      <HeaderSec />
      <ContactSection />
      <FooterAndPopup />
    </Grid>
  );
};

export default ContactHomepage;
