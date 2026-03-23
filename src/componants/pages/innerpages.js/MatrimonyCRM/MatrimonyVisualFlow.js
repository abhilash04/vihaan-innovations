import React from "react";
import { Box, Container, Typography, Paper, Grid } from "@mui/material";
import { motion } from "framer-motion";
import LaptopIcon from '@mui/icons-material/Laptop';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MessageIcon from '@mui/icons-material/Message';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import ForumIcon from '@mui/icons-material/Forum';
import CoffeeIcon from '@mui/icons-material/Coffee';
import StarsIcon from '@mui/icons-material/Stars';
import img from '../../../../assets/Matchmaking process flowchart in blue.png'
const flowSteps = [
  { id: 1, label: "Register & Fill Profile\n(monochromatic profiles)", icon: <LaptopIcon />, align: "left" },
  { id: 2, label: "Verification\n& Approval", icon: <CheckCircleIcon />, align: "right" },
  { id: 3, label: "Browse & Filter\nMatches", icon: <FavoriteBorderIcon />, align: "left" },
  { id: 4, label: "Send / Receive\nInterest", icon: <MessageIcon />, align: "left" },
  { id: 5, label: "Mutual Match\nUnlocked", icon: <LockOpenIcon />, align: "right" },
  { id: 6, label: "In-platform\nChat", icon: <ForumIcon />, align: "right" },
  { id: 7, label: "Offline\nMeeting", icon: <CoffeeIcon />, align: "left" },
  { id: 8, label: "Success Story\nSubmitted", icon: <StarsIcon />, align: "right" }
];

const FlowNode = ({ item, index }) => {
  const isLeft = item.align === "left";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      style={{
        display: "flex",
        flexDirection: isLeft ? "row" : "row-reverse",
        alignItems: "center",
        justifyContent: "center",
        gap: "20px",
        marginBottom: "40px",
        position: "relative",
        zIndex: 2,
        width: "100%",
        maxWidth: "600px",
        margin: "0 auto 40px auto"
      }}
    >
      <Box sx={{ width: "200px", textAlign: isLeft ? "right" : "left" }}>
        <Typography sx={{ fontWeight: 700, color: "#1a1a1a", fontSize: "14px", whiteSpace: "pre-line", lineHeight: 1.3 }}>
          {item.label}
        </Typography>
      </Box>

      <Paper
        elevation={0}
        sx={{
          width: 50, height: 50, borderRadius: "50%",
          bgcolor: isLeft ? "#cbf1f5" : "#ffffff", // Alternating colors based on the mock
          border: isLeft ? "2px solid #00B4D8" : "none",
          boxShadow: isLeft ? "none" : "0 5px 15px rgba(0,0,0,0.1)",
          display: "flex", justifyContent: "center", alignItems: "center",
          color: "#0B2046",
          zIndex: 2
        }}
      >
        {item.icon}
      </Paper>

      {/* Spacer to push the node to left/right center */}
      <Box sx={{ width: "200px" }} />
    </motion.div>
  );
};

const MatrimonyVisualFlow = () => {
  return (
    <Box sx={{ bgcolor: "#F8FAFC", py: 8, position: "relative", overflow: "hidden" }}>
      <Container maxWidth="lg" sx={{ position: "relative" }}>

        {/* Header */}
        <Box sx={{ textAlign: "center", mb: 4 }}>
          <Box sx={{ display: "inline-block" }}>
            <Typography sx={{
              fontWeight: 800, color: "#0B2046", fontSize: "28px",
              display: "flex", alignItems: "center", gap: 1,
              justifyContent: "center"
            }}>
              The Member Journey — Visual Flow
            </Typography>
          </Box>
        </Box>

        {/* Winding Flow Area */}
        <Grid container spacing={4} alignItems="center" sx={{ position: "relative", width: "100%", pt: 4, pb: 4 }}>

          <Grid item xs={12} md={6}>
            {/* S-curve dashed tracking line - Simplified representation using an SVG path */}
            <Box sx={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 1, display: { xs: 'none', md: 'block' } }}>
              <svg width="100%" height="100%" viewBox="0 0 1000 800" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                <motion.path
                  // A meandering path matching the left-right-left staggered flow
                  d="M500 50 C500 100, 550 120, 550 150 C550 180, 500 200, 500 250 C500 300, 500 320, 500 350 C500 380, 550 400, 550 450 C550 500, 550 520, 550 550 C550 580, 500 600, 500 650 C500 700, 550 720, 550 750"
                  stroke="#00B4D8"
                  strokeWidth="3"
                  strokeDasharray="8 8"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true, margin: "-200px" }}
                  transition={{ duration: 2, ease: "linear" }}
                />
              </svg>
            </Box>


            {/* Stack Nodes */}
            <Box sx={{ position: "relative", zIndex: 2 }}>
              {flowSteps.map((step, index) => (
                <FlowNode key={step.id} item={step} index={index} />
              ))}
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box>
              <img src={img} alt="Matchmaking process flowchart in blue" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: '20px' }} />
            </Box>

          </Grid>

        </Grid>
      </Container>
    </Box>
  );
};

export default MatrimonyVisualFlow;
