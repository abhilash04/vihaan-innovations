import React from "react";
import { Box } from "@mui/material";
import Header from "../../../common/Header";
import HeaderSec from "../../../common/HeaderSec";
import FooterAndPopup from "../../../common/Footer";
import ChatbotBanner from "./ChatbotBanner";
import ChatbotUseCases from "./ChatbotUseCases";
import ChatbotCapabilities from "./ChatbotCapabilities";
import ChatbotHowItWorks from "./ChatbotHowItWorks";
import ChatbotImpact from "./ChatbotImpact";
import ChatbotWhyUs from "./ChatbotWhyUs";

const ChatbotHomepage = () => {
  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#060d1a" }}>
      <Header />
      <HeaderSec />
      <Box sx={{ pt: 10 }}>
        <ChatbotBanner />
        <ChatbotUseCases />
        <ChatbotCapabilities />
        <ChatbotHowItWorks />
        <ChatbotImpact />
        <ChatbotWhyUs />
      </Box>
      <FooterAndPopup />
    </Box>
  );
};

export default ChatbotHomepage;
