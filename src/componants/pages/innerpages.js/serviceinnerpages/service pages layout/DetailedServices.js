import React, { useState } from "react";
import { Box, Typography, Grid, Container, Paper, Divider } from "@mui/material";
import { styled, keyframes } from "@mui/system";
import { motion, AnimatePresence } from "framer-motion";
import CodeIcon from "@mui/icons-material/Code";
import AssessmentIcon from "@mui/icons-material/Assessment";
import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import ComputerIcon from "@mui/icons-material/Computer";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import CloudIcon from "@mui/icons-material/Cloud";
import StorageIcon from "@mui/icons-material/Storage";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import BrushIcon from "@mui/icons-material/Brush";
import SearchIcon from "@mui/icons-material/Search";
import CampaignIcon from "@mui/icons-material/Campaign";
import BarChartIcon from "@mui/icons-material/BarChart";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import DescriptionIcon from "@mui/icons-material/Description";
import PlaceIcon from "@mui/icons-material/Place";
import MovieIcon from "@mui/icons-material/Movie";
import AnimationIcon from "@mui/icons-material/Animation";
import slowMotionVideoIcon from "@mui/icons-material/SlowMotionVideo";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import BusinessIcon from "@mui/icons-material/Business";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import SchoolIcon from "@mui/icons-material/School";
import img from '../../../../../assets/serviceImg.png'
const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

const rotateClockwise = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const serviceData = [
  {
    title: "Development",
    icon: <CodeIcon sx={{ fontSize: 24 }} />,
    count: "01",
    color: "#0087c9",
    cards: [
      { title: "UI/UX Design", desc: "CGS specializes in visually appealing UI/UX design, creating user-friendly interfaces for enhanced satisfaction and engagement.", icon: <BrushIcon /> },
      { title: "Back-end Development", desc: "Crafting smooth data processing with Python, Java, or PHP. We design website functionality, server-side logic, and APIs for peak performance.", icon: <StorageIcon /> },
      { title: "Responsive Web Design", desc: "Prioritizing adaptable websites: flexible layouts, fluid images, and intuitive navigation for seamless multi-device user experiences.", icon: <ComputerIcon /> },
      { title: "Payment Gateway Integration", desc: "Crafting adaptable sites for seamless multi-device experiences: flexible layouts, fluid images, and intuitive navigation.", icon: <SmartphoneIcon /> },
      { title: "Website Redesign and Revamp", desc: "Elevate your online presence through Website Redesign. Emphasize modern design, user experiences, and enhanced functionality.", icon: <SettingsApplicationsIcon /> },
    ]
  },

];

// Left Illustration Node with floating animation
const DashboardMockup = () => (
  <Box
    sx={{
      position: "relative",
      width: "100%",
      height: { xs: "350px", md: "450px" },
      perspective: "1200px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      animation: `${float} 6s ease-in-out infinite`, // Subtle floating container layout
    }}
  >
    {/* Glow Backing */}
    <Box
      sx={{
        position: "absolute",
        width: "440px",
        height: "440px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(0, 135, 201, 0.08) 0%, transparent 70%)",
        filter: "blur(60px)",
        zIndex: 0,
      }}
    />

    {/* Spinning Orbits in 3D frame */}
    <Box
      sx={{
        position: "absolute",
        width: "100%",
        height: "100%",
        maxWidth: "440px",
        maxHeight: "440px",
        borderRadius: "50%",
        border: "1.5px dashed rgba(0, 135, 201, 0.12)",
        animation: `${rotateClockwise} 40s linear infinite`,
      }}
    />

    {/* Main Illustration Image */}
    <Box
      component={motion.img}
      src={img}
      alt="Service"
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      style={{
        width: "100%",
        maxWidth: "380px",
        height: "auto",
        display: "block",
        zIndex: 2,
        borderRadius: "16px",
        boxShadow: "0 15px 35px rgba(0,0,0,0.06)"
      }}
    />

  </Box>
);

