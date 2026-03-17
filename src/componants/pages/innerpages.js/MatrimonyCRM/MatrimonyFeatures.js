import React from "react";
import { Box, Container, Typography, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";
import FactCheckOutlinedIcon from '@mui/icons-material/FactCheckOutlined';
import InsightsOutlinedIcon from '@mui/icons-material/InsightsOutlined';
import VpnKeyOutlinedIcon from '@mui/icons-material/VpnKeyOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import AutoFixHighOutlinedIcon from '@mui/icons-material/AutoFixHighOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import DashboardCustomizeOutlinedIcon from '@mui/icons-material/DashboardCustomizeOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

const FeatureCard = ({ icon: Icon, title, delay }) => (
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
        p: 2.5,
        borderRadius: "16px",
        bgcolor: "#ffffff",
        border: "1px solid rgba(0, 180, 216, 0.15)",
        boxShadow: "0 10px 25px rgba(0,0,0,0.03)",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        transition: "all 0.3s ease",
        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: "0 15px 35px rgba(0, 180, 216, 0.1)",
          borderColor: "rgba(0, 180, 216, 0.5)"
        }
      }}
    >
      <Box 
        sx={{ 
          color: "#0B2046", 
          mb: 2,
          "& > svg": { fontSize: 40 } 
        }}
      >
        {Icon}
      </Box>
      <Typography sx={{ fontWeight: 700, color: "#1a1a1a", fontSize: "14px", lineHeight: 1.3, whiteSpace: "pre-line" }}>
        {title}
      </Typography>
    </Paper>
  </motion.div>
);

const featureData = [
  { icon: <FactCheckOutlinedIcon />, title: "Profile Registration\n& Verification" },
  { icon: <InsightsOutlinedIcon />, title: "Smart Match\nEngine" },
  { icon: <VpnKeyOutlinedIcon />, title: "Privacy Controls" },
  { icon: <ChatBubbleOutlineOutlinedIcon />, title: "Interest &\nCommunication" },
  { icon: <AutoFixHighOutlinedIcon />, title: "Horoscope &\nCompatibility Module" },
  { icon: <CreditCardOutlinedIcon />, title: "Subscription &\nPayment Management" },
  { icon: <DashboardCustomizeOutlinedIcon />, title: "Admin CRM for\nAgents" },
  { icon: <FavoriteBorderOutlinedIcon />, title: "Success Story\nManagement" }
];

const MatrimonyFeatures = () => {
  return (
    <Box sx={{ bgcolor: "#e3f2fd", py: 12 }}> {/* Matching the light sky blue background color */}
      <Container maxWidth="lg">
        
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
              }}>4</Box>
              What We Build — Feature Overview
            </Typography>
          </Box>
        </Box>

        {/* 4x2 Grid */}
        <Grid container spacing={3} justifyContent="center" sx={{ maxWidth: "900px", mx: "auto" }}>
          {featureData.map((feature, index) => (
            <Grid item xs={6} sm={4} md={3} key={index}>
              <FeatureCard icon={feature.icon} title={feature.title} delay={index * 0.1} />
            </Grid>
          ))}
        </Grid>

      </Container>
    </Box>
  );
};

export default MatrimonyFeatures;
