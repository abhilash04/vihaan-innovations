import React from "react";
import { Box, Container, Typography, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";
import GroupsIcon from '@mui/icons-material/Groups';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import SecurityIcon from '@mui/icons-material/Security';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

const ProblemCard = ({ icon: Icon, title, align = "left", delay }) => (
  <motion.div
    initial={{ opacity: 0, x: align === "left" ? -30 : 30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
  >
    <Paper
      elevation={0}
      sx={{
        p: 3,
        borderRadius: "12px",
        bgcolor: "#cbf1f5", // Light cyan background based on the problem cards in the mock
        border: "1px solid rgba(0, 180, 216, 0.4)",
        boxShadow: "0 4px 15px rgba(0, 0, 0, 0.05)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        mb: 2,
        width: "100%",
        maxWidth: "400px",
        mx: { xs: "auto", md: 0 },
        ml: align === "right" ? { md: "auto" } : 0,
        mr: align === "left" ? { md: "auto" } : 0,
        transition: "all 0.3s ease",
        "&:hover": {
          transform: "translateY(-3px)",
          boxShadow: "0 10px 20px rgba(0, 180, 216, 0.15)",
        }
      }}
    >
      <Typography sx={{ fontWeight: 700, color: "#1a1a1a", fontSize: "15px", lineHeight: 1.4, maxWidth: "70%" }}>
        {title}
      </Typography>
      <Box sx={{ 
        width: 48, height: 48, borderRadius: "50%", 
        bgcolor: "rgba(0, 180, 216, 0.15)", color: "#0B2046",
        display: "flex", justifyContent: "center", alignItems: "center" 
      }}>
        <Icon sx={{ fontSize: 24 }} />
      </Box>
    </Paper>
  </motion.div>
);

const MatrimonyProblem = () => {
  return (
    <Box sx={{ bgcolor: "#F8FAFC", py: 12, position: "relative" }}>
      <Container maxWidth="md">
        
        {/* Header */}
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Box sx={{ display: "inline-block", mb: 1 }}>
            <Typography sx={{ 
              fontWeight: 800, color: "#0B2046", fontSize: "28px", 
              display: "flex", alignItems: "center", gap: 1, 
              justifyContent: "center" 
            }}>
              <Box component="span" sx={{ 
                width: 32, height: 32, borderRadius: "50%", 
                border: "2px solid #0B2046", display: "flex", 
                alignItems: "center", justifyContent: "center", fontSize: "18px" 
              }}>3</Box>
              The Problem
            </Typography>
          </Box>
          <Typography sx={{ color: "#666", fontSize: "16px" }}>
            Make it real (staggered or sequential pain points)
          </Typography>
        </Box>

        {/* Staggered Grid */}
        <Grid container spacing={3} sx={{ position: "relative", zIndex: 1 }}>
          <Grid item xs={12} md={6}>
            <ProblemCard align="left" icon={GroupsIcon} title="Profiles scattered across WhatsApp groups/spreadsheets" delay={0.1} />
          </Grid>
          <Grid item xs={12} md={6}>
            <ProblemCard align="right" icon={FilterAltIcon} title="Manual filtering for hours" delay={0.2} />
          </Grid>
          
          <Grid item xs={12} md={6}>
            <ProblemCard align="left" icon={SecurityIcon} title="Generic platforms lack privacy/trust" delay={0.3} />
          </Grid>
          <Grid item xs={12} md={6}>
            <ProblemCard align="right" icon={RequestQuoteIcon} title="Manual payment tracking revenue leakage" delay={0.4} />
          </Grid>
          
          <Grid item xs={12} md={6}>
            <ProblemCard align="left" icon={CompareArrowsIcon} title="Match suggestion failure tracking" delay={0.5} />
          </Grid>
          <Grid item xs={12} md={6}>
            <ProblemCard align="right" icon={SupportAgentIcon} title="500+ profile chaos bureau follow-up" delay={0.6} />
          </Grid>
        </Grid>

      </Container>
    </Box>
  );
};

export default MatrimonyProblem;
