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
  { label: "Register Account", desc: "Create your profile on the business listing website India platform.", icon: AccountCircleOutlinedIcon },
  { label: "Create Listing", desc: "Add business details, categories, and services.", icon: AddBoxOutlinedIcon },
  { label: "Upload Media", desc: "Showcase images, videos, and key highlights.", icon: CloudUploadOutlinedIcon },
  { label: "Submit for Review", desc: "Admin verifies and approves the listing.", icon: SendOutlinedIcon },
  { label: "Go Live", desc: "Your listing becomes visible to users.", icon: SensorsIcon, highlightColor: "#10b981" },
  { label: "Receive Enquiries", desc: "Start getting leads and customer interactions.", icon: ChatBubbleOutlineIcon },
  { label: "Renew & Upgrade", desc: "Manage plans and boost listing visibility.", icon: AutorenewOutlinedIcon },
];

const userSteps = [
  { label: "Landing Page Visit", desc: "Users enter the business listing website India platform.", icon: VisibilityOutlinedIcon },
  { label: "Smart Search", desc: "Find businesses using filters and keywords.", icon: SearchOutlinedIcon },
  { label: "Browse Listings", desc: "Explore results in grid or list view.", icon: ViewListOutlinedIcon },
  { label: "Save Favorites", desc: "Bookmark listings for later comparison.", icon: FavoriteBorderOutlinedIcon, highlightColor: "#ec4899" },
  { label: "Send Enquiry", desc: "Contact businesses directly.", icon: EmailOutlinedIcon },
  { label: "Submit Reviews", desc: "Share feedback and ratings.", icon: StarOutlineIcon },
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
                style={{ width: "100%", maxWidth: "300px" }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    p: 2,
                    width: "100%",
                    height: "80px",
                    boxSizing: "border-box",
                    borderRadius: "20px", // pill look
                    border: `1px solid ${borderColor}`,
                    bgcolor: "#ebfeffff",
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
                  <Icon sx={{ fontSize: 24, color: step.highlightColor ? color : "#333", mt: 0.5 }} />
                  <Box>
                    <Typography sx={{ fontWeight: 800, fontSize: "14px", color: color }}>
                      {step.label}
                    </Typography>
                    <Typography sx={{ fontSize: "12.5px", color: "#666", lineHeight: 1.3 }}>
                      {step.desc}
                    </Typography>
                  </Box>
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

        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography sx={{ color: "#2563eb", fontWeight: 700, fontSize: "14px", textTransform: "uppercase", letterSpacing: 1, mb: 1 }}>
            Platform Journey
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              color: "#1a1a1a",
              fontSize: { xs: "26px", md: "34px" },
              mb: 2
            }}
          >
            How a Business Listing Website India Works - From Listing to Conversion
          </Typography>
          <Typography sx={{ color: "#666", fontSize: "16px", maxWidth: "700px", margin: "0 auto" }}>
            A seamless and synchronized workflow designed for every business listing website India, connecting listers and users from creation to discovery and engagement.
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

        {/* Footer CTA */}
        <Box sx={{ textAlign: "center", mt: 8 }}>
          <Typography sx={{ color: "#1a1a1a", fontWeight: 700, fontSize: "18px", mb: 2 }}>
            Launch Your Business Listing Website India Today
          </Typography>
          <Box
            component="button"
            sx={{
              bgcolor: "#2563eb",
              color: "#ffffff",
              fontWeight: 700,
              fontSize: "15px",
              px: { xs: 4, md: 5 },
              py: 1.5,
              borderRadius: "8px",
              textTransform: "none",
              cursor: "pointer",
              border: "none",
              boxShadow: "0 4px 14px rgba(37, 99, 235, 0.3)",
              "&:hover": {
                bgcolor: "#1d4ed8",
                boxShadow: "0 6px 20px rgba(37, 99, 235, 0.4)",
              },
            }}
          >
            Get Started
          </Box>
        </Box>

      </Container>
    </Box>
  );
};

export default ListingPlatformJourney;
