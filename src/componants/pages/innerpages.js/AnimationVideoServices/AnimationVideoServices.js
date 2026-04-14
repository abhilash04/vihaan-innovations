import React, { useEffect, useState, useRef } from "react";
import { Box } from "@mui/material";
import { motion, useScroll, useSpring } from "framer-motion";
import HeaderSec from "../../../common/HeaderSec";
import Footer from "../../../common/Footer";
import Hero from "./Hero";
import QuickNav from "./QuickNav";
import { BrandDesign, TwoDAnimation } from "./SubSections";
import { ThreeDAnimation, MotionGraphics, ExplainerVideos } from "./SubSectionsMore";
import { WhiteboardAnimation, VideoEditingVFX, AnimationProcess, WhyChooseUs } from "./FinalSections";
import { TechStack, ResultsImpact } from "./SharedSections";
import LocationLinks from "../LocationPageLayout/LocationLinks";
import { serviceTypes } from "../LocationPageLayout/locationData";

const AnimationVideoServices = () => {
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
          background: "linear-gradient(90deg, #7c3aed, #ec4899)",
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

        <section id="brand-design" data-section-id="1">
          <BrandDesign />
        </section>

        <section id="2d-animation" data-section-id="2">
          <TwoDAnimation />
        </section>

        <section id="3d-animation" data-section-id="3">
          <ThreeDAnimation />
        </section>

        <section id="motion-graphics" data-section-id="4">
          <MotionGraphics />
        </section>

        <section id="explainer-videos" data-section-id="5">
          <ExplainerVideos />
        </section>

        <section id="whiteboard" data-section-id="6">
          <WhiteboardAnimation />
        </section>

        <section id="video-editing" data-section-id="7">
          <VideoEditingVFX />
        </section>

        <section data-section-id="8">
          <TechStack />
        </section>

        <section id="results" data-section-id="8">
          <ResultsImpact />
        </section>

        <section data-section-id="9">
          <AnimationProcess />
        </section>

        <section data-section-id="10">
          <WhyChooseUs />
        </section>
      </Box>

      <LocationLinks serviceType={serviceTypes.ANIMATION_VIDEO} />
      <Footer />
    </Box>
  );
};

export default AnimationVideoServices;
