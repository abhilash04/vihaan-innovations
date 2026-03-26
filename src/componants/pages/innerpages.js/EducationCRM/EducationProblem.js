import React from "react";
import { Box, Container, Typography, Grid, Paper, Button } from "@mui/material";
import { motion } from "framer-motion";
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import NotificationsOffOutlinedIcon from '@mui/icons-material/NotificationsOffOutlined';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

const ProblemItem = ({ icon: Icon, title, align = "left", delay }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
  >
    <Box sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      mb: { xs: 4, md: 0 }
    }}>
      <Paper
        elevation={0}
        sx={{
          width: 80,
          height: 80,
          borderRadius: "50%",
          bgcolor: "#ffffff",
          border: "2px solid #00B4D8",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mb: 2,
          color: "#0B2046",
          boxShadow: "0 10px 25px rgba(0, 180, 216, 0.15)",
          position: "relative",
          zIndex: 2
        }}
      >
        <Icon sx={{ fontSize: 36 }} />
      </Paper>
      <Typography sx={{ fontWeight: 700, color: "#1a1a1a", fontSize: "14px", lineHeight: 1.3, maxWidth: "150px" }}>
        {title}
      </Typography>
    </Box>
  </motion.div>
);

const EducationProblem = () => {
  return (
    <Box sx={{ bgcolor: "#ffffff", pt: 8, pb: 16, position: "relative" }}>
      <Container maxWidth="lg">

        {/* Header */}
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography sx={{ color: "#00B4D8", fontWeight: 700, mb: 1, fontSize: "14px", textTransform: "uppercase", letterSpacing: "1px" }}>
            Challenges Faced Without Education CRM Software
          </Typography>
          <Typography variant="h2" sx={{ fontWeight: 800, color: "#0B2046", fontSize: { xs: "28px", md: "42px" }, mb: 2 }}>
            Admissions challenges slow your growth
          </Typography>
        </Box>

        {/* Infographic Layout */}
        <Box sx={{ position: "relative", maxWidth: "900px", mx: "auto", minHeight: { xs: "auto", md: "400px" } }}>

          {/* Decorative Pipes SVG (Visible on MD and up) */}
          <Box sx={{ display: { xs: 'none', md: 'block' }, position: "absolute", top: "20%", left: "10%", width: "80%", height: "60%", zIndex: 0 }}>
            <svg width="100%" height="100%" viewBox="0 0 800 300" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Back pipe structure representing chaos */}
              <path d="M50 80 H 300 V 200 H 450" stroke="#e0e0e0" strokeWidth="15" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M750 80 H 500 V 220 H 350" stroke="#e0e0e0" strokeWidth="15" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M200 250 V 120" stroke="#e0e0e0" strokeWidth="15" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M600 250 V 120" stroke="#e0e0e0" strokeWidth="15" strokeLinecap="round" strokeLinejoin="round" />
              {/* Connecting drips/leaks */}
              <circle cx="300" cy="200" r="10" fill="#00B4D8" />
              <circle cx="500" cy="220" r="10" fill="#00B4D8" />
            </svg>
          </Box>

          {/* Central Figure Mockup */}
          <Box sx={{
            display: "flex", justifyContent: "center", mb: { xs: 4, md: 0 },
            position: { md: "absolute" }, top: { md: "30%" }, left: { md: "50%" },
            transform: { md: "translateX(-50%)" }, zIndex: 1
          }}>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            >
              <Box sx={{
                width: 150, height: 150, borderRadius: "50%",
                bgcolor: "#f8f9fe", border: "4px solid #00B4D8",
                display: "flex", justifyContent: "center", alignItems: "center",
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
              }}>
                <ErrorOutlineIcon sx={{ fontSize: 80, color: "#0B2046" }} />
              </Box>
            </motion.div>
          </Box>

          {/* 4 Pain Points scattered around */}
          <Grid container spacing={4} sx={{ position: "relative", zIndex: 2, height: "100%" }}>

            {/* Top Left */}
            <Grid item xs={6} md={3} sx={{ display: "flex", justifyContent: { xs: "center", md: "flex-start" } }}>
              <ProblemItem icon={AssignmentOutlinedIcon} title="No Central Lead Management" delay={0.1} />
            </Grid>

            {/* Top Right */}
            <Grid item xs={6} md={3} sx={{ display: "flex", justifyContent: { xs: "center", md: "flex-end" }, ml: { md: "auto" } }}>
              <ProblemItem icon={ListAltOutlinedIcon} title="No Visibility on Performance" delay={0.2} />
            </Grid>

            {/* Spacer for MD screens to push the next row down */}
            <Grid item xs={12} sx={{ display: { xs: 'none', md: 'block' }, height: "150px" }} />

            {/* Bottom Left */}
            <Grid item xs={6} md={3} sx={{ display: "flex", justifyContent: { xs: "center", md: "center" } }}>
              <ProblemItem icon={VisibilityOffOutlinedIcon} title="Missed Follow-Ups" delay={0.3} />
            </Grid>

            {/* Bottom Right */}
            <Grid item xs={6} md={3} sx={{ display: "flex", justifyContent: { xs: "center", md: "center" }, ml: { md: "auto" } }}>
              <ProblemItem icon={NotificationsOffOutlinedIcon} title="Disorganized Data Handling" delay={0.4} />
            </Grid>

          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default EducationProblem;
