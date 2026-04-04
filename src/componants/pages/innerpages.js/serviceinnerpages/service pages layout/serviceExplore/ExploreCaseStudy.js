import React from "react";
import { Box, Typography, Container, Paper, Button } from "@mui/material";
import { styled } from "@mui/system";
import { motion } from "framer-motion";

const SectionWrapper = styled(Box)({
  paddingTop: "80px",
  paddingBottom: "60px",
  backgroundColor: "#f0f9ff",
  position: "relative",
  overflow: "hidden",
});

const CaseStudyCard = styled(motion.div)({
  padding: "64px",
  borderRadius: "40px",
  backgroundColor: "#ffffff",
  border: "1px solid #e2e8f0",
  boxShadow: "0 20px 50px rgba(37, 99, 235, 0.05)",
  textAlign: "left",
  overflow: "hidden",
  position: "relative",
});

const ExploreCaseStudy = ({ data }) => {
  if (!data) return null;
  const {
    subtitle = "◆ Proven Results",
    title = "Real Businesses. Real Growth.",
    description = "",
    featured = {}
  } = data;

  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  };

  return (
    <SectionWrapper>
      {/* Decorative flair */}
      <Box sx={{ position: "absolute", bottom: -100, left: -100, width: "300px", height: "300px", bgcolor: "#bae6fd", opacity: 0.3, filter: "blur(100px)", borderRadius: "50%" }} />

      <Container maxWidth="lg">
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          sx={{ textAlign: "center", mb: 10 }}
        >
          <Typography sx={{ color: "#2563eb", fontWeight: 800, fontSize: "14px", mb: 1.5, textTransform: "uppercase", letterSpacing: "2px", fontFamily: "Inter, sans-serif" }}>
            {subtitle}
          </Typography>
          <Typography variant="h3" sx={{ fontWeight: 900, color: "#0f172a", mb: 2, fontFamily: "Urbanist, sans-serif", letterSpacing: "-1px", fontSize: { xs: "32px", md: "48px" } }}>
            {title}
          </Typography>
          <Typography sx={{ color: "#475569", maxWidth: "700px", mx: "auto", fontSize: "18px", lineHeight: 1.7, fontWeight: 500 }}>
            {description}
          </Typography>
        </Box>

        {featured && (
          <CaseStudyCard
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <Box
              component={motion.div}
              variants={itemVariants}
              sx={{ bgcolor: "rgba(37, 99, 235, 0.1)", color: "#2563eb", px: 2.5, py: 1, borderRadius: "10px", display: "inline-block", mb: 4, fontSize: "13px", fontWeight: 900, letterSpacing: "1px", textTransform: "uppercase", fontFamily: "Inter, sans-serif" }}
            >
              {featured.badge}
            </Box>
            <Typography
              component={motion.h2}
              variants={itemVariants}
              variant="h4"
              sx={{ fontWeight: 900, color: "#0f172a", mb: 3.5, lineHeight: 1.2, fontFamily: "Urbanist, sans-serif", letterSpacing: "-1px", fontSize: { xs: "28px", md: "42px" } }}
            >
              {featured.title}
            </Typography>
            <Typography
              component={motion.p}
              variants={itemVariants}
              sx={{ color: "#475569", fontSize: "18px", mb: 6, lineHeight: 1.8, maxWidth: "850px", fontWeight: 500 }}
            >
              {featured.text}
            </Typography>
            <Button
              component={motion.button}
              variants={itemVariants}
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(37, 99, 235, 0.2)" }}
              whileTap={{ scale: 0.95 }}
              variant="contained"
              sx={{
                bgcolor: "#2563eb",
                color: "white",
                px: 6,
                py: 2.2,
                borderRadius: "16px",
                textTransform: "none",
                fontWeight: 900,
                fontSize: "18px",
                fontFamily: "Urbanist, sans-serif",
                boxShadow: "0 10px 25px rgba(37, 99, 235, 0.15)",
                "&:hover": { bgcolor: "#1d4ed8" }
              }}
            >
              {featured.cta}
            </Button>
          </CaseStudyCard>
        )}
      </Container>
    </SectionWrapper>
  );
};

export default ExploreCaseStudy;
