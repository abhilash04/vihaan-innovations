import React, { useState } from "react";
import { Box, Typography, Container, Grid, Paper, Tabs, Tab, useTheme, useMediaQuery, IconButton } from "@mui/material";
import { styled } from "@mui/system";
import { motion, AnimatePresence } from "framer-motion";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import SchoolIcon from "@mui/icons-material/School";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const industryData = {
  0: { // Healthcare
    title: "Healthcare",
    desc: "Building secure, HIPAA-compliant patient portals, doctor appointment engines, and data analytics dashboards.",
    desc1: "Building secure, HIPAA-compliant patient portals, doctor appointment engines, and data analytics dashboards.",
    checks: ["Telemedicine Apps", "Patient Records (EHR)", "Inventory Management", "Medical Billing", "Inventory Management", "Medical Billing"],
    cards: [
      { title: "Telemedicine Platform", desc: "Secure video consulting with integrated prescription piping formats." },
      { title: "EHR Backend", desc: "Scaling database nodes securely caching patient logs efficiently data." },
      { title: "Telemedicine Platform", desc: "Secure video consulting with integrated prescription piping formats." },
      { title: "EHR Backend", desc: "Scaling database nodes securely caching patient logs efficiently data." },

    ]
  },
  1: { // Education
    title: "Education & E-Learning",
    desc: "Scalable interactive learning management modules with virtual zoom sessions & content delivery pipelines.",
    desc1: "Scalable interactive learning management modules with virtual zoom sessions & content delivery pipelines.",
    checks: ["LMS Development", "Live Classes", "Student Portals", "Online Exams", "Inventory Management", "Medical Billing"],
    cards: [
      { title: "LMS Portal", desc: "Handling course curriculum distribution quiz score trackers maps." },
      { title: "Virtual Class", desc: "Interactive stream nodes syncing chat overlays securely files." },
      { title: "LMS Portal", desc: "Handling course curriculum distribution quiz score trackers maps." },
      { title: "Virtual Class", desc: "Interactive stream nodes syncing chat overlays securely files." },

    ]
  },
  2: { // Real Estate
    title: "Real Estate & PropTech",
    desc: "Intelligent property listing layouts with 3D virtual maps filtering exact configurations effortlessly.",
    desc1: "Intelligent property listing layouts with 3D virtual maps filtering exact configurations effortlessly.",
    checks: ["Property MLS", "Virtual Tours", "CRM for Agents", "Lease Management", "Inventory Management", "Medical Billing"],
    cards: [
      { title: "MLS Database", desc: "Syncing absolute config layouts matching query results direct links." },
      { title: "3D Virtual Map", desc: "Rendering viewport spaces rotating detailed shapes models depth." },
      { title: "LMS Portal", desc: "Handling course curriculum distribution quiz score trackers maps." },
      { title: "Virtual Class", desc: "Interactive stream nodes syncing chat overlays securely files." },

    ]
  },
  3: { // E-commerce
    title: "E-Commerce & Retail",
    desc: "Robust multi-vendor marketplaces architectures handling peak loads caching load balances instantly.",
    desc1: "Robust multi-vendor marketplaces architectures handling peak loads caching load balances instantly.",

    checks: ["Multi-vendor Setup", "Inventory Tracking", "Secure Payments", "Logistics Integration", "Inventory Management", "Medical Billing"],
    cards: [
      { title: "Marketplace Setup", desc: "Piping detailed vendor dashboards layouts inventories streams boards." },
      { title: "Payment Gateway", desc: "Secure endpoints routing transaction nodes auth triggers safely." },
      { title: "LMS Portal", desc: "Handling course curriculum distribution quiz score trackers maps." },
      { title: "Virtual Class", desc: "Interactive stream nodes syncing chat overlays securely files." },

    ]
  },
  4: { // Finance
    title: "Finance & Fintech",
    desc: "Highly secure transaction pipelines managing KYC verifications ledger architectures safely.",
    desc1: "Highly secure transaction pipelines managing KYC verifications ledger architectures safely.",
    checks: ["Micro-loans App", "Corporate Ledger", "Trading Dashboard", "Risk Analytics"],
    cards: [
      { title: "KYC Verification", desc: "Automated OCR reading identity logs validating scores directly." },
      { title: "Asset Tracker", desc: "Real-time feeds mapping stock pricing nodes buffers correctly." },
      { title: "LMS Portal", desc: "Handling course curriculum distribution quiz score trackers maps." },
      { title: "Virtual Class", desc: "Interactive stream nodes syncing chat overlays securely files." },

    ]
  }
};

