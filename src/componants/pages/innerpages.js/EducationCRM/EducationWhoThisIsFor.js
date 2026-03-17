import React from "react";
import { Box, Container, Typography, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import CastForEducationOutlinedIcon from '@mui/icons-material/CastForEducationOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import LaptopMacOutlinedIcon from '@mui/icons-material/LaptopMacOutlined';
import PrecisionManufacturingOutlinedIcon from '@mui/icons-material/PrecisionManufacturingOutlined';
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';

const audiences = [
  { icon: <SchoolOutlinedIcon />, title: "Schools &\nK-12 Chains" },
  { icon: <CastForEducationOutlinedIcon />, title: "Coaching\nInstitutes" },
  { icon: <AccountBalanceOutlinedIcon />, title: "Universities\n& Colleges" },
  { icon: <LaptopMacOutlinedIcon />, title: "EdTech\nPlatforms" },
  { icon: <PrecisionManufacturingOutlinedIcon />, title: "Skill\nDevelopment\nCentres" },
  { icon: <PublicOutlinedIcon />, title: "Study Abroad\nConsultants" }
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
        p: 2.5,
        borderRadius: "16px",
        bgcolor: "#ffffff",
        boxShadow: "0 10px 30px rgba(0, 180, 216, 0.1)",
        border: "1px solid rgba(0, 180, 216, 0.15)",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        transition: "all 0.3s ease",
        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: "0 15px 40px rgba(0, 180, 216, 0.2)",
          borderColor: "#00B4D8"
        }
      }}
    >
      <Box 
        sx={{ 
          color: "#00B4D8", 
          mb: 1.5,
          "& > svg": { fontSize: 36 } 
        }}
      >
        {icon}
      </Box>
      <Typography sx={{ fontWeight: 700, color: "#1a1a1a", fontSize: "14px", lineHeight: 1.3, whiteSpace: "pre-line" }}>
        {title}
      </Typography>
    </Paper>
  </motion.div>
);

const EducationWhoThisIsFor = () => {
  return (
    <Box sx={{ position: "relative", bgcolor: "#cbf3f0", pt: 6, pb: 20, overflow: "hidden" }}>
      
      {/* Background Bottom Wave separating this from the next (Problem) section */}
      <Box sx={{ position: "absolute", bottom: -5, left: 0, width: "100%", zIndex: 1 }}>
        <svg viewBox="0 0 1440 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: "block", width: "100%" }}>
          <path d="M0,80 C200,160 400,-20 720,60 C1040,140 1200,80 1440,10 L1440,200 L0,200 Z" fill="#f8f9fe" />
          <path d="M0,120 C300,180 500,-10 800,80 C1100,170 1200,100 1440,40 L1440,200 L0,200 Z" fill="#ffffff" opacity="0.5" />
        </svg>
      </Box>

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
        
        {/* Header */}
        <Box sx={{ textAlign: "center", mb: 6 }}>
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

        {/* Audience Grid - 6 horizontal cards mimicking the specific design */}
        <Grid container spacing={2} justifyContent="center" sx={{ mb: 6 }}>
          {audiences.map((audience, index) => (
            <Grid item xs={6} sm={4} md={2} key={index}>
              <AudienceCard 
                icon={audience.icon} 
                title={audience.title} 
                delay={index * 0.1} 
              />
            </Grid>
          ))}
        </Grid>

        {/* Small descriptive text below */}
        <Box sx={{ textAlign: "center", maxWidth: "600px", mx: "auto" }}>
          <Typography sx={{ color: "#444", fontSize: "14px", lineHeight: 1.6, fontStyle: "italic", opacity: 0.8 }}>
            Women tech leaders, developers, and educators across state — and the same bottlenecks keep appearing. We fix them.
          </Typography>
        </Box>

      </Container>
    </Box>
  );
};

export default EducationWhoThisIsFor;
