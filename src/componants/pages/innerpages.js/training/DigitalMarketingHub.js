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
import { Search, Share2, MonitorPlay, Mail, FileText, Target, BarChart3, Users } from "lucide-react";

const DigitalMarketingHub = () => {
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
    badge: "Next-Gen Marketing Academy",
    title: "Advanced Digital Marketing & SEO Strategy Academy",
    subtitle: "In a digital-first economy, attention is the scarcest resource. Our academy builds marketing architects who don't just 'post content', but engineer high-conversion ecosystems through search rankings, data science, and consumer psychology.",
    primaryCTA: "Apply for Next Enrollment",
    secondaryCTA: "Download Brochure",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    themeColor: "#2563eb",
    stats: [
      { label: "Placement Goal", value: "100%" },
      { label: "Live Ad Budgets", value: "₹5Cr+" },
      { label: "Mentors", value: "15+" }
    ],
    navigationItems: [
      { id: 1, name: "SEO", icon: Search, href: "seo" },
      { id: 2, name: "SEM/PPC", icon: MonitorPlay, href: "sem" },
      { id: 3, name: "Social Media", icon: Share2, href: "smm" },
      { id: 4, name: "Content", icon: FileText, href: "content" },
      { id: 5, name: "Email", icon: Mail, href: "email" },
      { id: 6, name: "Analytics", icon: BarChart3, href: "analytics" },
    ],
    categories: [
      {
        title: "Search Engine Optimization (SEO)",
        desc: "Dominate Google's first page. Master technical SEO, semantic content strategies, and high-authority link building to drive consistent organic traffic.",
        icon: Search,
        href: "/training/seo"
      },
      {
        title: "Performance Marketing (SEM)",
        desc: "Master the auction. Learn to build ROI-driven campaigns on Google Ads and Meta, focusing on bidding algorithms, creative testing, and scaling.",
        icon: MonitorPlay,
        href: "/training/sem-google-ads"
      },
      {
        title: "Social Media Ecosystems (SMM)",
        desc: "Beyond engagement. Build community-centric brands and master platform-specific algorithms that convert followers into brand advocates.",
        icon: Share2,
        href: "/training/social-media-marketing"
      },
      {
        title: "Content & Copywriting Strategy",
        desc: "The heartbeat of growth. Master storytelling and the science of persuasion to build content funnels that guide prospects from discovery to closing.",
        icon: FileText,
        href: "/training/content-marketing"
      },
      {
        title: "Marketing Data & Analytics",
        desc: "Marketing is a science. Learn GA4, conversion tracking, and multi-touch attribution to identify exactly where your growth is coming from.",
        icon: Target,
        href: "/services/digital-marketing"
      },
      {
        title: "Automation & CRM Strategy",
        desc: "Own your audience. Learn to build high-converting email sequences and automated flows that nurture leads 24/7 while you sleep.",
        icon: Mail,
        href: "/training/email-marketing"
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
          background: `linear-gradient(90deg, ${hubData.themeColor}, #8b5cf6)`,
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
            title="Comprehensive Marketing Vertical Stack"
            subtitle="Diverse specializations designed to take you from a curious learner to a certified industry strategist who understands the big picture."
            categories={hubData.categories}
            themeColor={hubData.themeColor}
          />
        </section>

        <section id="seo" data-section-id="2">
            <HubProcess themeColor={hubData.themeColor} />
        </section>

        <section data-section-id="3">
           <ResultsImpact />
        </section>

        <section data-section-id="4">
           <WhyChooseVihaan />
        </section>
      </Box>

      <LocationLinks serviceType={serviceTypes.DIGITAL_MARKETING} isTraining={true} />
      <Footer />
    </Box>
  );
};

export default DigitalMarketingHub;
