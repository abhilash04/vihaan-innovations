import React, { useEffect, useState, useRef } from "react";
import { Box, Container, Typography } from "@mui/material";
import { motion, useScroll, useSpring } from "framer-motion";
import Hero from "./Hero";
import QuickNav from "./QuickNav";
import UIUXDesign from "./UIUXDesign";
import WebDevelopment from "./WebDevelopment";
import MobileApps from "./MobileApps";
import CustomApps from "./CustomApps";
import CloudDevelopment from "./CloudDevelopment";
import DevOpsAutomation from "./DevOpsAutomation";
import DataScience from "./DataScience";
import EcommerceDevelopment from "./EcommerceDevelopment";
import AIIntelligence from "./AIIntelligence";
import MaintenanceSupport from "./MaintenanceSupport";
import TechStack from "./TechStack";
import ResultsImpact from "./ResultsImpact";
import DevelopmentProcess from "./DevelopmentProcess";
import WhyChooseVihaan from "./WhyChooseVihaan";
import HeaderSec from "../../../common/HeaderSec";
import Footer from "../../../common/Footer";
import SEOKeywords from "./SEOKeywords";

import LocationLinks from "../LocationPageLayout/LocationLinks";
import { serviceTypes } from "../LocationPageLayout/locationData";

const ServicesDevelopment = () => {
  const [activeSection, setActiveSection] = useState(0);
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    };

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.getAttribute("data-section-id");
          if (sectionId) {
            setActiveSection(parseInt(sectionId));
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    const sections = document.querySelectorAll("[data-section-id]");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <Box sx={{ bgcolor: "#f8fafc", minHeight: "100vh" }}>
      <HeaderSec />

      {/* Progress Bar */}
      <motion.div
        style={{
          scaleX,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "4px",
          background: "linear-gradient(90deg, #2563eb, #06b6d4)",
          transformOrigin: "0%",
          zIndex: 2000,
        }}
      />

      <Box ref={containerRef}>
        <section data-section-id="0">
          <Hero />
        </section>

        <Box sx={{ position: "sticky", top: "70px", zIndex: 1000 }}>
          <QuickNav activeSection={activeSection} />
        </Box>

        <section id="ui-ux" data-section-id="1">
          <UIUXDesign />
        </section>

        <section id="web-dev" data-section-id="2">
          <WebDevelopment />
        </section>

        <section id="mobile-apps" data-section-id="3">
          <MobileApps />
        </section>

        <section id="custom-apps" data-section-id="4">
          <CustomApps />
        </section>

        <section id="cloud-dev" data-section-id="5">
          <CloudDevelopment />
        </section>

        <section id="devops" data-section-id="6">
          <DevOpsAutomation />
        </section>

        <section id="data-science" data-section-id="7">
          <DataScience />
        </section>

        <section id="ecommerce" data-section-id="8">
          <EcommerceDevelopment />
        </section>

        <section id="ai-ml" data-section-id="9">
          <AIIntelligence />
        </section>

        <section id="maintenance" data-section-id="10">
          <MaintenanceSupport />
        </section>

        <section data-section-id="12">
          <ResultsImpact />
        </section>

        <section data-section-id="13">
          <DevelopmentProcess />
        </section>

        <section data-section-id="14">
          <WhyChooseVihaan />
        </section>

        <section data-section-id="15">
          <SEOKeywords />
        </section>
      </Box>

      <LocationLinks serviceType={serviceTypes.WEBSITE_DEVELOPMENT} />
      <Footer />
    </Box>
  );
};


export default ServicesDevelopment;
