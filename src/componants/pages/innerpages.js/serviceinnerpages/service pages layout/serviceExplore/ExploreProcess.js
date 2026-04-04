import React from "react";
import { Box, Typography, Container, Grid } from "@mui/material";
import { styled } from "@mui/system";
import { motion } from "framer-motion";

const SectionWrapper = styled(Box)({
  paddingTop: "80px",
  backgroundColor: "#f0f9ff",
  overflow: "hidden",
  position: "relative",
});

const StepCard = styled(motion.div)({
  position: "relative",
  padding: "100px 40px",
  height: "100%",
  zIndex: 1,
  transition: "all 0.3s ease",
  "&:hover": {
    "& .step-number": {
      color: "rgba(5, 41, 119, 0.1)",
      transform: "scale(1.1) rotate(-5deg)",
    }
  }
});

const StepNumber = styled(Typography)({
  fontSize: "140px",
  fontWeight: 900,
  color: "rgba(6, 80, 238, 0.05)",
  position: "absolute",
  top: "-20px",
  left: "20px",
  zIndex: -1,
  lineHeight: 1,
  fontFamily: "Urbanist, sans-serif",
  transition: "all 0.5s ease",
});

const ExploreProcess = ({ data }) => {
  const {
    subtitle = "Our Process",
    title = "How we work for your success.",
    steps = []
  } = data || {};

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <SectionWrapper>
      {/* Decorative flair */}
      <Box sx={{ position: "absolute", top: -50, right: -50, width: "200px", height: "200px", bgcolor: "#bae6fd", opacity: 0.2, filter: "blur(80px)", borderRadius: "50%" }} />

      <Container maxWidth="lg">
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          sx={{ textAlign: "center", mb: 6 }}
        >
          <Typography sx={{ color: "#2563eb", fontWeight: 800, fontSize: "14px", textTransform: "uppercase", letterSpacing: "2px", mb: 1.5, fontFamily: "Inter, sans-serif" }}>
            {subtitle}
          </Typography>
          <Typography variant="h3" sx={{ fontWeight: 900, color: "#0f172a", fontFamily: "Urbanist, sans-serif", letterSpacing: "-1px", fontSize: { xs: "32px", md: "48px" } }}>
            {title}
          </Typography>
        </Box>

        <Grid
          container
          spacing={0}
          component={motion.div}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {steps.map((step, i) => (
            <Grid item xs={12} sm={6} md={3} key={i}>
              <StepCard variants={itemVariants}>
                <StepNumber className="step-number">{(i + 1).toString().padStart(2, "0")}</StepNumber>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2, mt: 4 }}>
                  <Box sx={{ width: "12px", height: "4px", bgcolor: "#2563eb", borderRadius: "2px" }} />
                  <Typography variant="h6" sx={{ fontWeight: 900, color: "#0f172a", fontFamily: "Urbanist, sans-serif", fontSize: "22px", letterSpacing: "-0.5px" }}>
                    {step.title}
                  </Typography>
                </Box>
                <Typography sx={{ color: "#475569", fontSize: "16px", lineHeight: 1.7, fontWeight: 500 }}>
                  {step.desc}
                </Typography>
              </StepCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </SectionWrapper>
  );
};

export default ExploreProcess;
