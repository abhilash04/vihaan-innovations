import React, { useState } from "react";
import { Box, Typography, Container, Grid, Paper, Tabs, Tab } from "@mui/material";
import { styled } from "@mui/system";
import { motion, AnimatePresence } from "framer-motion";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import SchoolIcon from "@mui/icons-material/School";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";

const industryData = {
  0: { // Healthcare
    title: "Healthcare",
    desc: "Building secure, HIPAA-compliant patient portals, doctor appointment engines, and data analytics dashboards.",
    checks: ["Telemedicine Apps", "Patient Records (EHR)", "Inventory Management", "Medical Billing"],
    cards: [
      { title: "Telemedicine Platform", desc: "Secure video consulting with integrated prescription piping formats." },
      { title: "EHR Backend", desc: "Scaling database nodes securely caching patient logs efficiently data." },
    ]
  },
  1: { // Education
    title: "Education & E-Learning",
    desc: "Scalable interactive learning management modules with virtual zoom sessions & content delivery pipelines.",
    checks: ["LMS Development", "Live Classes", "Student Portals", "Online Exams"],
    cards: [
      { title: "LMS Portal", desc: "Handling course curriculum distribution quiz score trackers maps." },
      { title: "Virtual Class", desc: "Interactive stream nodes syncing chat overlays securely files." },
    ]
  },
  2: { // Real Estate
    title: "Real Estate & PropTech",
    desc: "Intelligent property listing layouts with 3D virtual maps filtering exact configurations effortlessly.",
    checks: ["Property MLS", "Virtual Tours", "CRM for Agents", "Lease Management"],
    cards: [
      { title: "MLS Database", desc: "Syncing absolute config layouts matching query results direct links." },
      { title: "3D Virtual Map", desc: "Rendering viewport spaces rotating detailed shapes models depth." },
    ]
  },
  3: { // E-commerce
    title: "E-Commerce & Retail",
    desc: "Robust multi-vendor marketplaces architectures handling peak loads caching load balances instantly.",
    checks: ["Multi-vendor Setup", "Inventory Tracking", "Secure Payments", "Logistics Integration"],
    cards: [
      { title: "Marketplace Setup", desc: "Piping detailed vendor dashboards layouts inventories streams boards." },
      { title: "Payment Gateway", desc: "Secure endpoints routing transaction nodes auth triggers safely." },
    ]
  },
  4: { // Finance
    title: "Finance & Fintech",
    desc: "Highly secure transaction pipelines managing KYC verifications ledger architectures safely.",
    checks: ["Micro-loans App", "Corporate Ledger", "Trading Dashboard", "Risk Analytics"],
    cards: [
      { title: "KYC Verification", desc: "Automated OCR reading identity logs validating scores directly." },
      { title: "Asset Tracker", desc: "Real-time feeds mapping stock pricing nodes buffers correctly." },
    ]
  }
};

const CustomTab = styled(Tab)(({ theme }) => ({
  textTransform: "none",
  color: "rgba(255, 255, 255, 0.6)",
  fontSize: "14px",
  fontWeight: 600,
  padding: "10px 20px",
  minHeight: "auto",
  borderRadius: "50px",
  border: "1px solid rgba(255, 255, 255, 0.1)",
  margin: "0 6px",
  fontFamily: "Inter, sans-serif",
  transition: "all 0.3s ease",
  "&.Mui-selected": {
    color: "#ffffff",
    background: "linear-gradient(135deg, #2563eb, #06b6d4)",
    borderColor: "transparent",
  },
  "&:hover": {
    color: "#ffffff",
    bgcolor: "rgba(255, 255, 255, 0.05)",
  },
}));

const IndustryExpertise = () => {
  const [activeTab, setActiveTab] = useState(0);

  const categoriesList = [
    { label: "Healthcare", icon: <LocalHospitalIcon sx={{ fontSize: 18 }} /> },
    { label: "Education", icon: <SchoolIcon sx={{ fontSize: 18 }} /> },
    { label: "Real Estate", icon: <HomeWorkIcon sx={{ fontSize: 18 }} /> },
    { label: "E-commerce", icon: <ShoppingCartIcon sx={{ fontSize: 18 }} /> },
    { label: "Finance", icon: <AccountBalanceIcon sx={{ fontSize: 18 }} /> },
  ];

  const current = industryData[activeTab];

  return (
    <Box sx={{ bgcolor: "#0a1628", py: { xs: 10, md: 14 }, position: "relative" }}>
      <Container maxWidth="lg">
        {/* Heading */}
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography sx={{ color: "#06b6d4", fontWeight: 600, fontSize: "12px", letterSpacing: "1px", mb: 1.5 }}>
            INDUSTRY EXPERTISE
          </Typography>
          <Typography variant="h2" sx={{ fontWeight: 800, fontSize: { xs: "32px", md: "44px" }, fontFamily: "Urbanist, sans-serif", color: "#ffffff", mb: 2 }}>
            Delivering Success Across Sectors
          </Typography>
        </Box>

        {/* Horizontal Scrollable Tabs */}
        <Box sx={{ display: "flex", justifyContent: "center", mb: 6, overflowX: "auto", pb: 2 }}>
          <Tabs
            value={activeTab}
            onChange={(e, v) => setActiveTab(v)}
            variant="scrollable"
            scrollButtons="auto"
            TabIndicatorProps={{ style: { display: "none" } }}
          >
            {categoriesList.map((cat, idx) => (
              <CustomTab
                key={idx}
                label={cat.label}
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
                <Typography variant="h3" sx={{ fontWeight: 800, color: "#ffffff", mb: 2, fontFamily: "Urbanist, sans-serif", fontSize: "28px" }}>
                  {current.title}
                </Typography>
                <Typography sx={{ color: "#94a3b8", fontSize: "16px", lineHeight: 1.8, mb: 4 }}>
                  {current.desc}
                </Typography>

                <Grid container spacing={1} sx={{ mb: 4 }}>
                  {current.checks.map((check, i) => (
                    <Grid item xs={6} key={i} sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <Box sx={{ width: "6px", height: "6px", bgcolor: "#06b6d4", borderRadius: "50%" }} />
                      <Typography sx={{ fontSize: "14px", color: "#ffffff" }}>{check}</Typography>
                    </Grid>
                  ))}
                </Grid>
              </Grid>

              {/* Right Column - Cards Display */}
              <Grid item xs={12} md={7}>
                <Grid container spacing={3}>
                  {current.cards.map((card, idx) => (
                    <Grid item xs={12} sm={6} key={idx}>
                      <Paper
                        elevation={0}
                        sx={{
                          background: "rgba(255, 255, 255, 0.03)",
                          backdropFilter: "blur(12px)",
                          border: "1px solid rgba(255, 255, 255, 0.06)",
                          borderRadius: "16px",
                          padding: "24px",
                          height: "100%",
                          transition: "all 0.3s ease",
                          "&:hover": {
                            transform: "translateY(-5px)",
                            background: "rgba(255, 255, 255, 0.05)",
                          },
                        }}
                      >
                        <Typography variant="h6" sx={{ color: "#ffffff", fontWeight: 700, mb: 1, fontSize: "16px", fontFamily: "Urbanist, sans-serif" }}>
                          {card.title}
                        </Typography>
                        <Typography sx={{ color: "#94a3b8", fontSize: "13px", lineHeight: 1.6 }}>
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

      </Container>
    </Box>
  );
};

export default IndustryExpertise;
