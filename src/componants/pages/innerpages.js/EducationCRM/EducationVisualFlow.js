import React from "react";
import { Box, Container, Typography, Paper } from "@mui/material";
import { motion } from "framer-motion";
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import HowToRegOutlinedIcon from '@mui/icons-material/HowToRegOutlined';
import PaymentOutlinedIcon from '@mui/icons-material/PaymentOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import CastForEducationOutlinedIcon from '@mui/icons-material/CastForEducationOutlined';

const flowSteps = [
  { id: 1, label: "Form", icon: <AssignmentTurnedInOutlinedIcon />, top: "25%", left: "45%" },
  { id: 2, label: "Upload", icon: <CloudUploadOutlinedIcon />, top: "40%", left: "30%" },
  { id: 3, label: "Onboarding", icon: <HowToRegOutlinedIcon />, top: "55%", left: "45%" },
  { id: 4, label: "Payment", icon: <PaymentOutlinedIcon />, top: "70%", left: "70%" },
  { id: 5, label: "Confirmation", icon: <CheckCircleOutlineOutlinedIcon />, top: "85%", left: "60%" },
  { id: 6, label: "Class Start", icon: <CastForEducationOutlinedIcon />, top: "95%", left: "80%" }
];

const FlowNode = ({ item, index }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.5, delay: index * 0.2 }}
    style={{
      position: "absolute",
      top: item.top,
      left: item.left,
      transform: "translate(-50%, -50%)",
      display: "flex",
      alignItems: "center",
      gap: "10px",
      zIndex: 2
    }}
  >
    <Paper
      elevation={0}
      sx={{
        width: 60, height: 60, borderRadius: "50%",
        bgcolor: "#ffffff", border: "2px solid #00B4D8",
        display: "flex", justifyContent: "center", alignItems: "center",
        color: "#0B2046",
        boxShadow: "0 10px 20px rgba(0, 180, 216, 0.2)"
      }}
    >
      {item.icon}
    </Paper>
    <Typography sx={{ fontWeight: 700, color: "#1a1a1a", fontSize: "16px", bgcolor: "rgba(255,255,255,0.8)", px: 1.5, py: 0.5, borderRadius: "8px" }}>
      {item.label}
    </Typography>
  </motion.div>
);

const EducationVisualFlow = () => {
  return (
    <Box sx={{ position: "relative", bgcolor: "#e0fbfc", pt: 16, pb: 20, overflow: "hidden" }}>
      
      {/* Background Top Wave connecting from Platform modules */}
      <Box sx={{ position: "absolute", top: -1, left: 0, width: "100%", zIndex: 1, transform: "rotate(180deg)" }}>
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: "block", width: "100%" }}>
          <path d="M0,50 C400,100 600,0 900,50 C1200,100 1300,30 1440,0 L1440,100 L0,100 Z" fill="#F8FAFC" />
        </svg>
      </Box>

      {/* Decorative Large Background Sphere */}
      <Box sx={{ position: "absolute", top: "20%", right: "-10%", width: "500px", height: "500px", background: "radial-gradient(circle, rgba(0, 180, 216, 0.2) 0%, rgba(224, 251, 252, 0) 70%)", borderRadius: "50%", zIndex: 0 }} />

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
              }}>6</Box>
              The Admission Journey — Visual Flow
            </Typography>
          </Box>
        </Box>

        {/* Journey Graphic Area */}
        <Box sx={{ position: "relative", width: "100%", height: "800px", mx: "auto", maxWidth: "900px" }}>

          {/* Top Browser Mockup */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ position: "relative", zIndex: 3, width: "80%", margin: "0 auto" }}
          >
            <Paper elevation={0} sx={{ 
              borderRadius: "16px", overflow: "hidden", 
              boxShadow: "0 20px 50px rgba(0,180,216,0.15)", border: "1px solid rgba(255,255,255,0.5)", bgcolor: "rgba(255,255,255,0.8)", backdropFilter: "blur(10px)"
            }}>
              {/* Browser Header */}
              <Box sx={{ bgcolor: "#f1f3f5", px: 2, py: 1.5, display: "flex", gap: 1 }}>
                <Box sx={{ width: 10, height: 10, borderRadius: "50%", bgcolor: "#ff5f56" }} />
                <Box sx={{ width: 10, height: 10, borderRadius: "50%", bgcolor: "#ffbd2e" }} />
                <Box sx={{ width: 10, height: 10, borderRadius: "50%", bgcolor: "#27c93f" }} />
              </Box>
              {/* Mock Content */}
              <Box sx={{ p: 4 }}>
                <Box sx={{ display: "flex", gap: 4 }}>
                  <Box sx={{ width: "30%", "& > div": { height: 20, bgcolor: "rgba(0,180,216,0.1)", borderRadius: 1, mb: 1.5 } }}>
                    <div/><div/><div/><div/>
                  </Box>
                  <Box sx={{ width: "70%" }}>
                    <Typography variant="h6" sx={{ fontWeight: 800, color: "#1a1a1a", mb: 1 }}>Real Estate CRM</Typography>
                    <Typography sx={{ fontSize: "12px", color: "#666", mb: 2 }}>Admissions CRM</Typography>
                    <Box sx={{ "& > div": { height: 10, bgcolor: "rgba(0,0,0,0.05)", borderRadius: 5, mb: 1, width: "100%" } }}>
                      <div/><div style={{width: "80%"}}/>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Paper>
          </motion.div>

          {/* Handdrawn SVG Path connector */}
          <Box sx={{ position: "absolute", top: "15%", left: 0, width: "100%", height: "85%", zIndex: 1 }}>
             <svg width="100%" height="100%" viewBox="0 0 900 700" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Connecting dashed line flowing downwards through the points */}
              <motion.path 
                d="M450 0 C450 150, 270 100, 270 200 C270 300, 405 280, 405 380 C405 480, 630 460, 630 500 C630 540, 540 550, 540 600 C540 640, 720 620, 720 700" 
                stroke="#00B4D8" 
                strokeWidth="4" 
                strokeDasharray="10 10"
                fill="none"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
            </svg>
          </Box>

          {/* Node Overlay */}
          {flowSteps.map((step, index) => (
            <FlowNode key={step.id} item={step} index={index} />
          ))}

        </Box>
      </Container>
    </Box>
  );
};

export default EducationVisualFlow;
