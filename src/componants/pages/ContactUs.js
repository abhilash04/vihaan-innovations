import React, { useEffect } from "react";
import { Box } from "@mui/material";
import HeaderSec from "../common/HeaderSec";
import Footer from "../common/Footer";
import ContactSection from "./innerpages.js/contact page/ContactSection";

const ContactUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box sx={{ overflowX: "hidden" }}>
      <HeaderSec />
      <ContactSection />
      <Footer />
    </Box>
  );
};

export default ContactUs;

