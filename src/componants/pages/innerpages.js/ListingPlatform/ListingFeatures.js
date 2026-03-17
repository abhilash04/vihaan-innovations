import React from "react";
import { Box, Container, Typography, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";
import EditNoteIcon from '@mui/icons-material/EditNote';
import SearchIcon from '@mui/icons-material/Search';
import DashboardIcon from '@mui/icons-material/Dashboard';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import FindInPageIcon from '@mui/icons-material/FindInPage';
import StarRateIcon from '@mui/icons-material/StarRate';

const features = [
  { icon: <EditNoteIcon />, title: "Listing Submission", desc: "Listing approval and listing customizer", color: "#3b82f6" }, // Blue
  { icon: <SearchIcon />, title: "Powerful Search", desc: "Powerful area search and URL search", color: "#a855f7" }, // Purple
  { icon: <DashboardIcon />, title: "User Dashboards", desc: "User dashboards and SEO data filters", color: "#22c55e" }, // Green
  { icon: <QuestionAnswerIcon />, title: "Enquiry & Lead System", desc: "Enquiry & Lead System", color: "#14b8a6" }, // Teal
  { icon: <VerifiedUserIcon />, title: "Listing Moderation", desc: "Listing moderation", color: "#22c55e" }, // Green
  { icon: <MonetizationOnIcon />, title: "Paid Listing Plans", desc: "Paid listing plans, paid rating plans", color: "#f59e0b" }, // Gold/Yellow
  { icon: <FindInPageIcon />, title: "SEO-Optimized Pages", desc: "SEO-Optimized Pages", color: "#22c55e" }, // Green
  { icon: <StarRateIcon />, title: "Review & Rating System", desc: "Review & Rating System", color: "#f59e0b" } // Gold/Yellow
];

const FeatureCard = ({ icon, title, desc, color, delay }) => (
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
        pt: 4,
        borderRadius: "16px",
        bgcolor: "#ffffff",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        border: "1px solid rgba(0,0,0,0.08)",
        boxShadow: "0 10px 30px rgba(0,0,0,0.03)",
        transition: "all 0.3s ease",
        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: "0 15px 35px rgba(0,0,0,0.08)",
          borderColor: "rgba(0,0,0,0.12)"
        }
      }}
    >
      <Box 
        sx={{ 
          color: color, 
          mb: 2,
          "& > svg": { fontSize: 40 } 
        }}
      >
        {icon}
      </Box>
      <Typography sx={{ fontWeight: 800, color: "#1a1a1a", fontSize: "15px", mb: 1, lineHeight: 1.3 }}>
        {title}
      </Typography>
      <Typography sx={{ color: "#666", fontSize: "13px", lineHeight: 1.5 }}>
        {desc}
      </Typography>
    </Paper>
  </motion.div>
);

const ListingFeatures = () => {
  return (
    <Box sx={{ bgcolor: "#fafafa", py: 14 }}>
      <Container maxWidth="lg">
        
        {/* Header */}
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography variant="h2" sx={{ fontWeight: 800, color: "#1a1a1a", fontSize: { xs: "28px", md: "36px" }, mb: 2 }}>
            Feature Overview
          </Typography>
          <Typography sx={{ color: "#666", fontSize: "16px", mb: 1 }}>
            Exclusive and capabilities of every feature and architecture modules.
          </Typography>
        </Box>

        {/* 4x2 Grid */}
        <Grid container spacing={3}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <FeatureCard {...feature} delay={index * 0.1} />
            </Grid>
          ))}
        </Grid>

      </Container>
    </Box>
  );
};

export default ListingFeatures;
