import React from "react";
import { Box } from "@mui/material";
import ServiceNavbar from "./ServiceNavbar";
import ServiceHero from "./ServiceHero";
import ServicesOverview from "./ServicesOverview";
import DetailedServices from "./DetailedServices";
import WhyChooseUs from "./WhyChooseUs";
import ProcessSection from "./ProcessSection";
import TechStack from "./TechStack";
import TestimonialsSection from "./TestimonialsSection";
import IndustryExpertise from "./IndustryExpertise";
import AwardsSection from "./AwardsSection";
import CTASection from "./CTASection";
import ServiceFooter from "./ServiceFooter";

const ServicePage = () => {
  return (
    <Box sx={{ bgcolor: "#0a1628", color: "#ffffff", overflow: "hidden", fontFamily: "Inter, sans-serif" }}>
      <ServiceNavbar />
      <ServiceHero />
      <ServicesOverview />
      <DetailedServices />
      <WhyChooseUs />
      <ProcessSection />
      <TechStack />
      <TestimonialsSection />
      <IndustryExpertise />
      <AwardsSection />
      <CTASection />
      <ServiceFooter />
    </Box>
  );
};

export default ServicePage;
