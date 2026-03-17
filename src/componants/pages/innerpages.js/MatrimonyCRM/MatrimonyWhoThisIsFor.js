import React from "react";
import { Box, Container, Typography, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";
import LocationCityIcon from '@mui/icons-material/LocationCity';
import PublicIcon from '@mui/icons-material/Public';
import HandshakeIcon from '@mui/icons-material/Handshake';
import HomeIcon from '@mui/icons-material/Home';
import ShareIcon from '@mui/icons-material/Share';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';

const audiences = [
  { icon: <LocationCityIcon />, title: "Community-based\nMatrimony Platforms" },
  { icon: <PublicIcon />, title: "Regional / Religion-\nspecific Portals" },
  { icon: <HandshakeIcon />, title: "Professional\nMatchmaking Agencies" },
  { icon: <HomeIcon />, title: "Family-run bureaus\ngoing digital" },
  { icon: <ShareIcon />, title: "Matrimony Franchise\nNetworks" },
  { icon: <FlightTakeoffIcon />, title: "NRI & Diaspora\nMatch Platforms" }
];

const AudienceCard = ({ icon, title, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    style={{ height: '100%' }}
  >
    <Paper
      elevation={0}
      sx={{
        p: 3,
        borderRadius: "12px",
        bgcolor: "#ffffff",
        boxShadow: "0 4px 15px rgba(0,0,0,0.03)",
        border: "1px solid rgba(0, 180, 216, 0.15)",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        transition: "all 0.3s ease",
        position: "relative",
        overflow: "hidden",
        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: "0 15px 30px rgba(0, 180, 216, 0.1)",
          borderColor: "#00B4D8"
        }
      }}
    >
      <Box sx={{ position: "absolute", top: 0, left: 0, width: "100%", height: "4px", bgcolor: "transparent", transition: "all 0.3s", ".MuiPaper-root:hover &": { bgcolor: "#00B4D8" } }} />
      <Box 
        sx={{ 
          width: 60, height: 60, borderRadius: "50%",
          bgcolor: "rgba(0, 180, 216, 0.1)",
          color: "#0B2046", 
          mb: 2,
          display: "flex", justifyContent: "center", alignItems: "center",
          "& > svg": { fontSize: 28 } 
        }}
      >
        {icon}
      </Box>
      <Typography sx={{ fontWeight: 700, color: "#1a1a1a", fontSize: "14px", lineHeight: 1.4, whiteSpace: "pre-line" }}>
        {title}
      </Typography>
    </Paper>
  </motion.div>
);

const MatrimonyWhoThisIsFor = () => {
  return (
    <Box sx={{ bgcolor: "#e3f2fd", py: 12 }}> {/* Light sky blue */}
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
              }}>2</Box>
              Who This Is For
            </Typography>
          </Box>
        </Box>

        {/* Audience Grid - 3x2 Layout exact match to image */}
        <Grid container spacing={3} justifyContent="center">
          {audiences.map((audience, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <AudienceCard 
                icon={audience.icon} 
                title={audience.title} 
                delay={index * 0.1} 
              />
            </Grid>
          ))}
        </Grid>

      </Container>
    </Box>
  );
};

export default MatrimonyWhoThisIsFor;
