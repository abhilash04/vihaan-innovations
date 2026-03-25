import React from "react";
import { Box } from "@mui/material";
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
import Header from "../../../../common/HeaderSec";
import FooterAndPopup from "../../../../common/Footer";

const ServicePage = ({ serviceData = {} }) => {
  return (
    <Box sx={{ bgcolor: "#ffffff", color: "#1e293b", overflow: "hidden", fontFamily: "Inter, sans-serif" }}>
      <Header />
      <ServiceHero data={serviceData.hero} />
      <ServicesOverview data={serviceData.overview} />
      <DetailedServices data={serviceData.detailed} />
      <WhyChooseUs data={serviceData.whyChooseUs} />
      <ProcessSection data={serviceData.process} />
      <IndustryExpertise data={serviceData.industry} />
      <AwardsSection data={serviceData.awards} />
      <TechStack data={serviceData.techStack} />
      <TestimonialsSection data={serviceData.testimonials} />

      <CTASection data={serviceData.cta} />
      <FooterAndPopup />
    </Box>
  );
};

export default ServicePage;