const CustomTab = styled(Tab)(({ theme }) => ({
  textTransform: "none",
  color: "#475569",
  fontSize: "14px",
  fontWeight: 600,
  padding: "10px 20px",
  minHeight: "auto",
  borderRadius: "50px",
  border: "1px solid rgba(0, 0, 0, 0.05)",
  background: "#ffffff",
  margin: "0 6px",
  fontFamily: "Inter, sans-serif",
  transition: "all 0.3s ease",
  "&.Mui-selected": {
    color: "#ffffff",
    background: "linear-gradient(135deg, #005885, #0087c9)",
    borderColor: "transparent",
    boxShadow: "0 8px 20px rgba(0, 88, 133, 0.15)",
  },
  "&:hover": {
    color: "#0a2233",
    bgcolor: "#f8fafc",
  },
}));

const IndustryExpertise = ({ data }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const {
    subtitle = "INDUSTRY EXPERTISE",
    title = "Delivering Success Across Sectors",
    industries = industryData,
    tabs = [
      { label: "Healthcare", icon: <LocalHospitalIcon sx={{ fontSize: 18 }} /> },
      { label: "Education", icon: <SchoolIcon sx={{ fontSize: 18 }} /> },
      { label: "Real Estate", icon: <HomeWorkIcon sx={{ fontSize: 18 }} /> },
      { label: "E-commerce", icon: <ShoppingCartIcon sx={{ fontSize: 18 }} /> },
      { label: "Finance", icon: <AccountBalanceIcon sx={{ fontSize: 18 }} /> },
    ]
  } = data || {};

  const [activeTab, setActiveTab] = useState(0);

  const categoriesList = tabs;

  const current = industries[activeTab] || industries[0] || { title: "", desc: "", desc1: "", checks: [], cards: [] };

  return (
    <Box sx={{ bgcolor: "#f1f5f9", py: isMobile ? 6 : 8, position: "relative" }}>
      <Container maxWidth="lg">
        {/* Heading */}
        <Box sx={{ textAlign: "center", mb: isMobile ? 3 : 6 }}>
          <Typography sx={{ color: "#0087c9", fontWeight: 700, fontSize: "12px", letterSpacing: "1px", mb: 1.5 }}>
            {subtitle}
          </Typography>
          <Typography variant="h2" sx={{ fontWeight: 800, fontSize: isMobile ? "28px" : "40px", fontFamily: "Urbanist, sans-serif", color: "#0a2233", mb: 2 }}>
            {title}
          </Typography>
        </Box>

        {/* Responsive Tabs */}
        <Box sx={{ display: "flex", justifyContent: "center", mb: isMobile ? 3 : 4, overflowX: "auto", pb: 1 }}>
          <Tabs
            value={activeTab}
            onChange={(e, v) => setActiveTab(v)}
            variant={isMobile ? "standard" : "scrollable"}
            orientation={isMobile ? "vertical" : "horizontal"}
            scrollButtons="auto"
            TabIndicatorProps={{ style: { display: "none" } }}
            sx={isMobile ? { width: "100%" } : {}}
          >
            {categoriesList.map((cat, idx) => (
              <CustomTab
                key={idx}
                label={cat.label}
                sx={{ 
                  margin: isMobile ? "4px auto" : "0 6px", 
                  width: isMobile ? "75%" : "auto", 
                  alignItems: "center",
                  padding: isMobile ? "6px 16px" : "10px 20px",
                  minHeight: isMobile ? "36px" : "auto",
                  fontSize: isMobile ? "13px" : "14px"
                }}
              />
            ))}
          </Tabs>
        </Box>

        {/* Content Area */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
          >
            <Grid container spacing={5} alignItems="center">
              {/* Left Column - Details */}
              <Grid item xs={12} md={5}>
                <Typography variant="h3" sx={{ fontWeight: 800, color: "#0a2233", mb: 2, fontFamily: "Urbanist, sans-serif", fontSize: "28px" }}>
                  {current.title}
                </Typography>
                <Typography sx={{ color: "#475569", fontSize: "16px", lineHeight: 1.6, mb: 2 }}>
                  {current.desc}
                </Typography>
                <Typography sx={{ color: "#475569", fontSize: "16px", lineHeight: 1.6, mb: isMobile ? 2 : 4 }}>
                  {current.desc1}
                </Typography>

                <Grid container spacing={1} sx={{ mb: isMobile ? 0 : 4 }}>
                  {current?.checks?.map((check, i) => (
                    <Grid item xs={isMobile ? 12 : 6} key={i} sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <Box sx={{ width: "6px", height: "6px", minWidth: "6px", bgcolor: "#0087c9", borderRadius: "50%" }} />
                      <Typography sx={{ fontSize: "14px", color: "#475569", fontWeight: 500 }}>{check}</Typography>
                    </Grid>
                  ))}
                </Grid>
              </Grid>

              {/* Right Column - Cards Display */}
              <Grid item xs={12} md={7}>
                <Grid container spacing={3}>
                  {current?.cards?.map((card, idx) => (
                    <Grid item xs={12} sm={6} key={idx} mb={3}>
                      <Paper
                        elevation={0}
                        sx={{
                          background: "#ffffff",
                          border: "1px solid rgba(0, 0, 0, 0.04)",
                          borderRadius: "16px",
                          padding: "24px",
                          height: "80%",
                          transition: "all 0.3s ease",
                          "&:hover": {
                            transform: "translateY(-5px)",
                            boxShadow: "0 10px 30px rgba(0,0,0,0.03)",
                            borderColor: "#0087c9",
                          },
                        }}
                      >
                        <Typography variant="h6" sx={{ color: "#0a2233", fontWeight: 800, mb: 1, fontSize: "16px", fontFamily: "Urbanist, sans-serif" }}>
                          {card.title}
                        </Typography>
                        <Typography sx={{ color: "#64748b", fontSize: "13px", lineHeight: 1.6 }}>
                          {card.desc}
                        </Typography>
                      </Paper>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </motion.div>
        </AnimatePresence>

        {/* Mobile Pagination & Arrows */}
        {isMobile && (
          <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", mt: 4, gap: 2 }}>
            <IconButton 
              onClick={() => setActiveTab((prev) => (prev === 0 ? categoriesList.length - 1 : prev - 1))}
              sx={{ border: "1px solid rgba(0,0,0,0.1)", bgcolor: "#ffffff" }}
            >
              <ArrowBackIcon sx={{ fontSize: 18, color: "#0a2233" }} />
            </IconButton>
            
            <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
              {categoriesList.map((_, idx) => (
                <Box 
                  key={idx} 
                  onClick={() => setActiveTab(idx)}
                  sx={{ 
                    width: activeTab === idx ? "24px" : "8px", 
                    height: "8px", 
                    borderRadius: "4px", 
                    bgcolor: activeTab === idx ? "#0087c9" : "rgba(0,135,201,0.2)",
                    transition: "all 0.3s ease",
                    cursor: "pointer"
                  }} 
                />
              ))}
            </Box>

            <IconButton 
              onClick={() => setActiveTab((prev) => (prev + 1) % categoriesList.length)}
              sx={{ border: "1px solid rgba(0,0,0,0.1)", bgcolor: "#ffffff" }}
            >
              <ArrowForwardIcon sx={{ fontSize: 18, color: "#0a2233" }} />
            </IconButton>
          </Box>
        )}

      </Container>
    </Box>
  );
};

export default IndustryExpertise;
