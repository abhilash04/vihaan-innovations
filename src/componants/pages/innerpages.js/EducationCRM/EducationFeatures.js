import React from "react";
import { Box, Container, Typography, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";
import DomainOutlinedIcon from '@mui/icons-material/DomainOutlined';
import MagnetOutlinedIcon from '@mui/icons-material/InsightsOutlined';
import ShowChartOutlinedIcon from '@mui/icons-material/ShowChartOutlined';
import EventAvailableOutlinedIcon from '@mui/icons-material/EventAvailableOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import InsertChartOutlinedIcon from '@mui/icons-material/InsertChartOutlined';

const FeatureCard = ({ icon: Icon, title, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    style={{ height: '100%' }}
  >
    <Paper
      elevation={0}
      sx={{
        p: 4,
        borderRadius: "24px",
        bgcolor: "#cbf3f0", // Light cyan from the image
        border: "1px solid rgba(0, 180, 216, 0.3)",
        boxShadow: "inset 0 0 20px rgba(255,255,255,0.5), 0 10px 20px rgba(0,0,0,0.05)",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        transition: "all 0.3s ease",
        "&:hover": {
          transform: "translateY(-8px)",
          boxShadow: "inset 0 0 30px rgba(255,255,255,0.8), 0 15px 30px rgba(0, 180, 216, 0.2)",
          bgcolor: "#e0fbfc"
        }
      }}
    >
      <Box 
        sx={{ 
          width: 80, height: 80, 
          borderRadius: "20px",
          bgcolor: "#ffffff",
          display: "flex", justifyContent: "center", alignItems: "center",
          mb: 3,
          color: "#0B2046",
          boxShadow: "0 5px 15px rgba(0,0,0,0.05)"
        }}
      >
        <Icon sx={{ fontSize: 40 }} />
      </Box>
      <Typography variant="h6" sx={{ fontWeight: 700, color: "#0B2046", fontSize: "16px", lineHeight: 1.4 }}>
        {title}
      </Typography>
    </Paper>
  </motion.div>
);

const EducationFeatures = () => {
  return (
    <Box sx={{ position: "relative", bgcolor: "#00B4D8", pt: 16, pb: 20 }}>
      {/* Top Wave linking from previous section */}
      <Box sx={{ position: "absolute", top: -1, left: 0, width: "100%", zIndex: 1, transform: "rotate(180deg)" }}>
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: "block", width: "100%" }}>
          <path d="M0,50 C300,100 500,0 800,50 C1100,100 1200,30 1440,0 L1440,100 L0,100 Z" fill="#ffffff" />
        </svg>
      </Box>

      {/* Decorative large faint text in background */}
      <Typography sx={{ 
        position: "absolute", top: "10%", left: "5%", 
        fontSize: "12vw", fontWeight: 900, color: "rgba(255,255,255,0.05)", 
        whiteSpace: "nowrap", pointerEvents: "none", zIndex: 0 
      }}>
        FEATURES
      </Typography>

      <Container maxWidth="md" sx={{ position: "relative", zIndex: 2 }}>
        
        {/* Header */}
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography sx={{ color: "#ffffff", fontSize: "16px", mb: 1, letterSpacing: "0.5px" }}>
            From listing management to post-sale documentation, we design <br/> and develop every piece your team actually uses.
          </Typography>
          <Typography variant="h2" sx={{ fontWeight: 800, color: "#ffffff", fontSize: { xs: "32px", md: "46px" } }}>
            What We Build — Feature Overview
          </Typography>
        </Box>

        {/* 3x2 Grid */}
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <FeatureCard icon={DomainOutlinedIcon} title="Property Listing Portal" delay={0.1} />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <FeatureCard icon={MagnetOutlinedIcon} title="Lead Capture & Routing" delay={0.2} />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <FeatureCard icon={ShowChartOutlinedIcon} title="Sales CRM" delay={0.3} />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <FeatureCard icon={EventAvailableOutlinedIcon} title="Site Visit Scheduler" delay={0.4} />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <FeatureCard icon={DescriptionOutlinedIcon} title="Document Management" delay={0.5} />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <FeatureCard icon={InsertChartOutlinedIcon} title="Analytics Dashboard" delay={0.6} />
          </Grid>
        </Grid>

      </Container>
    </Box>
  );
};

export default EducationFeatures;
