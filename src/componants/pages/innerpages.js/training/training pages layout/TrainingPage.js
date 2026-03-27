import React from "react";
import { Box } from "@mui/material";
import TrainingHero from "./TrainingHero";
import AboutProgram from "./AboutProgram";
import CoursesSection from "./CoursesSection";
import CurriculumSection from "./CurriculumSection";
import FeaturesSection from "./FeaturesSection";
import TrainingTestimonials from "./TrainingTestimonials";
import TrainingCTA from "./TrainingCTA";
import Footer from "../../../../common/Footer";
import Header from "../../../../common/HeaderSec";
import TrainingTools from "./TrainingTools";
import WhoCanApply from "./WhoCanApply";

const TrainingPage = ({ trainingData = {} }) => {
  return (
    <Box sx={{ bgcolor: "#f8fafc", color: "#1e293b", overflow: "hidden", fontFamily: "Inter, sans-serif" }}>
      <Header />
      <TrainingHero data={trainingData.hero} />
      <AboutProgram data={trainingData.about} />
      <CoursesSection data={trainingData.courses} />
      <WhoCanApply data={{ ...trainingData.whoCanApply, audience: trainingData.audience }} />
      <CurriculumSection data={trainingData.curriculum} />
      <FeaturesSection data={trainingData.features} />
      <TrainingTools data={trainingData.tools} />
      <TrainingTestimonials data={trainingData.testimonials} />
      <TrainingCTA data={trainingData.cta} />
      <Footer />
    </Box>
  );
};

export default TrainingPage;
