import React, { useEffect, useState, useRef } from "react";
import { Box } from "@mui/material";
import { motion, useScroll, useSpring } from "framer-motion";
import HeaderSec from "../../../common/HeaderSec";
import Footer from "../../../common/Footer";
import Hero from "./Hero";
import QuickNav from "./QuickNav";
import SEO from "./SEO";
import SEM from "./SEM";
import SMM from "./SMM";
import ContentMarketing from "./ContentMarketing";
import EmailMarketing from "./EmailMarketing";
import MarketingAnalytics from "./MarketingAnalytics";
import VideoMarketing from "./VideoMarketing";
import InfluencerMarketing from "./InfluencerMarketing";
import TechStack from "./TechStack";
import ResultsImpact from "./ResultsImpact";
import MarketingProcess from "./MarketingProcess";
import WhyChooseVihaan from "./WhyChooseVihaan";
import SEOKeywords from "./SEOKeywords";
import LocationLinks from "../LocationPageLayout/LocationLinks";
import { serviceTypes } from "../LocationPageLayout/locationData";

const DigitalMarketing = () => {
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
          background: "linear-gradient(90deg, #2563eb, #f59e0b)",
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

        <section id="seo" data-section-id="1">
          <SEO />
        </section>

        <section id="sem" data-section-id="2">
          <SEM />
        </section>

        <section id="smm" data-section-id="3">
          <SMM />
        </section>

        <section id="content-marketing" data-section-id="4">
          <ContentMarketing />
        </section>

        <section id="email-marketing" data-section-id="5">
          <EmailMarketing />
        </section>

        <section id="analytics" data-section-id="6">
          <MarketingAnalytics />
        </section>

        <section id="video-marketing" data-section-id="7">
          <VideoMarketing />
        </section>

        <section id="influencer" data-section-id="8">
          <InfluencerMarketing />
        </section>

        <section data-section-id="9">
          <TechStack />
        </section>

        <section data-section-id="10">
          <ResultsImpact />
        </section>

        <section data-section-id="11">
          <MarketingProcess />
        </section>

        <section data-section-id="12">
          <WhyChooseVihaan />
        </section>

        <section data-section-id="13">
          <SEOKeywords />
        </section>
      </Box>

      <LocationLinks serviceType={serviceTypes.DIGITAL_MARKETING} />
      <Footer />
    </Box>
  );
};

export default DigitalMarketing;
