import React from "react";
import { Box, Container, Typography, Button, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";
import img from '../../../../assets/Education CRM technology benefits infographic.png'
const StatCard = ({ icon: Icon, value, label, delay }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6, delay }}
  >
    <Paper
      elevation={0}
      sx={{
        p: 2.5,
        borderRadius: "20px",
        bgcolor: "rgba(255, 255, 255, 0.95)",
        backdropFilter: "blur(10px)",
        boxShadow: "0 15px 35px rgba(0,0,0,0.1)",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        minHeight: "120px"
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", mb: 1 }}>
        <Typography variant="h3" sx={{ fontWeight: 800, color: "#1a1a1a", fontSize: "32px", lineHeight: 1 }}>
          {value}
        </Typography>
        <Box sx={{
          bgcolor: "#e0fbfc",
          color: "#00b4d8",
          p: 0.8,
          borderRadius: "10px",
          display: "flex"
        }}>
          <Icon sx={{ fontSize: 20 }} />
        </Box>
      </Box>
      <Typography sx={{ color: "#555", fontSize: "12px", fontWeight: 600, lineHeight: 1.3 }}>
        {label}
      </Typography>
    </Paper>
  </motion.div>
);

const EducationBanner = () => {
  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "90vh",
        bgcolor: "#0B2046", // Deep blue from the education mock
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        pt: { xs: 10, md: 0 },
        pb: { xs: 12, md: 0 }
      }}
    >
      {/* Flowing Wave Backgrounds representing the fluid, watery aesthetic */}
      <Box sx={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0, opacity: 0.8 }}>
        {/* Soft underlying glow */}
        <Box sx={{ position: "absolute", top: "-20%", right: "-10%", width: "70%", height: "70%", background: "radial-gradient(circle, rgba(0, 180, 216, 0.4) 0%, rgba(11, 32, 70, 0) 70%)", borderRadius: "50%", filter: "blur(60px)" }} />

        {/* Abstract floating shapes for liquid look */}
        <motion.div
          animate={{ x: [0, 20, 0], y: [0, -30, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          style={{ position: "absolute", top: "10%", right: "15%", width: "40%", height: "60%", background: "linear-gradient(135deg, rgba(0,180,216,0.2) 0%, rgba(144,224,239,0.1) 100%)", borderRadius: "40% 60% 70% 30% / 40% 50% 60% 50%", filter: "blur(40px)" }}
        />
      </Box>

      {/* Very bottom soft wave leading into the next section */}
      <Box sx={{ position: "absolute", bottom: -5, left: 0, width: "100%", zIndex: 1 }}>
        <svg viewBox="0 0 1440 150" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: "block", width: "100%" }}>
          <path d="M0,150 C320,50 420,-20 720,50 C1020,120 1120,50 1440,0 L1440,150 L0,150 Z" fill="#cbf3f0" />
        </svg>
      </Box>

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
        <Grid container spacing={6} alignItems="center">

          {/* Left Text Content Area */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Typography sx={{ color: "#00B4D8", fontWeight: 700, mb: 1.5, fontSize: "14px", textTransform: "uppercase", letterSpacing: "1px" }}>
                EDUCATION CRM SOLUTIONS
              </Typography>

              <Typography variant="h1" sx={{ color: "#ffffff", fontWeight: 800, fontSize: { xs: "36px", md: "52px" }, lineHeight: 1.1, mb: 3 }}>
                Education CRM for faster admissions
              </Typography>

              <Typography sx={{ color: "rgba(255,255,255,0.7)", fontSize: "18px", lineHeight: 1.6, mb: 5, maxWidth: "500px" }}>
                We build smart education CRM systems that simplify admissions, automate follow-ups, and increase conversions.
              </Typography>

              <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                <Button
                  variant="contained"
                  sx={{
                    background: "#00B4D8",
                    color: "#ffffff",
                    fontWeight: 700,
                    fontSize: "15px",
                    px: 4,
                    py: 1.5,
                    borderRadius: "30px",
                    textTransform: "none",
                    boxShadow: "0 8px 20px rgba(0, 180, 216, 0.3)",
                    "&:hover": {
                      background: "#0096b4",
                      transform: "translateY(-2px)",
                      boxShadow: "0 12px 25px rgba(0, 180, 216, 0.4)",
                    },
                    transition: "all 0.3s"
                  }}
                >
                  Get Free Demo
                </Button>

                <Button
                  variant="outlined"
                  sx={{
                    borderColor: "rgba(255,255,255,0.3)",
                    color: "#ffffff",
                    fontWeight: 600,
                    fontSize: "15px",
                    px: 4,
                    py: 1.5,
                    borderRadius: "30px",
                    textTransform: "none",
                    "&:hover": {
                      borderColor: "#ffffff",
                      bgcolor: "rgba(255,255,255,0.05)",
                    }
                  }}
                >
                  Explore Education CRM Features
                </Button>
              </Box>
            </motion.div>
          </Grid>

          {/* Right Floating Stats Area */}
          <Grid item xs={12} md={6}>
            <Box sx={{ position: "relative", width: "100%", ml: "auto", mr: { xs: "auto", md: 0 } }}>
              <img src={img} alt="Education CRM technology benefits infographic" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: '20px' }} />
            </Box>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
};

export default EducationBanner;