const DetailedServices = ({ data }) => {
  const {
    subtitle = "OUR SERVICES",
    title = "We think big and work across leading technology platforms",
    description = "Empowering businesses through cutting-edge technology solutions across multiple domains",
    services = serviceData
  } = data || {};

  const [activeTab, setActiveTab] = useState(0);
  const [activeItem, setActiveItem] = useState(1); // Set default active row (e.g. 1 for Web Development)

  const activeCat = services[activeTab] || { cards: [] };

  return (
    <Box sx={{ bgcolor: "#ffffff", py: { xs: 6, md: 10 }, position: "relative", overflow: "hidden" }}>
      <Container maxWidth="lg">

        {/* 1. Header Section (Centered) */}
        <Box sx={{ textAlign: "center", mb: 6, mx: "auto", maxWidth: "800px" }}>
          <Typography
            sx={{
              color: "#e60072",
              fontWeight: 700,
              fontSize: "12px",
              letterSpacing: 4,
              textTransform: "uppercase",
              mb: 1.5,
            }}
          >
            {subtitle}
          </Typography>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              color: "#050748",
              fontFamily: "Urbanist, sans-serif",
              fontSize: { xs: "28px", md: "40px" },
              lineHeight: 1.2,
              mb: 1.5,
            }}
          >
            {title}
          </Typography>
          <Typography sx={{ color: "text.secondary", fontSize: "15px", fontWeight: 400 }}>
            {description}
          </Typography>
        </Box>

        {/* 2. Main Content Grid (Two-Column) */}
        <Grid container spacing={6} alignItems="center">

          {/* Left Column - 3D Mockup (40%) */}
          <Grid item xs={12} md={5}>
            <DashboardMockup />
          </Grid>

          {/* Right Column - Interactive Card (60%) */}
          <Grid item xs={12} md={7}>
            <Paper
              elevation={0}
              sx={{
                display: "flex",
                flexDirection: { xs: "column-reverse", md: "row" }, // Tabs above list on mobile
                width: "100%",
                borderRadius: "16px",
                boxShadow: "0 20px 40px rgba(0,0,0,0.05)",
                border: "1px solid rgba(0,0,0,0.02)",
                overflow: "hidden",
                bgcolor: "#ffffff",
              }}
            >
              {/* Service List Panel (Left Side of Card) */}
              <Box sx={{ flex: 1, p: { xs: 2.5, md: 3.5 } }}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    {activeCat?.cards?.map((card, idx) => {
                      const isActive = idx === activeItem;
                      const cardsLen = activeCat?.cards?.length || 0;
                      return (
                        <Box
                          key={idx}
                          onClick={() => setActiveItem(idx)}
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 2,
                            p: 2,
                            mb: idx !== cardsLen - 1 ? 0 : 0, // removed mb, using border stack
                            borderRadius: isActive ? "10px" : "0px",
                            bgcolor: isActive ? "#e8f1ffff" : "#fafdfdff",
                            border: isActive ? "1px solid #3B82F6" : "1px solid transparent",
                            cursor: "pointer",
                            transition: "all 0.2s ease",
                            borderBottom: !isActive && idx !== cardsLen - 1 ? "1px solid #F3F4F6" : "none",
                            "&:hover": {
                              bgcolor: isActive ? "#F0F7FF" : "rgba(0,0,0,0.015)",
                            },
                          }}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              color: isActive ? "#3B82F6" : "#4B5563",
                              transition: "color 0.2s",
                            }}
                          >
                            {React.cloneElement(card.icon, { sx: { fontSize: 22 } })}
                          </Box>
                          <Box>
                            <Typography
                              sx={{
                                fontWeight: 700,
                                fontSize: "15px",
                                color: isActive ? "#3B82F6" : "#111827",
                                fontFamily: "Urbanist, sans-serif",
                                mb: 0.3,
                              }}
                            >
                              {card.title}
                            </Typography>
                            <Typography sx={{ color: "text.secondary", fontSize: "12px", lineHeight: 1.4 }}>
                              {card.desc}
                            </Typography>
                          </Box>
                        </Box>
                      );
                    })}
                  </motion.div>
                </AnimatePresence>
              </Box>



            </Paper>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
};

export default DetailedServices;
