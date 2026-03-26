import React from "react";
import { Box, Container, Typography, Button, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PeopleIcon from '@mui/icons-material/People';
import SpeedIcon from '@mui/icons-material/Speed';
import img from '../../../../assets/Building trusted matrimony platforms infographic.png'
const StatCard = ({ icon: Icon, value, label, delay }) => (
  <motion.div
    initial={{ opacity: 0, x: 50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6, delay, type: "spring", stiffness: 100 }}
  >
    <Paper
      elevation={0}
      sx={{
        pr: 4, pl: 3, py: 2,
        borderRadius: "12px",
        bgcolor: "rgba(255, 255, 255, 0.05)",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(255,255,255,0.1)",
        boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        mb: 3,
        maxWidth: "350px",
        ml: "auto",
        transition: "transform 0.3s ease",
        "&:hover": {
          transform: "translateX(-10px)",
          bgcolor: "rgba(255, 255, 255, 0.08)",
        }
      }}
    >
      <Box>
        <Typography sx={{ color: "rgba(255,255,255,0.7)", fontSize: "12px", fontWeight: 600, mb: 0.5, letterSpacing: "0.5px" }}>
          {label}
        </Typography>
        <Typography variant="h3" sx={{ fontWeight: 800, color: "#ffffff", fontSize: "28px", lineHeight: 1 }}>
          {value}
        </Typography>
      </Box>
      <Box sx={{ color: "#00B4D8", opacity: 0.5 }}>
        {/* Abstract graph/wave representation for the right side of the card as seen in the design */}
        <svg width="60" height="30" viewBox="0 0 60 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 25 L15 15 L30 20 L45 5 L60 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M0 30 L15 20 L30 25 L45 10 L60 15 L60 30 Z" fill="currentColor" opacity="0.2" />
        </svg>
      </Box>
    </Paper>
  </motion.div>
);

const MatrimonyBanner = () => {
  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "90vh",
        bgcolor: "#0B1528", // Deep rich blue
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        pt: { xs: 15, md: 0 },
        pb: { xs: 10, md: 0 }
      }}
    >
      {/* Background Graphic Elements */}
      <Box sx={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0 }}>
        {/* Glow behind text */}
        <Box sx={{ position: "absolute", top: "30%", left: "-10%", width: "50%", height: "50%", background: "radial-gradient(circle, rgba(0, 180, 216, 0.15) 0%, rgba(11, 21, 40, 0) 70%)", borderRadius: "50%", filter: "blur(60px)" }} />

        {/* Tech line grid overlay faint */}
        <Box sx={{
          position: "absolute", top: 0, left: 0, width: "100%", height: "100%",
          backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "40px 40px", opacity: 0.5
        }} />
      </Box>

      {/* Very bottom wave leading into Who This Is For visually - very subtle straight cut based on mock */}
      <Box sx={{ position: "absolute", bottom: 0, left: 0, width: "100%", zIndex: 1, height: "40px", background: "linear-gradient(180deg, transparent 0%, rgba(224, 247, 250, 0.2) 100%)" }} />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
        <Grid container spacing={6} alignItems="center">

          {/* Left Text Area */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Typography sx={{ color: "#00B4D8", fontWeight: 700, letterSpacing: 1.5, mb: 1.5, fontSize: "12px", textTransform: "uppercase" }}>
                TRUSTED MATCHMAKING TECHNOLOGY
              </Typography>
              <Typography variant="h1" sx={{ color: "#ffffff", fontWeight: 800, fontSize: { xs: "28px", md: "48px" }, lineHeight: 1.1, mb: 3 }}>
                Trusted <Box component="span" sx={{ color: "#00B4D8" }}>Matrimony App</Box> Development Company for Modern Matchmaking Platforms
              </Typography>

              <Typography sx={{ color: "rgba(255,255,255,0.7)", fontSize: "16px", lineHeight: 1.6, mb: 5, maxWidth: "550px" }}>
                As an experienced matrimony app development company, we create modern matchmaking apps that help matrimony businesses manage profiles, connect matches, and grow their platform efficiently.
              </Typography>

              <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                <Button
                  variant="contained"
                  sx={{
                    background: "linear-gradient(90deg, #00B4D8 0%, #0096b4 100%)",
                    color: "#ffffff",
                    fontWeight: 700,
                    fontSize: "14px",
                    px: 4,
                    py: 1.5,
                    borderRadius: "30px",
                    textTransform: "none",
                    boxShadow: "0 8px 20px rgba(0, 180, 216, 0.3)",
                    "&:hover": {
                      background: "linear-gradient(90deg, #0096b4 0%, #007a99 100%)",
                      transform: "translateY(-2px)",
                      boxShadow: "0 12px 25px rgba(0, 180, 216, 0.4)",
                    },
                    transition: "all 0.3s"
                  }}
                >
                  Start Your Matrimony App
                </Button>

                <Button
                  variant="outlined"
                  sx={{
                    borderColor: "rgba(0, 180, 216, 0.5)",
                    color: "#ffffff",
                    fontWeight: 600,
                    fontSize: "14px",
                    px: 4,
                    py: 1.5,
                    borderRadius: "30px",
                    textTransform: "none",
                    bgcolor: "rgba(0, 180, 216, 0.1)",
                    "&:hover": {
                      borderColor: "#00B4D8",
                      bgcolor: "rgba(0, 180, 216, 0.2)",
                    }
                  }}
                >
                  View Features
                </Button>
              </Box>

              {/* Stats below buttons */}
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: { xs: 2, md: 4 }, mt: 5, pt: 3, borderTop: "1px solid rgba(255,255,255,0.1)" }}>
                {[
                  { value: "50K+", label: "Profiles Managed" },
                  { value: "85%+", label: "Match Success Rate" },
                  { value: "4× Faster", label: "User Response Time" },
                ].map((stat, i) => (
                  <Box key={i}>
                    <Typography sx={{ color: "#ffffff", fontWeight: 800, fontSize: "20px" }}>{stat.value}</Typography>
                    <Typography sx={{ color: "rgba(255,255,255,0.5)", fontSize: "12px", fontWeight: 600, textTransform: "uppercase", mt: 0.5 }}>{stat.label}</Typography>
                  </Box>
                ))}
              </Box>
            </motion.div>
          </Grid>

          {/* Right Floating Stats Area */}
          <Grid item xs={12} md={6}>
            <img src={img} alt="Building trusted matrimony platforms infographic" style={{ width: "110%", height: 'auto', borderRadius: '20px' }} />
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
};

export default MatrimonyBanner;
