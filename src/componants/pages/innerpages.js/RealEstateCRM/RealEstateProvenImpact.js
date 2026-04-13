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
        p: 2.5, // Reduced from 3
        borderRadius: "16px", // Slightly tighter radius
        bgcolor: "#ffffff",
        boxShadow: "0 10px 25px rgba(0,0,0,0.04)", // Softer shadow for smaller card
        border: "1px solid rgba(0,0,0,0.03)",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        transition: "all 0.3s ease",
        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: "0 15px 30px rgba(0,0,0,0.08)"
        }
      }}
    >
      <Typography variant="h2" component="div" sx={{ fontWeight: 800, color: "#1a1a1a", mb: 1, lineHeight: 1 }}>
        {value}
      </Typography>
      <Typography sx={{ color: "#555", fontSize: "14px", fontWeight: 600, lineHeight: 1.3 }}>
        {label}
      </Typography>
    </Paper>
  </motion.div>
);

const RealEstateProvenImpact = () => {
  return (
    <Box sx={{ position: "relative", pb: 10, pt: 6, overflow: "hidden" }}>

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

      {/* Decorative Arrow */}
      <Box sx={{ position: 'relative', zIndex: 1, display: 'flex', justifyContent: 'center', mb: 3 }}>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDownwardIcon sx={{ color: "#00B4D8", fontSize: 32 }} />
        </motion.div>
      </Box>

      <Container maxWidth="md" sx={{ position: "relative", zIndex: 2 }}> {/* Reduced Container width to md */}

        {/* Header */}
        <Box sx={{ textAlign: "center", mb: 5 }}>
          <Typography variant="h2" sx={{ fontWeight: 800, color: "#0B2046", fontSize: { xs: "22px", md: "36px" } }}>
            Proven Impact
          </Typography>
        </Box>

        {/* 4 Stat Cards Grid */}
        <Grid container spacing={2.5} justifyContent="center"> {/* Reduced spacing from 5 to 2.5 */}
          <Grid item xs={6} sm={6} md={3}>
            <StatCard
              value={<Box sx={{ fontSize: "36px", fontWeight: 800, mt: 3 }}>3x</Box>} // Reduced from 42px
              label="More site visit leads."
              delay={0.1}
            />
          </Grid>
          <Grid item xs={6} sm={6} md={3}>
            <StatCard
              value={<Box sx={{ fontSize: "36px", fontWeight: 800, mt: 3 }}>68%</Box>}
              label="Less manual follow-up work."
              delay={0.2}
            />
          </Grid>
          <Grid item xs={6} sm={6} md={3}>
            <StatCard
              value={<Box sx={{ fontSize: "36px", fontWeight: 800, mt: 3 }}>40%</Box>}
              label="Faster booking to registration."
              delay={0.3}
            />
          </Grid>
          <Grid item xs={6} sm={6} md={3}>
            <StatCard
              value={<Box sx={{ fontSize: "36px", fontWeight: 800, mt: 3 }}>90</Box>}
              label="Complete platform launch time."
              delay={0.4}
            />
          </Grid>
        </Grid>

      </Container>
    </Box>
  );
};

export default RealEstateProvenImpact;