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
        borderRadius: "16px",
        bgcolor: color,
        color: "#ffffff",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        boxShadow: `0 10px 20px ${color}33`, // 20% opacity shadow of the box color
        transition: "transform 0.3s ease",
        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: `0 15px 30px ${color}66`,
        }
      }}
    >
      <Box 
        sx={{ 
          width: 50, height: 50, borderRadius: "50%",
          bgcolor: "rgba(255,255,255,0.2)",
          display: "flex", justifyContent: "center", alignItems: "center",
          mb: 2,
          "& > svg": { fontSize: 28 } 
        }}
      >
        {icon}
      </Box>
      <Typography sx={{ fontWeight: 600, fontSize: "14px", lineHeight: 1.3, whiteSpace: "pre-line" }}>
        {title}
      </Typography>
    </Paper>
  </motion.div>
);

const ListingWhoThisIsFor = () => {
  return (
    <Box sx={{ bgcolor: "#ffffff", py: 12 }}>
      <Container maxWidth="md">
        
        {/* Header */}
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography variant="h2" sx={{ fontWeight: 800, color: "#1a1a1a", fontSize: { xs: "28px", md: "36px" }, mb: 2 }}>
            Who This Is For
          </Typography>
          <Typography sx={{ color: "#666", fontSize: "16px", mb: 1 }}>
            We build custom platform directories across verticals.
          </Typography>
        </Box>

        {/* 4x2 Color Block Grid */}
        <Grid container spacing={3} justifyContent="center">
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
