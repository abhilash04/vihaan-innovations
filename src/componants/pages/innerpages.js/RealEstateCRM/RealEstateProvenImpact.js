import React from "react";
import { Box, Container, Typography, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const StatCard = ({ value, label, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    style={{ height: "100%" }}
  >
    <Paper
      elevation={0}
      sx={{
        p: 4,
        borderRadius: "20px",
        bgcolor: "#ffffff",
        boxShadow: "0 15px 35px rgba(0,0,0,0.05)",
        border: "1px solid rgba(0,0,0,0.03)",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        transition: "all 0.3s ease",
        "&:hover": {
          transform: "translateY(-8px)",
          boxShadow: "0 20px 40px rgba(0,0,0,0.08)"
        }
      }}
    >
      <Typography variant="h2" sx={{ fontWeight: 800, color: "#1a1a1a", fontSize: { xs: "40px", md: "56px" }, mb: 2, lineHeight: 1 }}>
        {value}
      </Typography>
      <Typography sx={{ color: "#555", fontSize: "15px", fontWeight: 600, lineHeight: 1.4 }}>
        {label}
      </Typography>
    </Paper>
  </motion.div>
);

const RealEstateProvenImpact = () => {
  return (
    <Box sx={{ position: "relative", py: 12, overflow: "hidden" }}>
      
      {/* Background shape */}
      <Box sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(180deg, #E0FBFC 0%, #E8F4F8 100%)',
        zIndex: 0
      }} />

      {/* Decorative Arrow from Previous section */}
      <Box sx={{ position: 'relative', zIndex: 1, display: 'flex', justifyContent: 'center', mb: 6 }}>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDownwardIcon sx={{ color: "#00B4D8", fontSize: 40 }} />
        </motion.div>
      </Box>

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
        
        {/* Header */}
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography variant="h2" sx={{ fontWeight: 800, color: "#0B2046", fontSize: { xs: "32px", md: "46px" } }}>
            Proven Impact
          </Typography>
        </Box>

        {/* 4 Stat Cards Grid */}
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} sm={6} md={3}>
            <StatCard 
              value="3x" 
              label={<>More site visit leads.</>} 
              delay={0.1} 
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <StatCard 
              value="68%" 
              label={<>Less manual follow-up work.</>} 
              delay={0.2} 
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <StatCard 
              value="40%" 
              label={<>Faster booking to registration.</>} 
              delay={0.3} 
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <StatCard 
              value="90" 
              label={<>Complete platform launch time.</>} 
              delay={0.4} 
            />
          </Grid>
        </Grid>

      </Container>
    </Box>
  );
};

export default RealEstateProvenImpact;
