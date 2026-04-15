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
import { Code, Laptop, Brain, Smartphone, BugPlay, Database, Monitor, Workflow } from "lucide-react";

const SoftwareTrainingHub = () => {
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
    badge: "Next-Gen Engineering Academy",
    title: "Professional Software Engineering & Coding Hub",
    subtitle: "In the algorithm-driven world, code is the bedrock of innovation. We build software engineers who don't just 'make it work', but architect scalable, high-performance systems using industry-standard engineering principles.",
    primaryCTA: "Enroll in Next Batch",
    secondaryCTA: "View Tech Stack",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2344&auto=format&fit=crop",
    themeColor: "#0f172a", // Darker blue/grey for engineering focus
    stats: [
      { label: "Placement Support", value: "100%" },
      { label: "Hands-on Projects", value: "25+" },
      { label: "Expert Mentors", value: "12+" }
    ],
    navigationItems: [
      { id: 1, name: "Web Dev", icon: Monitor, href: "web-dev" },
      { id: 2, name: "Java Eng", icon: Laptop, href: "java" },
      { id: 3, name: "Python/AI", icon: Brain, href: "python" },
      { id: 4, name: "App Dev", icon: Smartphone, href: "mobile" },
      { id: 5, name: "QA/Testing", icon: BugPlay, href: "qa" },
      { id: 6, name: "Backend/DB", icon: Database, href: "backend" },
    ],
    categories: [
      {
        title: "Full-Stack React Development",
        desc: "Master the MERN ecosystem. Learn to build high-performance, dynamic web applications, from responsive frontends to robust Node.js backends with MongoDB.",
        icon: Code,
        href: "/training/web-designing-react"
      },
      {
        title: "Enterprise Java Engineering",
        desc: "The backbone of big tech. Deep dive into Core Java, Spring Boot, and Microservices architecture to build secure, scalable enterprise-grade systems.",
        icon: Laptop,
        href: "/training/java"
      },
      {
        title: "Python & AI Engineering",
        desc: "Build the future. From automation scripts and data analysis to complex machine learning models, master Python - the most versatile language today.",
        icon: Brain,
        href: "/training/python"
      },
      {
        title: "Mobile App Development",
        desc: "Build for the pocket. Master cross-platform and native development for Android and iOS using Flutter and React Native for seamless user experiences.",
        icon: Smartphone,
        href: "/training/android-and-ios"
      },
      {
        title: "Software QA & Automation",
        desc: "Quality is non-negotiable. Learn manual and automated testing frameworks like Selenium and Jest to ensure software reliability and excellence.",
        icon: BugPlay,
        href: "/training/manual-and-automation-testing"
      },
      {
        title: "DevOps & Cloud Systems",
        desc: "Modern infrastructure. Learn CI/CD pipelines, Docker, Kubernetes, and AWS to manage the lifecycle and deployment of modern tech applications.",
        icon: Workflow,
        href: "/training/java"
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
          background: `linear-gradient(90deg, ${hubData.themeColor}, #3b82f6)`,
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
            title="Industry-Aligned Tech Engineering Stack"
            subtitle="Choose a specialized learning track built for the needs of today's tech industry, curated by developers with architectural experience."
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

      <LocationLinks serviceType={serviceTypes.WEBSITE_DEVELOPMENT} isTraining={true} />
      <Footer />
    </Box>
  );
};

export default SoftwareTrainingHub;
