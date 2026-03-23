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
        bgcolor: "#e3f2fd", // Light cyan background based on the problem cards in the mock
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
        bgcolor: "#FFF", color: "#0B2046",
        display: "flex", justifyContent: "center", alignItems: "center"
      }}>
        <Icon sx={{ fontSize: 24 }} />
      </Box>
    </Paper>
  </motion.div>
);

const MatrimonyProblem = () => {
  return (
    <Box sx={{ bgcolor: "#F8FAFC", pb: 10, pt: 6, position: "relative" }}>
      <Container maxWidth="md">

        {/* Header */}
        <Box sx={{ textAlign: "center", mb: 4 }}>
          <Box sx={{ display: "inline-block", mb: 1 }}>
            <Typography sx={{
              fontWeight: 800, color: "#0B2046", fontSize: "28px",
              display: "flex", alignItems: "center", gap: 1,
              justifyContent: "center", mb: 2
            }}>
              Challenges Matrimony Businesses Face Without Proper Matrimony Website Development
            </Typography>
          </Box>
          <Typography sx={{ color: "#666", fontSize: "16px", maxWidth: "800px", margin: "0 auto" }}>
            Traditional matchmaking methods are time-consuming and difficult to scale. With advanced matrimony website development, businesses can manage profiles, automate matches, and streamline matrimony operations efficiently.
          </Typography>
        </Box>

        {/* Staggered Grid */}
        <Grid container spacing={3} sx={{ position: "relative", zIndex: 1 }} columnSpacing={10}>
          <Grid item xs={12} md={6}>
            <ProblemCard align="left" icon={GroupsIcon} title="Profiles Chaos (Scattered Across Platforms)" delay={0.1} />
          </Grid>
          <Grid item xs={12} md={6}>
            <ProblemCard align="right" icon={FilterAltIcon} title="Manual Filtering (Hours Spent Formatting)" delay={0.2} />
          </Grid>

          <Grid item xs={12} md={6}>
            <ProblemCard align="left" icon={SecurityIcon} title="Privacy Issues (Lack of Privacy on Generic Platforms)" delay={0.3} />
          </Grid>
          <Grid item xs={12} md={6}>
            <ProblemCard align="right" icon={RequestQuoteIcon} title="Payment Errors (Manual Tracking & Revenue Leakage)" delay={0.4} />
          </Grid>

          <Grid item xs={12} md={6}>
            <ProblemCard align="left" icon={CompareArrowsIcon} title="Match Tracking (Poor Suggestion Tracking)" delay={0.5} />
          </Grid>
          <Grid item xs={12} md={6}>
            <ProblemCard align="right" icon={SupportAgentIcon} title="Profile Overload (Managing 500+ Profiles is Chaos)" delay={0.6} />
          </Grid>
        </Grid>

      </Container>
    </Box>
  );
};

export default MatrimonyProblem;
