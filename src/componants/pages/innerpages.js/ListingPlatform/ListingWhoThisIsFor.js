import React from "react";
import { Box, Container, Typography, Grid, Paper, Button } from "@mui/material";
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
  { icon: <WorkIcon />, title: "Job Portals", desc: "Launch job-based listing sites for business with advanced filtering and candidate management.", color: "#3b82f6" },             // Blue
  { icon: <HomeWorkIcon />, title: "Real Estate Platforms", desc: "Build property-focused listing sites in India with map integration and smart search.", color: "#8b5cf6" },         // Purple
  { icon: <DirectionsCarIcon />, title: "Vehicle Buy & Sell", desc: "Create automobile listing platforms with dealer dashboards and pricing tools.", color: "#14b8a6" }, // Teal
  { icon: <LocationOnIcon />, title: "Local Business Directories", desc: "Develop location-based listing sites for business to connect users with nearby services.", color: "#22c55e" },  // Green
  { icon: <DesignServicesIcon />, title: "Service Provider\nMarketplaces", desc: "Enable service listings with booking, reviews, and payment integration.", color: "#7c3aed" }, // Deep Purple
  { icon: <KeyIcon />, title: "Rental Platforms", desc: "Offer rental listing systems for homes, equipment, or shared spaces.", color: "#ef4444" },         // Red/Coral
  { icon: <DynamicFeedIcon />, title: "Classified Websites", desc: "Build classified listing sites in India with user-friendly posting and search features.", color: "#0ea5e9" },      // Light Blue
  { icon: <GroupsIcon />, title: "Niche Community\nDirectories", desc: "Create targeted listing platforms for specific industries or communities.", color: "#0f766e" } // Dark Teal
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

const AudienceBox = ({ icon, title, desc, color, delay }) => (
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
        p: 2,
        borderRadius: "20px", // slightly rounder
        bgcolor: color,
        color: "#ffffff",
        height: "80%",
        width: "85%",
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
      <Typography sx={{ fontWeight: 700, fontSize: "16px", lineHeight: 1.3, whiteSpace: "pre-line", mb: 1 }}>
        {title}
      </Typography>
      <Typography sx={{ fontWeight: 400, fontSize: "14px", lineHeight: 1.4 }}>
        {desc}
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
            Solutions Designed for Modern Listing Sites for Business Across India
          </Typography>
          <Typography sx={{ color: "#666", fontSize: "16px", mb: 1, maxWidth: "700px", margin: "0 auto" }}>
            We build scalable and high-performance listing sites in India and listing sites for business across multiple industries. Whether you're a startup or an enterprise, our platforms are designed to help you grow, manage, and monetize your listings efficiently.
          </Typography>
        </Box>

        {/* 4x2 Color Block Grid with Spacing Fixes */}
        <Grid
          container
          rowSpacing={1}
          columnSpacing={3}
          justifyContent="center"
        >
          {audiences.map((audience, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <AudienceBox {...audience} delay={index * 0.1} />
            </Grid>
          ))}
        </Grid>

        <Box sx={{ textAlign: "center", mt: 6 }}>
          <Button
            variant="contained"
            sx={{
              bgcolor: "#2563eb",
              color: "#ffffff",
              fontWeight: 700,
              fontSize: "15px",
              px: { xs: 2, md: 5 },
              py: 1.8,
              borderRadius: "8px",
              textTransform: "none",
              boxShadow: "0 4px 14px rgba(37, 99, 235, 0.3)",
              "&:hover": {
                bgcolor: "#1d4ed8",
                boxShadow: "0 6px 20px rgba(37, 99, 235, 0.4)",
              },
            }}
          >
            Get Free Consultation
          </Button>
        </Box>

      </Container>
    </Box>
  );
};

export default ListingWhoThisIsFor;
