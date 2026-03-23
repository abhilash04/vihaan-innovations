import React from "react";
import { Box, Container, Typography, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";
import WorkIcon from '@mui/icons-material/Work';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import KeyIcon from '@mui/icons-material/Key';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import GroupsIcon from '@mui/icons-material/Groups';

const audiences = [
  { icon: <WorkIcon />, title: "Job Portals", color: "#3b82f6" },             // Blue
  { icon: <HomeWorkIcon />, title: "Real Estate", color: "#8b5cf6" },         // Purple
  { icon: <DirectionsCarIcon />, title: "Vehicle Buy/Sell", color: "#14b8a6" }, // Teal
  { icon: <LocationOnIcon />, title: "Local Directories", color: "#22c55e" },  // Green
  { icon: <DesignServicesIcon />, title: "Service Provider\nMarketplaces", color: "#7c3aed" }, // Deep Purple
  { icon: <KeyIcon />, title: "Rental Platforms", color: "#ef4444" },         // Red/Coral
  { icon: <DynamicFeedIcon />, title: "Classifieds", color: "#0ea5e9" },      // Light Blue
  { icon: <GroupsIcon />, title: "Niche Community\nDirectories", color: "#0f766e" } // Dark Teal
];

// Floating Ambient Glow Sphere Component
const Bubble = ({ size, color, top, left, right, bottom, delay }) => (
  <motion.div
    animate={{
      y: [0, -15, 0],
      x: [0, 10, 0],
    }}
    transition={{
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
      delay,
    }}
    style={{
      position: "absolute",
      width: size,
      height: size,
      borderRadius: "50%",
      background: color,
      top,
      left,
      right,
      bottom,
      zIndex: 0,
      filter: "blur(30px)",
      opacity: 0.15, // Keep it subtle and light
      pointerEvents: "none",
    }}
  />
);

const AudienceBox = ({ icon, title, color, delay }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay }}
    style={{ height: '100%' }}
  >
    <Paper
      elevation={0}
      sx={{
        p: 3,
        borderRadius: "20px", // slightly rounder
        bgcolor: color,
        color: "#ffffff",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        boxShadow: `0 10px 25px ${color}33`,
        transition: "all 0.3s ease",
        cursor: "pointer",
        "&:hover": {
          transform: "translateY(-8px)", // lift a bit more
          boxShadow: `0 15px 35px ${color}55`,
        }
      }}
    >
      <Box
        sx={{
          width: 55, height: 55, borderRadius: "50%",
          bgcolor: "rgba(255,255,255,0.22)",
          display: "flex", justifyContent: "center", alignItems: "center",
          mb: 2.5,
          transition: "transform 0.3s ease",
          "& > svg": { fontSize: 30 },
          ".MuiPaper-root:hover &": { transform: "scale(1.1)" } // scale icon on hover
        }}
      >
        {icon}
      </Box>
      <Typography sx={{ fontWeight: 700, fontSize: "15px", lineHeight: 1.3, whiteSpace: "pre-line" }}>
        {title}
      </Typography>
    </Paper>
  </motion.div>
);

const ListingWhoThisIsFor = () => {
  return (
    <Box
      sx={{
        bgcolor: "#ffffff",
        py: 6,
        position: "relative",
        overflow: "hidden" // Clip bubbles
      }}
    >
      {/* Background Floating Bubbles */}
      <Bubble size={300} color="#3b82f6" top="-50px" left="-100px" delay={0} />
      <Bubble size={400} color="#8b5cf6" bottom="-100px" right="-150px" delay={1} />
      <Bubble size={200} color="#14b8a6" top="30%" left="15%" delay={2} />
      <Bubble size={250} color="#ef4444" top="10%" right="20%" delay={0.5} />

      <Container maxWidth="md" sx={{ position: "relative", zIndex: 1 }}>

        {/* Header */}
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              color: "#1a1a1a",
              fontSize: { xs: "28px", md: "36px" },
              mb: 2
            }}
          >
            Who This Is For
          </Typography>
          <Typography sx={{ color: "#666", fontSize: "16px", mb: 1 }}>
            We build custom platform directories across verticals.
          </Typography>
        </Box>

        {/* 4x2 Color Block Grid with Spacing Fixes */}
        <Grid
          container
          rowSpacing={10} // Fixes column overlap/touching vertically
          columnSpacing={3}
          justifyContent="center"
          mb={8}
        >
          {audiences.map((audience, index) => (
            <Grid item xs={6} sm={3} key={index}>
              <AudienceBox {...audience} delay={index * 0.1} />
            </Grid>
          ))}
        </Grid>

      </Container>
    </Box>
  );
};

export default ListingWhoThisIsFor;
