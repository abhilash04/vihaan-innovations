import React, { useEffect, useState, useRef } from "react";
import { Box } from "@mui/material";
import { motion, useScroll, useSpring } from "framer-motion";
import HeaderSec from "../../../common/HeaderSec";
import Footer from "../../../common/Footer";
import SoftwareHero from "./SoftwareHero";
import CategorySynergy from "./CategorySynergy";

// Reusing optimized components from the development portal
import WebDevelopment from "../AnimationAndServicesDevelopment/WebDevelopment";
import MobileApps from "../AnimationAndServicesDevelopment/MobileApps";
import CustomApps from "../AnimationAndServicesDevelopment/CustomApps";
import CloudDevelopment from "../AnimationAndServicesDevelopment/CloudDevelopment";
import TechStack from "../AnimationAndServicesDevelopment/TechStack";
import DevelopmentProcess from "../AnimationAndServicesDevelopment/DevelopmentProcess";
import WhyChooseVihaan from "../AnimationAndServicesDevelopment/WhyChooseVihaan";
import ResultsImpact from "../AnimationAndServicesDevelopment/ResultsImpact";

import LocationLinks from "../LocationPageLayout/LocationLinks";
import { serviceTypes } from "../LocationPageLayout/locationData";

const SoftwareDevelopmentHub = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

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
          background: "linear-gradient(90deg, #3b82f6, #8b5cf6)",
          transformOrigin: "0%",
          zIndex: 2000,
        }}
      />

      <Box ref={containerRef}>
        <section>
          <SoftwareHero />
        </section>

        <section id="synergy">
          <CategorySynergy />
        </section>

        <Box sx={{ bgcolor: "white", py: 10 }}>
            <WebDevelopment />
        </Box>

        <Box sx={{ bgcolor: "#f1f5f9", py: 10 }}>
            <MobileApps />
        </Box>

        <Box sx={{ bgcolor: "white", py: 10 }}>
            <CustomApps />
        </Box>

        <Box sx={{ bgcolor: "#f1f5f9", py: 10 }}>
            <CloudDevelopment />
        </Box>

        <section sx={{ bgcolor: "white" }}>
          <TechStack />
        </section>

        <section>
          <DevelopmentProcess />
        </section>

        <section>
          <WhyChooseVihaan />
        </section>

        <section>
          <ResultsImpact />
        </section>
      </Box>

      <LocationLinks serviceType={serviceTypes.WEBSITE_DEVELOPMENT} />
      <Footer />
    </Box>
  );
};

export default SoftwareDevelopmentHub;
