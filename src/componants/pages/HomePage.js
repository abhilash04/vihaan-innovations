import { Grid, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import { motion } from "framer-motion";
import HeaderSec from "../common/HeaderSec";
import Footer from "../common/Footer";
import ITServiceSection from "./ItServiceSection";
import ScrollFormComponent from "./ScrollFormComponent";
import TipsAndTricks from "./TipsAndTricks";
import SwitchingCards from "./SwitchingCards";
import WorkingRoadmap from "./WorkingRoadmap";
import SpecializingSection from "./SpecializingSection";
import OurExpert from "./OurExpert";
import MobileHomePage from "./MobileHomePage";

const HomePage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  if (isMobile) {
    return <MobileHomePage />;
  }

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <Grid>
      <HeaderSec />

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={sectionVariants}>
        <ScrollFormComponent />
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={sectionVariants}>
        <ITServiceSection />
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={sectionVariants}>
        <SpecializingSection />
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={sectionVariants}>
        <WorkingRoadmap />
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={sectionVariants}>
        <SwitchingCards />
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={sectionVariants}>
        <TipsAndTricks />
      </motion.div>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={sectionVariants}>
        <OurExpert />
      </motion.div>

      <Footer />
    </Grid>
  );
};


export default HomePage;
