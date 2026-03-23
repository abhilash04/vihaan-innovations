import React from "react";
import { Box, Container, Typography, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import SensorsIcon from '@mui/icons-material/Sensors';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import AutorenewOutlinedIcon from '@mui/icons-material/AutorenewOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ViewListOutlinedIcon from '@mui/icons-material/ViewListOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const listerSteps = [
  { label: "Register", icon: AccountCircleOutlinedIcon },
  { label: "Create Listing", icon: AddBoxOutlinedIcon },
  { label: "Upload Media", icon: CloudUploadOutlinedIcon },
  { label: "Submit Review", icon: SendOutlinedIcon },
  { label: "Go Live", icon: SensorsIcon, highlightColor: "#10b981" }, // Green for live
  { label: "Get Enquiries", icon: ChatBubbleOutlineIcon },
  { label: "Renew Account", icon: AutorenewOutlinedIcon },
];

const userSteps = [
  { label: "Land Page", icon: VisibilityOutlinedIcon },
  { label: "Smart Search", icon: SearchOutlinedIcon },
  { label: "Browse Grid", icon: ViewListOutlinedIcon },
  { label: "Save Favourites", icon: FavoriteBorderOutlinedIcon, highlightColor: "#ec4899" }, // Special pink
  { label: "Send Enquiry", icon: EmailOutlinedIcon },
  { label: "Submit Review", icon: StarOutlineIcon },
];

// Sub-component for a single glowing sphere
const Bubble = ({ size, color, top, left, right, bottom, delay }) => (
  <motion.div
    animate={{
      y: [0, -10, 0],
      scale: [1, 1.02, 1],
    }}
    transition={{
      duration: 6,
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
      top, left, right, bottom,
      zIndex: 0,
      filter: "blur(40px)",
      opacity: 0.1,
      pointerEvents: "none",
    }}
  />
);

const VerticalFlow = ({ steps, title, direction = "left" }) => {
  return (
    <Box 
      sx={{ 
        display: "flex", 
        flexDirection: "column", 
        alignItems: "center", 
        width: "100%",
        position: "relative" 
      }}
    >
      <Typography sx={{ fontWeight: 800, color: "#1a1a1a", fontSize: "16px", mb: 4, textAlign: "center" }}>
        {title}
      </Typography>

      {/* Vertical Timeline dashed Track */}
      <Box
        sx={{
          position: "absolute",
          left: "50%",
          top: 50,
          bottom: 30,
          width: "1px",
          borderLeft: "2px dashed rgba(0,0,0,0.06)",
          transform: "translateX(-50%)",
          zIndex: 0,
        }}
      />

      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "12px", zIndex: 1, width: "100%" }}>
        {steps.map((step, index) => {
          const Icon = step.icon;
          const color = step.highlightColor || "#1a1a1a";
          const borderColor = step.highlightColor || "rgba(0,0,0,0.06)";
          const isLast = index === steps.length - 1;

          return (
            <React.Fragment key={index}>
              <motion.div
                initial={{ opacity: 0, x: direction === "left" ? -40 : 40, scale: 0.95 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true, margin: "-10px" }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 120
                }}
                style={{ width: "auto" }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    p: 1,
                    px: 1.8,
                    minWidth: "140px",
                    borderRadius: "20px", // pill look
                    border: `1px solid ${borderColor}`,
                    bgcolor: "#ffffff",
                    color: color,
                    boxShadow: "0 2px 8px rgba(0,0,0,0.03)",
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                    "&:hover": {
                      transform: "translateY(-3px) scale(1.02)",
                      boxShadow: "0 5px 15px rgba(0,0,0,0.06)",
                      borderColor: step.highlightColor ? color : "#3b82f6",
                    }
                  }}
                >
                  <Icon sx={{ fontSize: 18, color: step.highlightColor ? color : "#333" }} />
                  <Typography sx={{ fontWeight: 700, fontSize: "12.5px", whiteSpace: "nowrap" }}>
                    {step.label}
                  </Typography>
                </Paper>
              </motion.div>

              {/* Connecting Arrow inside Track */}
              {!isLast && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                >
                  <Box sx={{ height: 25, display: "flex", alignItems: "center", justifyContent: "center", color: "rgba(0,0,0,0.15)" }}>
                    <ArrowDownwardIcon sx={{ fontSize: 16 }} />
                  </Box>
                </motion.div>
              )}
            </React.Fragment>
          );
        })}
      </Box>
    </Box>
  );
};

const ListingPlatformJourney = () => {
  return (
    <Box 
      sx={{ 
        bgcolor: "#fafafa", 
        py: 8, 
        position: "relative", 
        overflow: "hidden" 
      }}
    >
      {/* Background Ambience */}
      <Bubble size={300} color="#3b82f6" top="-50px" left="-50px" delay={0} />
      <Bubble size={250} color="#ec4899" bottom="-50px" right="-50px" delay={1} />

      <Container maxWidth="md" sx={{ position: "relative", zIndex: 1 }}>

        {/* Header */}
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography 
            variant="h2" 
            sx={{ 
              fontWeight: 800, 
              color: "#1a1a1a", 
              fontSize: { xs: "26px", md: "34px" }, 
              mb: 1.5 
            }}
          >
            The Platform Journey
          </Typography>
          <Typography sx={{ color: "#666", fontSize: "15px" }}>
            A synchronized flow from listing creation to user discovery.
          </Typography>
        </Box>

        <Paper
          elevation={0}
          sx={{
            p: { xs: 3, md: 5 },
            bgcolor: "#ffffff",
            borderRadius: "24px",
            border: "1px solid rgba(0,0,0,0.04)",
            boxShadow: "0 10px 40px rgba(0,0,0,0.02)",
            position: "relative"
          }}
        >
          <Grid container spacing={4} justifyContent="center" position="relative">

            {/* Left Column */}
            <Grid item xs={12} sm={6}>
              <VerticalFlow steps={listerSteps} title="Lister Journey" direction="left" />
            </Grid>

            {/* Vertical Divider (Desktop) */}
            <Box 
              sx={{ 
                display: { xs: 'none', sm: 'block' }, 
                position: 'absolute', 
                left: '50%', 
                top: '15%', 
                bottom: '10%', 
                width: '1px', 
                background: 'linear-gradient(to bottom, transparent, rgba(0,0,0,0.04) 10%, rgba(0,0,0,0.04) 90%, transparent)' 
              }} 
            />

            {/* Right Column */}
            <Grid item xs={12} sm={6}>
              <VerticalFlow steps={userSteps} title="User/Buyer Journey" direction="right" />
            </Grid>

          </Grid>
        </Paper>

      </Container>
    </Box>
  );
};

export default ListingPlatformJourney;
