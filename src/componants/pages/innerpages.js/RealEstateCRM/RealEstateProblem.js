import React from "react";
import { Box, Container, Typography, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import HomeWorkOutlinedIcon from '@mui/icons-material/HomeWorkOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import NotificationsOffOutlinedIcon from '@mui/icons-material/NotificationsOffOutlined';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const ProblemCard = ({ icon: Icon, title, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    style={{ height: '100%' }}
  >
    <Paper
      elevation={0}
      sx={{
        p: 4,
        borderRadius: "24px",
        bgcolor: "#ffffff",
        border: "1px solid rgba(0, 180, 216, 0.2)",
        boxShadow: "0 10px 40px rgba(0, 180, 216, 0.08)",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        transition: "all 0.3s ease",
        "&:hover": {
          transform: "translateY(-8px)",
          boxShadow: "0 20px 50px rgba(0, 180, 216, 0.15)",
          borderColor: "#00B4D8"
        }
      }}
    >
      <Box 
        sx={{ 
          width: 80, 
          height: 80, 
          borderRadius: "20px", 
          bgcolor: "#f0f8ff", 
          display: "flex", 
          alignItems: "center", 
          justifyContent: "center",
          mb: 3,
          color: "#00B4D8"
        }}
      >
        <Icon sx={{ fontSize: 40 }} />
      </Box>
      <Typography variant="h6" sx={{ fontWeight: 700, color: "#1a1a1a", fontSize: "18px", lineHeight: 1.4 }}>
        {title}
      </Typography>
    </Paper>
  </motion.div>
);

const RealEstateProblem = () => {
  return (
    <Box sx={{ py: 10, bgcolor: "#ffffff", position: "relative", overflow: "hidden" }}>
      
      {/* Decorative Top Arrow */}
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDownwardIcon sx={{ color: "#00B4D8", fontSize: 40 }} />
        </motion.div>
      </Box>

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
        
        {/* Header */}
        <Box sx={{ textAlign: "center", mb: 8, maxWidth: "800px", mx: "auto" }}>
          <Typography sx={{ color: "#00B4D8", fontWeight: 600, mb: 2, fontSize: "16px", textTransform: "uppercase", letterSpacing: "1px" }}>
            The Problem
          </Typography>
          <Typography variant="h2" sx={{ fontWeight: 800, color: "#1a1a1a", mb: 3, fontSize: { xs: "32px", md: "46px" }, lineHeight: 1.2 }}>
            Real estate teams lose deals due to outdated systems.
          </Typography>
          <Typography sx={{ color: "#666", fontSize: "18px", lineHeight: 1.6 }}>
            Spreadsheets, disconnected apps, and manual follow-ups are hurting your sales daily. Without proper real estate CRM software, tracking leads and managing clients becomes difficult. Our solution fixes these common problems and simplifies your workflow.
          </Typography>
        </Box>

        {/* Cards Grid */}
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <ProblemCard 
              icon={AssignmentOutlinedIcon} 
              title="No Central Lead System" 
              delay={0.1} 
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <ProblemCard 
              icon={HomeWorkOutlinedIcon} 
              title="Property Listings Are a Nightmare" 
              delay={0.2} 
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <ProblemCard 
              icon={VisibilityOffOutlinedIcon} 
              title="Zero Visibility on Agent Performance" 
              delay={0.3} 
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <ProblemCard 
              icon={NotificationsOffOutlinedIcon} 
              title="Follow-ups Fall Through the Cracks" 
              delay={0.4} 
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default RealEstateProblem;
