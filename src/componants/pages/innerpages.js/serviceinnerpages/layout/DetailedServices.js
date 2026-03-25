import React, { useState } from "react";
import { Box, Typography, Grid, Container, Paper, Tabs, Tab } from "@mui/material";
import { styled } from "@mui/system";
import { motion, AnimatePresence } from "framer-motion";
import CodeIcon from "@mui/icons-material/Code";
import AssessmentIcon from "@mui/icons-material/Assessment";
import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";

const serviceData = {
  0: { // Services Development
    cards: [
      { title: "Web Apps", desc: "Custom web systems building dashboards workflows." },
      { title: "Mobile Apps", desc: "Native & Hybrid iOS/Android architectures apps frameworks." },
      { title: "E-Commerce", desc: "Multi-vendor systems handling secure inventories transactions." },
      { title: "UI/UX Design", desc: "Intuitive frames sculpting user workflows visuals nicely." },
      { title: "CMS Portals", desc: "Handling dynamic loads content distribution networks." },
      { title: "API Integrations", desc: "Building secure rest endpoints piping data easily." },
      { title: "Product Protyping", desc: "Validating hypothesis frames running iterations speed triggers." },
      { title: "SaaS Systems", desc: "Multi-tenant logic nodes scaling architecture overlays." },
      { title: "PWA Setup", desc: "Offline capable dashboards loading instant screen paints." },
      { title: "QA Testing", desc: "Automated test suites running regression bug fixes." },
    ]
  },
  1: { // Digital Marketing
    cards: [
      { title: "SEO Strategy", desc: "Organic ranking growth pumping keyword density scores titles." },
      { title: "SMM Ads", desc: "Facebook/Instagram leads capping high CTR yield overlays." },
      { title: "Google PPC", desc: "Targeted bidding maps driving exact intent traffic directly." },
      { title: "Email Marketing", desc: "Automating drip workflows nurture sequences converting users tabs." },
      { title: "Content Creation", desc: "Blogs/Articles mapping contextual relevancies building trust streams." },
      { title: "Brand Identity", desc: "Logos/Visual styles defining corporate aesthetics perfectly." },
      { title: "Local SEO", desc: "Google map listings drive walk-in footfalls local areas." },
      { title: "Analytics setups", desc: "GA4/Tag maps tracking exact attribution user journeys." },
    ]
  },
  2: { // Animation & Video
    cards: [
      { title: "2D Explainer", desc: "Character driven story reels pitching product metrics easily." },
      { title: "3D Motion", desc: "High-end product reveals rotating detailed viewport shapes mesh." },
      { title: "Corporate Video", desc: "Brand stories covering testimonial shoots high quality exports." },
      { title: "VFX & Compositing", desc: "Green screen removal appending CGI backing renders nicely." },
      { title: "Social Reel cuts", desc: "Shorts dimensions hook driving fast retention view counts." },
      { title: "Logo Animation", desc: "Bumper reveals intro outro clips packaging visuals standard." },
      { title: "Cinematic Grade", desc: "Color LUT overlays mapping correct mood tone adjustments." },
      { title: "Voice Over", desc: "Studio recorded tracks syncing standard audio node splits." },
    ]
  },
  3: { // Software Development
    cards: [
      { title: "ERP Software", desc: "Managing supply chains inventories workflows accounting datasets." },
      { title: "Custom CRM", desc: "Leads tracking pipelines managing contextual notes emails trigger." },
      { title: "HRM Portal", desc: "Payroll systems managing logs leave requests approvals metrics." },
      { title: "LMS Software", desc: "Course curriculum distribution tracking user progress test scores." },
    ]
  }
};

const CustomTab = styled(Tab)(({ theme }) => ({
  textTransform: "none",
  color: "rgba(255, 255, 255, 0.6)",
  fontSize: "16px",
  fontWeight: 600,
  justifyContent: "flex-start",
  padding: "16px 24px",
  minHeight: "auto",
  borderRadius: "12px",
  marginBottom: "8px",
  fontFamily: "Inter, sans-serif",
  transition: "all 0.3s ease",
  "&.Mui-selected": {
    color: "#ffffff",
    bgcolor: "rgba(37, 99, 235, 0.08)",
  },
  "&:hover": {
    color: "#ffffff",
    bgcolor: "rgba(255, 255, 255, 0.03)",
  },
}));

const ServiceCard = styled(Paper)(({ theme }) => ({
  background: "rgba(255, 255, 255, 0.03)",
  backdropFilter: "blur(12px)",
  border: "1px solid rgba(255, 255, 255, 0.06)",
  borderRadius: "16px",
  padding: "24px",
  height: "100%",
  transition: "all 0.3s ease",
  position: "relative",
  overflow: "hidden",
  cursor: "pointer",
  "&::after": {
    content: '""',
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "0%",
    height: "2px",
    background: "linear-gradient(90deg, #2563eb, #06b6d4)",
    transition: "width 0.3s ease",
  },
  "&:hover": {
    transform: "translateY(-5px)",
    background: "rgba(255, 255, 255, 0.05)",
    "&::after": { width: "100%" },
  },
}));

const DetailedServices = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const categoriesList = [
    { label: "Services Development", icon: <CodeIcon /> },
    { label: "Digital Marketing", icon: <AssessmentIcon /> },
    { label: "Animation & Video", icon: <VideoCameraBackIcon /> },
    { label: "Software Development", icon: <SettingsSuggestIcon /> },
  ];

  return (
    <Box sx={{ bgcolor: "#0d1f35", py: { xs: 10, md: 14 }, position: "relative" }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>

          {/* Left Column - Tabs (25%) */}
          <Grid item xs={12} md={3}>
            <Box sx={{ position: { md: "sticky" }, top: "100px" }}>
              <Typography variant="h4" sx={{ fontWeight: 800, color: "#ffffff", mb: 4, fontFamily: "Urbanist, sans-serif" }}>
                Browse Solutions
              </Typography>
              <Tabs
                orientation="vertical"
                value={activeTab}
                onChange={handleTabChange}
                TabIndicatorProps={{
                  sx: {
                    left: 0,
                    width: "4px",
                    bgcolor: "#06b6d4",
                    borderRadius: "4px",
                  },
                }}
                sx={{
                  "& .MuiTabs-flexContainer": { alignItems: "stretch" },
                }}
              >
                {categoriesList.map((cat, idx) => (
                  <CustomTab
                    key={idx}
                    icon={cat.icon}
                    iconPosition="start"
                    label={cat.label}
                  />
                ))}
              </Tabs>
            </Box>
          </Grid>

          {/* Right Column - Cards Grid (75%) */}
          <Grid item xs={12} md={9}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <Grid container spacing={3}>
                  {serviceData[activeTab].cards.map((card, i) => (
                    <Grid item xs={12} sm={activeTab === 3 ? 12 : 6} md={activeTab === 3 ? 12 : 4} key={i}>
                      <ServiceCard>
                        <Typography variant="h6" sx={{ color: "#ffffff", fontWeight: 700, mb: 1, fontSize: "16px", fontFamily: "Urbanist, sans-serif" }}>
                          {card.title}
                        </Typography>
                        <Typography sx={{ color: "#94a3b8", fontSize: "13px", lineHeight: 1.6 }}>
                          {card.desc}
                        </Typography>
                      </ServiceCard>
                    </Grid>
                  ))}
                </Grid>
              </motion.div>
            </AnimatePresence>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
};

export default DetailedServices;
