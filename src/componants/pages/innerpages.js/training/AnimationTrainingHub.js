import React, { useEffect, useState, useRef } from "react";
import { Box } from "@mui/material";
import { motion, useScroll, useSpring } from "framer-motion";
import HeaderSec from "../../../common/HeaderSec";
import Footer from "../../../common/Footer";
import HubHero from "./HubComponents/HubHero";
import HubQuickNav from "./HubComponents/HubQuickNav";
import HubSynergy from "./HubComponents/HubSynergy";
import HubProcess from "./HubComponents/HubProcess";
import WhyChooseVihaan from "../DigitalMarketing/WhyChooseVihaan";
import ResultsImpact from "../DigitalMarketing/ResultsImpact";
import LocationLinks from "../LocationPageLayout/LocationLinks";
import { serviceTypes } from "../LocationPageLayout/locationData";
import { Palette, Clapperboard, Film, Video, Layers, Scissors, PenTool, Image } from "lucide-react";

const AnimationTrainingHub = () => {
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

  const hubData = {
    badge: "Next-Gen Creative Academy",
    title: "Advanced Animation, VFX & Visual Arts Masterclass",
    subtitle: "In the era of visual storytelling, creativity is the ultimate competitive advantage. We build digital artists who don't just 'use tools', but master the technical craft and creative science behind world-class animation and visual effects.",
    primaryCTA: "Apply for Masterclass",
    secondaryCTA: "Studio Portfolio",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2340&auto=format&fit=crop",
    themeColor: "#8b5cf6", // Purple for creativity
    stats: [
      { label: "Studio Placements", value: "90%+" },
      { label: "Portfolio Portions", value: "35+" },
      { label: "Industry Awards", value: "10+" }
    ],
    navigationItems: [
      { id: 1, name: "2D/3D Animation", icon: Film, href: "animation" },
      { id: 2, name: "VFX Mastery", icon: Layers, href: "vfx" },
      { id: 3, name: "Video Editing", icon: Scissors, href: "editing" },
      { id: 4, name: "Motion Graphics", icon: PenTool, href: "motion" },
      { id: 5, name: "Graphic Design", icon: Palette, href: "design" },
      { id: 6, name: "Explainer Videos", icon: Clapperboard, href: "explainer" },
    ],
    categories: [
      {
        title: "2D & 3D Character Animation",
        desc: "Master the 12 foundation principles. Learn to create believable movement and soul for characters in both hand-drawn and high-fidelity CGI styles.",
        icon: Film,
        href: "/training/2d-animation"
      },
      {
        title: "Visual Effects (VFX) Mastery",
        desc: "The science of movie magic. Learn compositing, rotoscoping, and high-level CGI integration to create stunning visual sequences.",
        icon: Layers,
        href: "/training/video-editing-and-vfx"
      },
      {
        title: "High-End Video Editing",
        desc: "The art of rhythm and pacing. Master narrative editing, color grading, and sound design to turn raw footage into cinematic experiences.",
        icon: Scissors,
        href: "/training/video-editing-and-vfx"
      },
      {
        title: "Advanced Motion Graphics",
        desc: "Design in movement. Master After Effects to build high-end title sequences, explanatory infographics, and interactive UI motions.",
        icon: PenTool,
        href: "/training/motion-graphics"
      },
      {
        title: "Global Graphic Design",
        desc: "Foundation visual language. Master the principles of typography, layout architecture, and color theory to build iconic brand identities.",
        icon: Palette,
        href: "/training/graphic-designing"
      },
      {
        title: "Explainer Video Production",
        desc: "Storytelling for brands. Learn the end-to-end production of professional explainer videos that simplify complex business concepts.",
        icon: Clapperboard,
        href: "/training/explainer-videos"
      }
    ]
  };

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
          background: `linear-gradient(90deg, ${hubData.themeColor}, #ec4899)`,
          transformOrigin: "0%",
          zIndex: 2000,
        }}
      />

      <Box ref={containerRef}>
        <section data-section-id="0">
          <HubHero {...hubData} />
        </section>

        <HubQuickNav activeSection={activeSection} navigationItems={hubData.navigationItems} themeColor={hubData.themeColor} />

        <section id="synergy" data-section-id="1">
          <HubSynergy 
            title="Industry-Standard Digital Arts Stack"
            subtitle="Learn from master artists and studio veterans through a curriculum identical to professional global studio pipelines."
            categories={hubData.categories}
            themeColor={hubData.themeColor}
          />
        </section>

        <section id="process" data-section-id="2">
            <HubProcess themeColor={hubData.themeColor} />
        </section>

        <section data-section-id="3">
           <ResultsImpact />
        </section>

        <section data-section-id="4">
           <WhyChooseVihaan />
        </section>
      </Box>

      <LocationLinks serviceType={serviceTypes.ANIMATION_VIDEO} isTraining={true} />
      <Footer />
    </Box>
  );
};

export default AnimationTrainingHub;
